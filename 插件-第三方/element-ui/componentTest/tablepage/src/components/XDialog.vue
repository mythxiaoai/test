<template>
  <el-dialog
    width="70%"
    :title="title"
    :visible="isShow"
    @update:visible="cancel"
    :close-on-click-modal="false"
    v-bind="$attrs"
    v-on="$listeners"
  >
  <slot></slot>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="sure">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
/**
 * 作者:myth小艾
 * 2020年6月16日 10:55:26
 *
 * 属性传入
 * title String 弹框标题
 * show Boolean 控制弹框显示和隐藏
 *
 * 方法
 * cancel 取消
 * sure 确定
 *
 *
 */
export default{
  name: "XDialog",
  props: {
    title: String,
    show: {
      type:Boolean,
      default:false
    }
  },
  created() {},
  data() {
    return {
      isShow: false
    };
  },
  computed: {},
  watch: {
    show(v, ov) {
      this.isShow = v;
    }
  },
  methods: {
    cancel() {
      this.$emit("update:show", false);
      this.$emit("cancel", false);
    },
    sure() {
      this.$emit("sure");
    }
  }
};
</script>

<style>
</style>