<template lang="html">
<div class="header navbar animated">
  <div class="container">
    <nav id="primary-navigation" class="site-navigation primary-navigation">
      <div class="menum">
        <ul class="nav-menu">
          <li class="menu-item"><router-link href="" to="/blog"><i class="fa fa-home"></i>首页</router-link>
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
