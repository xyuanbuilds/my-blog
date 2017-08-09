<template lang="html">
  <div class="foot">
    <div class="container">
      <run-time></run-time>
      <p>Made
        <i class="fa fa-heart"></i>
        By JhonXY.
      </p>
    </div>
  </div>
</template>

<script>
import runTime from '@/components/runTime.vue'
export default {
  components: {
    runTime
  }
}
</script>

<style lang="css">
.foot {
  color: #888;
  font-size: 12px;
  position: relative;
  margin-top: 40px;
  padding: 15px 0 10px;
  background-color: rgb(46, 47, 47);
  text-align: center;
}
</style>
