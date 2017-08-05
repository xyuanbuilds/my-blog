<template lang="html">
<div>
  <article class="block post" v-for="item in list">
    <span class="time">
      <span class="month">1月</span>
      <span class="day">12</span>
    </span>
    <h1>{{item.title}}</h1>
    <p class="article-meta">发布于 {{item.createDate}}</p>
    <div class="ui ribbon label red">
      <a href="">{{item.tag}}</a>
    </div>
    <div class="abstract" v-html="item.content.html">
    </div>
    <p class="more"><router-link :to="{ path: '/article', query:{articleId:item.articleId} }">阅读全文</router-link></p>
  </article>
  <div class="pages">
    <a href="" @click="go(page-=1)" style="float: left;">上一页</a>
    <a href="" @click="go(page+=1)" style="float: right;">下一页</a>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      list: [],
      page: 1,
      pageSize: 5,
      count: 0
    }
  },
  methods: {
    getlist () {
      var param = {
        page: this.page,
        pageSize: this.pageSize
      }
      axios.get("/articles/articleList", {
        params: param
      }).then((result)=>{
        let res = result.data
        if (res.status == "0") {
          if (res.result.count == "0") {
            this.page-=1
            return
          } else {
            this.list = res.result.list
            this.count = res.result.count
          }
        } else {
          this.list = []
        }
      })
    },
    go () {
      if (this.page<1) {
        this.page = 1
      } else {
        this.getlist()
      }
    }
  },
  mounted () {
    this.getlist()
  }
}
</script>
