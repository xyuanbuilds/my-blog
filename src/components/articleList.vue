<template lang="html">
  <article class="block post">
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
  </article>
</template>

<script>
export default {
}
</script>

<style lang="css">
.post.block {
    margin-bottom: 40px;
    border: 1px solid black;
}
.content .post, .recent-comments {
    white-space: normal;
    word-break: break-all;
    word-wrap: break-word;
}
.block {
    position: relative;
    background: #fff;
    padding: 15px;
    margin-bottom: 20px;
    /*border-radius: 5px;*/
    border: 1px solid black;

}
@media (max-width: 800px) {
  .block {
      border-radius: 0!important;
  }
}
</style>
