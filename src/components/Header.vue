<template lang="html">
<div class="header navbar animated">
  <div class="container">
    <nav id="primary-navigation" class="site-navigation primary-navigation">
      <div class="menum">
        <ul class="nav-menu">
          <li class="menu-item"><router-link href="#" to="/blog"><i class="fa fa-home"></i>首页</router-link></li>
          <li id="collapse" class="menu-item">
            <a target="_blank"><i class="fa fa-cog"></i>分类</a>
            <ul class="collapse-menum">
              <li class="menu-item" v-for="item in tags">
                <a href="javascript:;" @click="getOne(item.tag)">{{item.tag}}</a>
              </li>
            </ul>
          </li>
          <li class="menu-item"><router-link to="/messages"><i class="fa fa-comment"></i>留言</router-link></li>
          <li class="menu-item"><router-link to="/about"><i class="fa fa-user"></i>关于</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</div>
</template>

<script>
// 实现导航条的自动显示
import Headroom from 'headroom.js'
import { unique } from '@/assets/js/unique';
import axios from 'axios'
export default {
  data () {
    return {
      tags: []
    }
  },
  methods: {
    getTags () {
      axios.get("/api/articleTags").then((result)=>{
        let res = result.data
        if (res.status == '0') {
          this.tags = res.result
          this.tags = unique(this.tags)
          this.$emit('shareTags', this.tags)
        } else {
          this.tags = ["未获取到数据"]
        }
      })
    },
    getOne (tag) {
      this.$emit('shareOne', tag)
      this.$router.push({path:'/blog'})
    }
  },
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
    this.getTags()
  }
}
</script>
