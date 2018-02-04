<template>
  <div>
    This is your personal page!
    <br>
    Email: {{ user.attributes.email }}.
    <br>
    Name: {{ user.attributes.name }}
    <br>
    <br>
    Change name:
    <form @submit.prevent="updateName">
      <input
        type="text"
        v-model="newName">
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newName: '',
    };
  },

  middleware: ['authenticated'],

  computed: {
    user() {
      return this.$store.getters.user;
    },
  },

  methods: {
    updateName() {
      this.$store.dispatch('updateAttributes', { name: this.newName });
    },
  },
};
</script>

<style scoped>

</style>
