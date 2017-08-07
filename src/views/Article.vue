<template lang="html">
<div class="article">
  <nav-header></nav-header>
  <div class="headpic">
    <div class="container headtitle">
      <div class="title">
        <h1 href="/blog">Chunibyo</h1>
      </div>
    </div>
  </div>
  <div class="container full">
    <div class="list">
      <div class="main-full">
        <div class="full-content">
          <header>
            <h2>{{article.title}}</h2>
            <p class="byline">by JhonXY
              <span class="sep">|</span>
              <span class="date">{{article.createDate}}</span>
            </p>
          </header>
          <div class="post-content" v-html="article.content">
          </div>
        </div>
      </div>
    </div>
  </div>
  <scroll-top></scroll-top>
</div>
</template>

<script>
import NavHeader from '@/components/Header.vue'
import NavFooter from '@/components/Footer.vue'
import scrollTop from '@/components/scrollTop.vue'
import axios from 'axios'
export default {
  name: 'Article',
  components: {
    NavHeader,
    NavFooter,
    scrollTop
  },
  data() {
    return {
      article: ''
    }
  },
  methods: {
    init() {
      let articleId = this.$route.query.articleId
      let param = {
        articleId: articleId
      }
      axios.get("/articles/articleDetial", {
        params: param
      }).then((result) => {
        let res = result.data
        if (res.status == "0") {
          this.article = res.result
        } else {
          this.article = ''
        }
      })
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style media="screen">
.main-full {
  margin-top: -90px;
  width: 100%;
  margin: 0 0 30px 0;
  background: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08);
  position: absolute;
  top: -90px;
  overflow: hidden;
}

.full-content {
  padding: 60px 0;
}

.full-content header {
  width: 63.63636364%;
  margin: 0 auto 50px auto;
}

.post-content {
  width: 63.63636364%;
  margin: 0 auto;
  margin-bottom: 20px;
}

.full-content h2 {
  margin: 0 20px 0 0;
  font-size: 40px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -.03em;
  color: #444;
}

.byline {
  width: auto;
  margin: 12px 0;
  font-weight: 500;
}

.byline span.sep {
  margin: 0 4px;
  font-weight: normal;
  color: #ddd;
}

.byline span.date {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: .03em;
  color: #bbb;
}
</style>
