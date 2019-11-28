<template>
  <div>
    <el-dialog title="密码修改" :visible.sync="dialogVisible" width="30%">
      <el-form
        ref="passform"
        status-icon
        :rules="rules"
        :model="passform"
        style="label-position:right;"
      >
        <el-form-item prop="oldPass" label="原密码" :label-width="formLabelWidth">
          <el-input
            type="password"
            @blur="verifyPassword"
            v-model="passform.oldPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="newPass" label="新密码" :label-width="formLabelWidth">
          <el-input
            :disabled="disabled"
            type="password"
            v-model="passform.newPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="newPassConfirm" label="新密码确认" :label-width="formLabelWidth">
          <el-input
            :disabled="disabled"
            type="password"
            v-model="passform.newPassConfirm"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sendChangeRequest">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import passwordApi from "@/api/password.js";
export default {
  data() {
    // asysn-validate validator, for three input
    var veriPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      }
      setTimeout(() => {
        passwordApi.verification().then(resp => {
          if (!resp.data) {
            callback(new Error("验证超时"));
          } else if (resp.data.message === "true") {
            //console.log("true!");
            this.disabled = false;
            callback();
          } else {
            callback(new Error("密码错误"));
          }
        });
      }, 2000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.passform.newPassConfirm !== "") {
          this.$refs.passform.validateField("newPassConfirm");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.passform.newPass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      passform: {
        oldPass: "",
        newPass: "",
        newPassConfirm: ""
      },
      dialogVisible: false, // show change password dialog
      disabled: true, // disabled newpass input form
      rules: {
        oldPass: [{ validator: veriPass, trigger: "blur" }],
        newPass: [{ validator: validatePass, trigger: "blur" }],
        newPassConfirm: [{ validator: validatePass2, trigger: "blur" }]
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    // opendialog and clean input content
    openDialog() {
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs["passform"].resetFields();
        this.disabled = true
      });
    },
    verifyPassword() {
      console.log("password");
    },
    sendChangeRequest() {
      (this.dialogVisible = false),
        this.$refs["passform"].validate(valid => {
          if (valid) {
            passwordApi.updateNewPassword(this.passform.newPass).then(resp => {
              //console.log(resp.data.flag === true);
              setTimeout(() => {
                if (resp.data.flag === true) {
                  this.$message.success("密码修改成功");
                }else{
                  this.$message.error("密码修改错误")
                }
              }, 1000);
            });
          }
        });
    }
  }
};
</script>

<style scoped>
</style>