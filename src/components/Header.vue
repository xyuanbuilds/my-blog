<template lang="html">
<div class="header navbar animated">
  <div class="container">
    <nav id="primary-navigation" class="site-navigation primary-navigation">
      <div class="menum">
        <ul class="nav-menu">
          <li class="menu-item"><a href=""><i class="fa fa-home"></i>首页</a></li>
          <li id="collapse" class="menu-item">
            <a href=""><i class="fa fa-cog"></i>分类</a>
            <ul class="collapse-menum">
              <li class="menu-item"><a href="">1</a></li>
              <li class="menu-item"><a href="">2</a></li>
              <li class="menu-item"><a href="">3</a></li>
            </ul>
          </li>
          <li class="menu-item"><a href=""><i class="fa fa-comment"></i>留言</a></li>
          <li class="menu-item"><a href=""><i class="fa fa-user"></i>关于</a></li>
        </ul>
      </div>
    </nav>
  </div>
</div>
</template>

<script>
// 实现导航条的自动显示
import Headroom from 'headroom.js'
export default {
  mounted () {
    var myElement = document.querySelector(".header");
    // construct an instance of Headroom, passing the element
    var headroom  = new Headroom(myElement, {
      "tolerance": 1,
      "offset": 10,
      "classes": {
        "initial": "animated",
        "pinned": "slideDown",
        "unpinned": "slideUp"
      }
    });
    headroom.init();
  }
}
</script>

<style lang="css">
.navbar {
  -webkit-box-shadow: 0 5px 5px rgba(0,0,0,0.2);
  box-shadow: 0 5px 5px rgba(0,0,0,0.2);
}
ol, ul {
    list-style: none;
}
a {
    outline: none;
    text-decoration: none;
    color: #444;
}
#collapse:hover .collapse-menum{
    left: 0;
}

/*导航条动画*/
.animated {
    animation-duration: 0.5s;
    animation-fill-mode: both;
}
.animated.slideDown {
    -webkit-animation-name: slideDown;
    -moz-animation-name: slideDown;
    -o-animation-name: slideDown;
    animation-name: slideDown;
}
.animated.slideUp {
    -webkit-animation-name: slideUp;
    -moz-animation-name: slideUp;
    -o-animation-name: slideUp;
    animation-name: slideUp;
}
@keyframes slideDown {
  0% {
    transform: translateY(-4em);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes slideUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-4em);
  }
}

.navbar {
    left: 0;
    right: 0;
    top: 0;
    position: fixed;
    z-index: 3;
    background: rgba(0,0,0,.4);
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

/*自适应布局*/
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
    #primary-navigation ul ul a{
        padding: 14px 12px;
        white-space: normal;
        background-color: rgba(175, 175, 175, 0.2);
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
  .primary-navigation li:hover {
      background-color: rgba(175, 175, 175, 0.2);
      color: #fff;
  }

  .collapse-menum {
      background-color: rgba(175, 175, 175, 0.2);
      float: left;
      margin: 0;
      position: absolute;
      top: 38px;
      left: -999em;
      z-index: 9;
  }
  .primary-navigation li li {
    border: 0;
    display: block;
    height: auto;
    line-height: 1.0909090909;
  }
  .primary-navigation ul ul a{
    padding: 14px 12px;
    white-space: normal;
    width: 130px;
    background-color: rgba(175, 175, 175, 0.2);
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
