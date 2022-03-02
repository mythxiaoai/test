<template>
  <div id="app">
    <x-table ref="xtable" v-bind="tableConfig" @current-change="currentChange">
      <template #after>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="delSelected(scope.row)" type="text">删除</el-button>
          </template>
        </el-table-column>
      </template>
    </x-table>
  </div>
</template>

<script>
import XTable from "./components/XTable";
import list from "./data/list.js";
import company from "./data/company.js";

export default {
  name: "App",
  components: {
    XTable
  },
  async created() {
    //获取参数
    //与直接去拿tableConfig.search不同的是 这里多了pageSize和current
    this.tableConfig.getData = async (getParmas, next) => {
      
      let params = getParmas();
      console.log("list",params,list.data);
      //假装拿到参数去 发送异步请求获取数据和总条数
      let { total, records } = list.data;
      //let { records, total } = (await api.select.equipId(params)).data;
      next(records, total);
    };
  },
  data() {
    return {
      tableConfig: {
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
            "el-option": { label: "abbrName", value: "id", data: company.data },
            on: {
              change() {
                console.log("触发部门");
              }
            }
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
    };
  },
  methods: {
    currentChange(row) {
      console.log("单选", row);
    },
    delSelected(row){
      console.log("删除",row);
      
    }
  }
};
</script>

<style>
#app {

}
</style>
