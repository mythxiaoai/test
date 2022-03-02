<template>
  <div>
    <!--表格查询-->
    <slot name="search">
      <el-form
        :model="params"
        :inline="true"
        v-bind="config['el-form']&&config['el-form'].bind"
        v-if="hasSearch"
      >
        <el-form-item v-for="(item,index) in formItem" :key="index" :label="item.label">
          <!-- el-input -->
          <template v-if="item.component=='el-input'">
            <component
              :is="item.component"
              v-model="params[item.prop]"
              v-bind="item.bind"
              v-on="item.on"
            ></component>
          </template>
          <!-- el-select -->
          <template v-if="item.component=='el-select'">
            <component
              :is="item.component"
              v-model="params[item.prop]"
              v-bind="item.bind"
              v-on="item.on"
            >
              <el-option label="全部" value></el-option>
              <component
                :is="'el-option'"
                v-for="(obj,index) of item['el-option']['data']"
                :key="index"
                :label="obj[item['el-option']['label']]"
                :value="obj[item['el-option']['value']]"
              ></component>
            </component>
          </template>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="list">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </slot>

    <slot name="toolbar"></slot>

    <!--表格-->
    <el-table
      :data="data"
      border
      v-bind="config['el-table']&&config['el-table'].bind"
      v-on="$listeners"
    >
      <!--表格列前插槽  为了做多选-->
      <slot name="before"></slot>
      <slot>
        <el-table-column v-for="(item,index) of columns" v-bind="item" :key="index"></el-table-column>
      </slot>
      <!--表格列后插槽  为了做操作-->
      <slot name="after"></slot>
    </el-table>
    <el-pagination
      v-if="isPage"
      @current-change="changeNo"
      :current-page="page.current"
      :page-size="page.pageSize"
      layout="total, prev, pager, next, jumper"
      :total="page.total"
      v-bind="config['el-pagination']"
    ></el-pagination>
  </div>
</template>

<script>
/**
 * 作者:myth小艾
 * 2020年6月16日 10:55:26
 *
 * 解决常规表格布局的页面封装，包括查询，表格，分页三个组件的封装，提供丰富的钩子，提升效率，目前查询选项只做了el-input和el-select的处理，后期需要自行拓展
 *
 * 属性传入
 * search Object  查询选项  不需要写分页对象的key  对象的三个key(pageSize,current,total)这里在插件里面写死了，外部不用关心 会进行默认的混入操作  要与formType的数量一致，节省时间就没做props校验
 * formItem Array[Object{component,label,prop,"el-option":{label,value,data:[]}},on]
 *    component 组件名称
 *    label     查询前面的显示
 *    prop      关联的key是什么  与search对应
 *    "el-option"   非必填  如果是el-select需要有
 *        label:下拉显示的key
 *        value:下拉的值的key
 *        data:[]下拉的数据
 *    on      非常的关键 事件绑定   如 on:{change:()=>{}} 可以在当前组件写，可以获取当当前实例
 *    config：配置组件数据和事件   key为组件名称
 *    isPage:是否要分页组件
 *    getData:一个异步函数需要运行两个参数的getparms和next的函数  Fn(params,next)
 *        params获取当前参数
 *        next是把取到的data值和总条数传递过来的回调函数  next(data,total)   保证业务与数据请求方法不耦合
 *    columns：Array 显示字段
 *
 * 方法
 * setSearch 设置search的值  业务经常用在下拉改变另外查询的值总
 *
 *
 */
/**
参数事例:
{
    search: {
      useCompanyId: "",
      useOrgId: "",
      keywords: ""
    },
    formItem: [
      {
        component: "el-select",
        label: "单位",
        prop: "useCompanyId",
        "el-option": { label: "label", value: "id", data: [] },
        on: {}
      },
      {
        component: "el-select",
        label: "部门",
        prop: "useOrgId",
        "el-option": { label: "label", value: "id", data: [] }
      },
      { component: "el-input", label: "关键词", prop: "keywords" }
    ],
    config: {
      "el-table": {
        bind: {
          size: "mini",
          "highlight-current-row": true
        },
        on: {
          // "current-change"(rows) {
          //   console.log(11111, rows);
          //   console.log(this); 因为this的问题所以用其他方式处理事件
          // }
        }
      }
    },
    getData: () => {
      return [];
    },
    columns: [
      { prop: "useCompanyName", label: "使用单位" },
      { prop: "useOrgName", label: "使用部门" },
      { prop: "useTypeName", label: "设备类别" },
      { prop: "name", label: "设备名称" },
      { prop: "equipCode", label: "单位自编号" },
      { prop: "particularRegistrationCode", label: "设备编号" }
    ]
  }
 */
let page = {
  pageSize: 50,
  current: 1,
  total: 0
};
export default {
  name: "XTable",
  created() {
  },
  props: {
    search: {
      type: Object
    },
    searchMerge: {
      type: Boolean
    },
    formItem: {
      type: Array
    },
    config: {
      type: Object
    },
    isPage: {
      type: Boolean,
      default: true
    },
    getData: {
      type: Function,
      required: true
    },
    columns: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      page: { ...page },
      data: [],
      params: {}
    };
  },
  computed: {
    hasSearch() {
      return Object.keys(this.params).length > 0;
    }
  },
  watch: {
    search: {
      handler(v, ov) {
        if (!v) this.params = {};
        //查询参数
        this.params = deepClone({}, v);
      },
      immediate: true
    },
    getData: {
      handler: function() {
        //重置分页参数 1 50
        this.page.pageSize = page.pageSize;
        this.page.current = page.current;
        //重置查询条件
        this.setSearch();
        //列表
        this.list();
      },
      immediate: true
    }
  },
  methods: {
    setSearch(key, value) {
      if (!key) return false;
      this.params[key] = value;
    },
    list() {
      //分页配置赋值
      let params = deepClone({}, this.page, this.params);
      delete params.total;
      //list/page数据
      this.getData(
        () => params,
        (data, total) => {
          this.page.total = total;
          this.data = data;
        }
      );
    },
    changeNo(val) {
      this.page.current = val;
      this.list();
    },
    reset() {
      let params = deepClone({}, this.params);
      this.params = fromReset(params);
    },
    deepClone
  }
};

/**
 * val 参数  是任意类型
 * 作用:form表单清空   所有对象   支持深层！
 */
function fromReset(val) {
  if (typeof val == "string") {
    val = "";
  } else if (typeof val == "object") {
    if (Array.isArray(val)) {
      val = [];
    } else if (val == null) {
      val = null;
    } else {
      for (var key in val) {
        if (val.hasOwnProperty(key)) {
          val[key] = fromReset(val[key]);
        }
      }
    }
  } else if (typeof val == "boolean") {
    val = false;
  } else if (typeof val == "number") {
    val = 0;
  } else {
    val = "";
  }
  return val;
}

/**
 * 克隆
 */
function deepClone(target, datajson) {
  var args = Array.prototype.slice.call(arguments);
  if (args.length == 1) return args[0];
  var i = 1;
  while (args[i]) {
    //这里做为判断条件 取不到就返回false
    var temp = args[i];
    for (var j in temp) {
      if (temp.hasOwnProperty(j)) {
        if (typeof temp[j] == "object") {
          target[j] = deepClone({}, temp[j]);
        } else {
          target[j] = temp[j];
        }
      }
    }
    i++;
  }
  return target;
}
</script>

<style>
</style>