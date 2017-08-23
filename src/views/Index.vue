<template lang="html">
  <div class="index">
    <div id="wrapper">
      <h1>Home</h1>
      <h2>just a Coding Peasant</h2>
      <p><router-link to="/blog">Blog</router-link></p>
      <p><a href="https://github.com/JhonXY">Github</a></p>
      <p><a href="https://www.zhihu.com/people/minia-45/activities">知乎</a></p>
    </div>
    <canvas width="1920" height="950"></canvas>
  </div>
</template>

<script>
export default {
  mounted () {
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-38965494-1']);
    _gaq.push(['_setDomainName', 'evanyou.me']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script');
      ga.type = 'text/javascript';
      ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(ga, s);
    })();

    // document.getElementByClassName('index').addEventListener('touchmove', function(e) {
    //   e.preventDefault()
    // })
    var c = document.getElementsByTagName('canvas')[0],
      x = c.getContext('2d'),
      pr = window.devicePixelRatio || 1,
      w = window.innerWidth,
      h = window.innerHeight,
      f = 90,
      q,
      m = Math,
      r = 0,
      u = m.PI * 2,
      v = m.cos,
      z = m.random
    c.width = w * pr
    c.height = h * pr
    x.scale(pr, pr)
    x.globalAlpha = 0.6

    function i() {
      x.clearRect(0, 0, w, h)
      q = [{
        x: 0,
        y: h * .7 + f
      }, {
        x: 0,
        y: h * .7 - f
      }]
      while (q[1].x < w + f) d(q[0], q[1])
    }

    function d(i, j) {
      x.beginPath()
      x.moveTo(i.x, i.y)
      x.lineTo(j.x, j.y)
      var k = j.x + (z() * 2 - 0.25) * f,
        n = y(j.y)
      x.lineTo(k, n)
      x.closePath()
      r -= u / -50
      x.fillStyle = '#' + (v(r) * 127 + 128 << 16 | v(r + u / 3) * 127 + 128 << 8 | v(r + u / 3 * 2) * 127 + 128).toString(16)
      x.fill()
      q[0] = q[1]
      q[1] = {
        x: k,
        y: n
      }
    }

    function y(p) {
      var t = p + (z() * 2 - 1.1) * f
      return (t > h || t < 0) ? y(p) : t
    }
    document.onclick = i
    document.ontouchstart = i
    i()
  }
}
</script>

<style media="screen" scoped>
  .index{
    font-family: 'Open Sans', 'Helvetica Neue',
    'Hiragino Sans GB', 'LiHei Pro', Arial, sans-serif;
    color: #333;
  }
  #wrapper {
    position: absolute;
    left: 0;
    width: 320px;
    text-align: center;
    top: 50%;
    left: 50%;
    margin-left: -160px;
    margin-top: -160px;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
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
  h1, h2 {
    position: relative;
  }
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  a {
    color: #999;
    text-decoration: none;
    transition: color .2s ease;
  }
  a:hover {
    color: #deba3b;
  }
</style>
