<template lang="html">
  <div class="scrollTop" @click="goTop">
    <img src="/static/logo.png" alt="">
  </div>
</template>

<script>
export default {
  methods: {
    goTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="css">
.scrollTop {
  position: fixed;
  bottom: 30px;
  right: 20px;
}
.scrollTop img {
  height: 50px;
  width: 50px;
}
</style>
