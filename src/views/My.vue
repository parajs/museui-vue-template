<template>
  <mu-container>
    <top-nav>
      my
    </top-nav>
    <mu-form ref="form" :model="validateForm">
      <mu-form-item label="用户名" prop="username" :rules="usernameRules">
        <mu-text-field
          v-model="validateForm.username"
          prop="username"
        ></mu-text-field>
      </mu-form-item>
      <mu-form-item label="密码" prop="password" :rules="passwordRules">
        <mu-text-field
          type="password"
          v-model="validateForm.password"
          prop="password"
        ></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="isAgree" :rules="argeeRules">
        <mu-checkbox
          label="同意用户协议"
          v-model="validateForm.isAgree"
        ></mu-checkbox>
      </mu-form-item>
      <mu-form-item>
        <mu-button color="primary" @click="submit">提交</mu-button>
        <mu-button @click="clear">重置</mu-button>
      </mu-form-item>
    </mu-form>
  </mu-container>
</template>
<script>
import { login } from "api/user";
export default {
  name: "My",
  data() {
    return {
      usernameRules: [
        { validate: val => !!val, message: "必须填写用户名" },
        { validate: val => val.length >= 3, message: "用户名长度大于3" }
      ],
      passwordRules: [
        { validate: val => !!val, message: "必须填写密码" },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: "密码长度大于3小于10"
        }
      ],
      argeeRules: [{ validate: val => !!val, message: "必须同意用户协议" }],
      validateForm: {
        username: "",
        password: "",
        isAgree: false
      }
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate().then(result => {
        if (result) {
          this.login();
        }
      });
    },
    async login() {
      const user = await login(this.validateForm);
      console.log(user);
    },
    clear() {
      this.$refs.form.clear();
      this.validateForm = {
        username: "",
        password: "",
        isAgree: false
      };
    }
  }
};
</script>
