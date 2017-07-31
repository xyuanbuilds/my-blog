<template lang="html">
<div class="header navbar">
  <div class="container">
    <nav id="primary-navigation" class="site-navigation primary-navigation">
      <div class="menum">
        <ul class="nav-menu">
          <li class="menu-item"><a href="">首页</a></li>
          <li class="menu-item"><a href="">留言板</a></li>
          <li class="menu-item"><a href="">博客</a></li>
          <li class="menu-item"><a href="">简历</a></li>
          <li class="menu-item"><a href="">github</a></li>
          <li class="menu-item"><a href="">next</a></li>
        </ul>
      </div>
    </nav>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="css">
ol, ul {
    list-style: none;
}
a {
    outline: none;
    text-decoration: none;
    color: #444;
}
/*.head-animated.slideDown {
    -webkit-animation-name: f;
    animation-name: f;
}
.head-animated {
    -webkit-animation-duration: .5s;
    animation-duration: .5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
0% {
    -webkit-transform: translateY(-8em);
    transform: translateY(-8em);
}
100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
}*/
.navbar {
    left: 0;
    right: 0;
    top: 0;
    position: fixed;
    z-index: 3;
    background: #000;
    background: rgba(40,42,44,.6);
}
.container {
    max-width: 80%;
    margin: 0 auto;
    position: relative;
}
.container:after {
    clear: both;
    content: "";
    display: table;
}
::selection {
    background: rgba(0,149,255,.2);
}
@media (max-width: 800px) {
    .container {
        max-width: 100%!important;
    }
}
@media (max-width: 700px) {
    #primary-navigation {
        float: none;
    }
    .navbar {
    position: absolute!important;
    }
    #primary-navigation .nav-menu {
    display: flex;
    }
    #primary-navigation .menu-item {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    }
    #primary-navigation a {
    width: 100%;
    padding: 0;
    text-align: center;
    }
}

@media screen and (min-width: 6px) {
  .primary-navigation {
      font-size: 14px;
  }
  .site-navigation {
      float: left;
  }
  .primary-navigation li {
      border: 0;
      display: inline-block;
      height: 38px;
      line-height: 38px;
      position: relative;
  }
  .primary-navigation li:hover>a {
    background-color: #47456d;
    color: #fff;
  }
  .menu-item {
      cursor: pointer;
  }
  .primary-navigation a {
    display: inline-block;
    padding: 0 12px;
    white-space: nowrap;
    color: #fff;
  }
}
</style>
