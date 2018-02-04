<template>
  <div>
    <div v-if="!user">Not authenticated</div>
    <div v-else>
      Authenticated as {{ user.attributes.email }}
      |
      <button @click="signOut">Sign out</button>
    </div>
    <hr>
    <nuxt-link to="/sign-in">Sign In (not authenticated only)</nuxt-link>
    |
    <nuxt-link to="/sign-up">Sign Up (not authenticated only)</nuxt-link>
    |
    <nuxt-link to="/personal">Personal page (authenticated only)</nuxt-link>
    <hr>

  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },

  methods: {
    signOut() {
      this.$store.dispatch('signOut').then(() => {
        alert('Signed out successfully');
        this.$router.push('/sign-in');
      });
    },
  },
};
</script>

<style scoped>

</style>
