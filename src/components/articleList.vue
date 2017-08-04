<template lang="html">
<div>
  <article class="block post" v-for="item in list">
    <span class="time">
      <span class="month">1月</span>
      <span class="day">12</span>
    </span>
    <h1>{{item.title}}</h1>
    <div class="abstract" v-html="item.content.html">
    </div>
    <p class="more"><router-link :to="{ path: '/article', query:{id:item.articleId} }">阅读全文</router-link></p>
  </article>
  <div class="pages">
    <button type="button" name="button" @click="up">上一页</button>
    <button type="button" name="button" @click="down">下一页</button>
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
          this.list = res.result.list
        } else {
          this.list = []
        }
      })
    },
    up () {
      this.page++
      this.getlist()
    },
    down () {
      this.page--
      this.getlist()
    }
  },
  mounted () {
    this.getlist()
  }
}
</script>
