<template>
  <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="signUp">
      <div>
        <label for="email">Email</label>
        <input
          v-model="credentials.username"
          type="email"
          id="email"
          autocomplete="email">
      </div>

      <div>
        <label for="name">Name</label>
        <input
          v-model="credentials.attributes.name"
          type="text"
          id="name"
          autocomplete="name">
      </div>

      <div>
        <label for="password">Password</label>
        <input
          v-model="credentials.password"
          type="password"
          id="password"
          autocomplete="new-password">
      </div>

      <button type="submit">Sign Up</button>
    </form>

    <nuxt-link to="/sign-in">Sign In</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        username: '',
        password: '',
        attributes: {
          name: '',
        },
      },
    };
  },

  middleware: ['anonimous'],

  methods: {
    signUp() {
      console.log('Signing up with a following credentials', this.credentials);
      this.$store
        .dispatch('signUp', this.credentials)
        .then(() => {
          alert('Success! Please, confirm your email and sign in!');
          this.$router.push('/sign-in');
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
