<template lang="html">
  <div class="blog">
    <nav-header></nav-header>
    <div class="headpic">
      <div class="container headtitle">
        <div class="title">
          <h1 href="/blog">Chunibyo</h1>
        </div>
      </div>
    </div>
    <div class="container content">
      <div class="list">
        <div class="main">
          <article-list></article-list>
        </div>
        <div class="side">
          <side-section>
            <div slot="sidecontent">
              <h3>
                <a href="">JhonXY</a>
                <span class="cat-desc">Just a coding</span>
              </h3>
              <div class="pres">
              <a href="" class="pic">
              <img src="/static/card.jpg" alt="我的头像">
              </a>
              <a href="" class="detail">
                <span class="item-info">
                  <span class="item-title">XY</span>
                  <span class="item-desc">2017</span>
                </span>
              </a>
              </div>
              <div class="">
                <a data-balloon="微博" href="http://weibo.com/anotherhome" rel="nofollow" class="icon"><i class="fa fa-weibo"></i></a>
                <a data-balloon="微博" href="http://weibo.com/anotherhome" rel="nofollow" class="icon"><i class="fa fa-github"></i></a>
                <a data-balloon="微博" href="http://weibo.com/anotherhome" rel="nofollow" class="icon"><i class="fa fa-envelope"></i></a>
                <a data-balloon="微博" href="http://weibo.com/anotherhome" rel="nofollow" class="icon"><i class="fa fa-address-card-o"></i></a>
              </div>
            </div>
          </side-section>
          <side-section></side-section>
          <iframe frameborder="no" border="0"  width="100%" height="300px" src="//music.163.com/outchain/player?type=0&amp;id=865099185&amp;auto=0&amp;"></iframe>
        </div>
      </div>
    </div>
    <scroll-top></scroll-top>
    <!-- <nav-footer></nav-footer> -->
  </div>
</template>

<script>
import NavHeader from '@/components/Header.vue'
import NavFooter from '@/components/Footer.vue'
import articleList from '@/components/articleList.vue'
import sideSection from '@/components/sideSection.vue'
import scrollTop from '@/components/scrollTop.vue'
export default {
  name: 'Blog',
  components: {
    NavHeader,
    NavFooter,
    articleList,
    sideSection,
    scrollTop
  }
}
</script>

<style>
body {
  background-color: #f4f4f4;;
}
.secondary h3 {
  margin: 0 0 15px 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
}
.secondary h3 .cat-desc {
  display: block;
  margin: 5px 0 0 0;
  font-size: 14px;
  font-weight: normal;
  color: #999;
}
.pres {
  position: relative;
  line-height: 1.5;
  font-size: 14px;
  line-height: 1.5;
  /*background-color: #24292e;*/
  border-radius: 3px;
  margin-bottom: 15px;
}
a.pic {
  top: 3px;
  margin-left: 3px;
  left: 0;
  z-index: auto;
  position: absolute;
}
a.pic img {
  height: 30px;
  width: 30px;
  display: inline-block;
  overflow: hidden;
  line-height: 1;
  vertical-align: middle;
  border-radius: 3px;
}
.social {
  width: 100%;
  text-align: center;
  padding-top: 10px;
}

.detail {
  margin: 0 0 0 5px;
  padding: 0 0 0 36px;
  display: block;
  margin: 0 0 0 5px;
  font-weight: 500;
  text-decoration: none;
}
.item-info {
  width: calc(100% - 40%);
  line-height: 1.5;
  float: none;
}
.item-title {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #3a8bbb;
  display: block;
}
.item-desc {
  font-size: 12px;
  font-weight: normal;
  color: #999;
  display: block;
}
.social a {
  display: inline-block;
  margin-bottom: 7px;
  text-decoration: none;
  text-align: center;
}
.social a i {
  font-size: 20px;
  width: 42px;
  height: 42px;
  line-height: 42px;
  border-radius: 42px;
  color: rgba(0,0,0,.5);
  background-color: rgba(0,0,0,.1);
  -webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
}
.social a i:hover {
  background-color: rgba(246, 122, 122, 0.8);
  color: rgba(255, 255, 255, 0.5);
}
.fa {
    margin: 0 0.2em;
}
</style>
