<template>
  <div class="login">
    <div v-title>登录</div>
    <form>
      <div class="form-group">
        <label>用户名:</label>
        <input type="text" name="userName" v-model="username">
      </div>
      <div class="form-group">
        <label>密&nbsp;&nbsp;&nbsp;码:</label>
        <input type="password" name="password" v-model="password">
      </div>
      <div class="form-footer">
        <button @click="submit">登录</button>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import vueAxios from 'vue-axios';

Vue.use(vueAxios, axios);
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submit: function () {
      const username = this.username;
      const password = this.password;
      const data = {
        username,
        password,
      };
      axios.post('/api/user/login', data).then(() => { });
    }
  }
};
</script>
