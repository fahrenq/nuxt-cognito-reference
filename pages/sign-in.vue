<template>
  <div>
    <h1>Sign In</h1>
    <form @submit.prevent="signIn">
      <div>
        <label for="email">Email</label>
        <input
          v-model="credentials.username"
          type="email"
          id="email"
          autocomplete="email">
      </div>

      <div>
        <label for="password">Password</label>
        <input
          v-model="credentials.password"
          type="password"
          id="password"
          autocomplete="current-password">
      </div>

      <button type="submit">Sign In</button>
    </form>

    <nuxt-link to="/sign-up">Sign Up</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
    };
  },

  middleware: ['anonimous'],

  methods: {
    signIn() {
      console.log('Signing in with a following credentials', this.credentials);
      this.$store
        .dispatch('signIn', this.credentials)
        .then(() => {
          alert('Signed In!');
          this.$router.push('/');
        })
        .catch((e) => alert(e));
    },
  },
};
</script>

<style scoped>
label {
  display: block;
}
</style>
