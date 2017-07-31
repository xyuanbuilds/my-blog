<template lang="html">
  <div>
    <nav-header></nav-header>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/Header.vue'
import NavFooter from '@/components/Footer.vue'
export default {
  name: 'Blog',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

<style lang="css">
</style>
