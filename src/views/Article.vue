<template lang="html">
<div class="article">
  <nav-header></nav-header>
  <div class="container">
    <div class="list">
      <div class="main" v-html="article.content.html">
      </div>
      <div class="side">
        <side-section></side-section>
        <side-section></side-section>
      </div>
    </div>
  </div>
  <scroll-top></scroll-top>
</div>
</template>

<script>
import NavHeader from '@/components/Header.vue'
import NavFooter from '@/components/Footer.vue'
import sideSection from '@/components/sideSection.vue'
import scrollTop from '@/components/scrollTop.vue'
import axios from 'axios'
export default {
  name: 'Article',
  components: {
    NavHeader,
    NavFooter,
    sideSection,
    scrollTop
  },
  data () {
    return {
      article: {}
    }
  },
  methods: {
    init () {
      let articleId = this.$route.query.articleId
      axios.get("/articles/articleDetial", {
        articleId: articleId
      }).then((result)=>{
        let res = result.data
        if (res.status == "0") {
          this.article = res.result
        } else {
          this.article = ''
        }
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>
