<template>
  <img class="image-logo" src="../assets/logo.png" alt="" />
  <h1>Login</h1>
  <div class="register">
    <input type="email" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button @click="login">Login</button>
    <router-link class="link-item" to="/sign-up">Sign Up</router-link>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'loginView',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      console.warn(result);

      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem('user-info', JSON.stringify(result.data[0]));
        this.$router.push('/');
      }
    },
    mounted() {
      let user = localStorage.getItem('user-info');
      if (user) {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style></style>
