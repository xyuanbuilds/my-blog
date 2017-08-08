<template lang="html">
<div class="article-list">
  <article class="block post wysiwyg" v-for="item in list">
    <!-- <span class="time">
      <span class="month">1月</span>
      <span class="day">12</span>
    </span> -->
    <h2>{{item.title}}</h2>
    <p class="article-meta">发布于 {{item.createDate}}</p>
    <div class="ui ribbon label red">
      <a href="">{{item.tag}}</a>
    </div>
    <div class="abstract" v-html="item.content.html">
    </div>
    <p class="more"><router-link :to="{ path: '/article', query:{articleId:item.articleId} }">阅读全文</router-link></p>
  </article>
  <div class="pages">
    <a href="javascript:;" @click="go(page-=1)" style="float: left;">上一页</a>
    <a href="javascript:;" @click="go(page+=1)" style="float: right;">下一页</a>
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
      pageSize: 10,
      count: 0
    }
  },
  mounted () {
    this.getlist()
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
          if (res.result.count == 0) {
            this.page -= 1
            return
          } else {
            this.list = res.result.list
          }
        } else {
          this.list = []
        }
      })
    },
    go () {
      if (this.page<1) {
        this.page = 1
        return
      } else {
        this.getlist()
      }
    }
  }
}
</script>

<style media="screen">
.article-list {
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0,0,0,0.08)
}
</style>
