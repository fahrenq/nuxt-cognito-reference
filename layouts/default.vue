<template>
  <div>
    <navbar/>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>
