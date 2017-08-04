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
          <side-section></side-section>
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
