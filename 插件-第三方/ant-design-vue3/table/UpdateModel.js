export default {
  el:"#model",
  name: "UpdateModal",
  data() {
    return {
      title: "操作",
      visible: true,
      model: {},
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },

      confirmLoading: false,
      form: this.$form.createForm(this),
      validatorRules: {},
      url: {
        add: "/test/jeecgDemo/add",
        edit: "/test/jeecgDemo/edit",
      },
    };
  },
  created() {},
  methods: {
    disableSubmit(){

    },
    add() {
      this.edit({});
    },
    update(record) {
      this.visible = true;
      this.title = "修改"
      // this.form.resetFields();
      // this.model = Object.assign({}, record);
      // this.visible = true;
      // this.$nextTick(() => {
      //   this.form.setFieldsValue(pick(this.model, "name", "keyWord", "sex", "age", "email", "content"));
      //   //时间格式化
      //   this.form.setFieldsValue({ punchTime: this.model.punchTime ? moment(this.model.punchTime, "YYYY-MM-DD HH:mm:ss") : null });
      //   this.form.setFieldsValue({ birthday: this.model.birthday ? moment(this.model.birthday) : null });
      // });
    },
    close() {
      this.$emit("close");
      this.visible = false;
    },
    handleOk() {
      const that = this;
      // 触发表单验证
      this.form.validateFields((err, values) => {
        if (!err) {
          that.confirmLoading = true;
          let httpurl = "";
          let method = "";
          if (!this.model.id) {
            httpurl += this.url.add;
            method = "post";
          } else {
            httpurl += this.url.edit;
            method = "put";
          }
          let formData = Object.assign(this.model, values);
          //时间格式化
          formData.punchTime = formData.punchTime ? formData.punchTime.format("YYYY-MM-DD HH:mm:ss") : null;
          formData.birthday = formData.birthday ? formData.birthday.format() : null;

          console.log(formData);
          httpAction(httpurl, formData, method)
            .then((res) => {
              if (res.success) {
                that.$message.success(res.message);
                that.$emit("ok");
              } else {
                that.$message.warning(res.message);
              }
            })
            .finally(() => {
              that.confirmLoading = false;
              that.close();
            });
        }
      });
    },
    handleCancel() {
      this.close();
    },
  },
};
