<template>
  <img class="image-logo" src="../assets/logo.png" alt="" />
  <h1>SignUp</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="email" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button @click="signUp">Sign Up</button>
    <router-link class="link-item" to="/login">Login</router-link>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post('http://localhost:3000/users', {
        email: this.email,
        password: this.password,
        name: this.name,
      });
      console.warn(result);
      if (result.status === 201) {
        localStorage.setItem('user-info', JSON.stringify(result.data));
        this.$router.push('/');
      }
    },
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (user) {
      this.$router.push({ name: 'TheHome' });
    }
  },
};
</script>

<style>
.image-logo {
  width: 200px;
}

.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.register input {
  width: 300px;
  height: 40px;
  padding: 0 20px;
  margin-right: auto;
  margin-left: auto;
  display: block;
  margin-bottom: 10px;
}

.register button {
  width: 300px;
  height: 40px;
  background-color: aqua;
  cursor: pointer;
}
</style>
