<template lang="html">
<div class="article">
  <nav-header></nav-header>
  <div class="headpic">
    <div class="container headtitle full">
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
          <div class="post-content wysiwyg" v-html="article.content">
          </div>
        </div>
      </div>
    </div>
  </div>
  <scroll-top></scroll-top>
  <nav-footer></nav-footer>
</div>
</template>

<script>
import NavHeader from '@/components/Header.vue'
import NavFooter from '@/components/Footer.vue'
import scrollTop from '@/components/scrollTop.vue'
import 'wysiwyg.css'
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
      axios.get("/api/articleDetial", {
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
body {
  background-color: #f4f4f4;;
}
.main-full {
  width: 100%;
  margin: 0 0 30px 0;
  margin-top: -90px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08);
  /*position: absolute;
  top: -90px;*/
  overflow: hidden;
  -webkit-transition: all .5s ease-out;
  transition: all .5s ease-out;
}

.full-content {
  padding: 60px 0;
}

.full-content header {
  width: 66%;
  margin: 0 auto 50px auto;
}

.post-content {
  width: 66%;
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

/*markdown补充*/
.wysiwyg img {
  max-width: 100%;
  display: block;
}

.wysiwyg ul li{
  list-style-type: disc;
}
.wysiwyg ol li {
    list-style-type: decimal;
}
</style>
