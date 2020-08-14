<template>
  <mu-container>
    <top-nav>
      my
    </top-nav>
    <mu-form class="mt-5" ref="form" :model="validateForm" v-if="!token">
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
      <mu-button color="primary" full-width @click="submit">提交</mu-button>
      <mu-button style="margin-top:16px" full-width @click="clear"
        >重置</mu-button
      >
    </mu-form>
    <mu-row style="margin-top:60px" justify-content="center" v-else>
      <mu-avatar size="56">
        <img src="/favicon.ico" />
      </mu-avatar>
      <div style="margin-top:20">{{ user.username }}</div>
      <mu-button
        style="margin-top:30px"
        full-width
        color="primary"
        @click="logout"
        >登出</mu-button
      >
    </mu-row>
  </mu-container>
</template>
<script>
import { mapState } from "vuex";
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
  computed: {
    ...mapState({
      token: state => state.user.token,
      user: state => state.user.user
    })
  },
  methods: {
    logout() {
      this.$store.dispatch("user/logout");
    },
    submit() {
      this.$refs.form.validate().then(result => {
        if (result) {
          this.$store.dispatch("user/login", this.validateForm);
        }
      });
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
