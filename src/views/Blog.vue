<template lang="html">
  <div class="blog">
    <nav-header></nav-header>
    <div class="headpic">
      <div class="headtitle">
        <p class="title">
          <a href="/blog">Chunibyo</a>
        </p>
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
              <div class="card">
                <img src="/static/card.jpg" alt="我的头像">
              </div>
              <div class="social">
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
  background-color: #f0f0f0;
}
.social {
  width: 100%;
  text-align: center;
  padding-top: 10px;
}
.card {
  width: 100%;
  text-align: center;
  height: 200px;
  border: 1px solid rgb(203, 204, 205);
  overflow: hidden;
}
.card img {
  width:auto;
  height:auto;
  max-width:100%;
  max-height:100%;
  vertical-align: middle;
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
