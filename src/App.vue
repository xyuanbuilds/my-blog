<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body,div,dl,dt,dd,ul,ol,li,
h1,h2,h3,h4,h5,h6,pre,code,
form,fieldset,legend,input,
textarea,p,blockquote,th,td {
  margin: 0;
  padding: 0;
}
h1 {
  font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 9px;
  text-transform: uppercase;
  margin: 12px 0;
  left: 4px;
}
h2 {
    color: #999;
    font-weight: normal;
    font-size: 15px;
    letter-spacing: .12em;
    margin-bottom: 30px;
    left: 3px;
}
p {
    font-size: 14px;
    line-height: 2em;
    margin: 0;
    letter-spacing: 2px;
}
</style>
