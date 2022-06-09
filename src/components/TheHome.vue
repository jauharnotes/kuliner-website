<template>
  <h1>This Home Page</h1>
</template>

<script>
export default {
  name: 'TheHome',
  methods: {
    mounted() {
      let user = localStorage.getItem('user-info');
      if (!user) {
        this.$router.push({ name: 'SignUp' });
      }
    },
  },
};
</script>

<style></style>
