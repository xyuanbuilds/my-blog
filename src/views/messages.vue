<template lang="html">
  <div class="messages">
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
        <div>
          <div class="full-content">
            <div class="messages-text post-content">
              <div style="overflow:hidden;margin-bottom:20px;">
                <h3 class="hestia-title text-center">Leave a Reply</h3>
                <textarea ref='textBox' spellcheck='false' row="1" placeholder="咱们交♂流交♂流~~" v-model="message" class="msg-content" cols="45" rows="8" aria-required="true"></textarea>
                <div class="input">
                  <input type="text" placeholder="起个名吧" v-model.trim="name" class="msg-name">
                  <input type="email" placeholder="你的邮箱哦" v-model.trim="email" class="msg-email">
                </div>
                <span>{{status}}</span>
                <br>
                <button @click='submit' :disabled='submitFlag' class="submit">
                      <span>{{submitFlag ? '提交中...' : '发布评论'}}</span>
                </button>
              </div>
              <div class="msg">
                <ol class="msg-list">
                  <li class="msg-list-item" v-for="item in messagesList">
                    <article>
                      <header>
                        <img class="avatar" :src="'https://cdn.v2ex.com/gravatar/' + item.email + '?s=120&d=mm&r=g'" alt="">
                        <div class="msg-author">
                          <div class="msg-author-name">{{item.name}}  <span id="admin" v-if="item.email == 'e210aaaced957c912a7dd01cccc53004'">管理员</span></div>
                        </div>
                        <div class="msg-author-time">{{item.createDate}}</div>
                      </header>
                      <section class="msg-main">
                        <div class="msg-reply">
                          <p>{{item.content}}</p>
                        </div>
                      </section>
                    </article>
                  </li>
                </ol>
              </div>
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
import axios from 'axios'
import md5 from 'md5'
export default {
  data () {
    return {
      messagesList: [],
      message: '',
      email: '',
      name: '',
      status: '请输入',
      submitFlag: false
    }
  },
  components: {
    NavHeader,
    NavFooter,
    scrollTop
  },
  mounted () {
    if (localStorage.name) {
      this.email = localStorage['e-mail']
      this.name = localStorage['name']
    }
    this.getMessages()
  },
  methods: {
    getMessages () {
      axios.get("/api/messageList").then((result)=>{
        let res = result.data
        this.messagesList = res.result
      })
    },
    submit () {
      let reg = /^[\w_-]+@[\w_-]+\.[\w\\.]+$/
      if (!this.name || !this.email || !this.message) {
        this.status = '怕是有什么没填哦'
        return
      } else if (!reg.test(this.email)) {
        this.status = '邮箱格式不对呀'
        return
      } else if (this.message.length > 500) {
        this.status = '可不能这么长哦'
        return
      } else if (/\d{7,}/i.test(this.message) || // 连续7个以上数字，过滤发Q号和Q群的评论
                /(\d.*){7,}/i.test(this.message) || // 非连续的7个以上数字，过滤用字符间隔开的Q号和Q群的评论
                /\u52A0.*\u7FA4/i.test(this.message) || // 包含“加群”两字的通常是发Q群的垃圾评论
                /(\u9876.*){5,}/i.test(this.message) || // 过滤5个以上“顶”字的评论
                /([\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u25CB\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396\u96F6].*){7,}/i.test(this.message) // 过滤用汉字发Q号和Q群的评论
      ) {
        this.status = '可不能发不好的东东哦'
        return
      }
      this.summitFlag = true
      localStorage.setItem('e-mail', this.email)
      localStorage.setItem('name', this.name)
      axios.post("/api/messageSub", {
        "name": this.name,
        "email": this.email,
        "content": this.message
      }).then((result)=>{
          let res = result.data
          if (res.status == "0") {
            this.status = '留言成功喽'
            this.getMessages()
          } else {
            this.status = '蜜汁错误'
          }
      })
    }
  }
}
</script>

<style lang="css" scoped>
#admin {
  padding: 1px 5px;
  background-color: rgb(213, 103, 103);
  color: #fff;
  border-radius: 20px;
  font-size: 5px;
}
.messages-text {
  width: 100%;
  overflow: hidden;
}
textarea {
  margin: 10px 0;
  height: 100px;
  width: 100%;
}
.input {
  margin: 10px 0;
  font-size: 0;
}
.msg-content,.msg-name,.msg-email {
  display:inline-block;
  padding: 10px;
  background: #f4f6f7;
  outline: none;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 3px;
}
.msg-content:focus,.msg-name:focus,.msg-email:focus {
  border: 1px solid #b0b5b9;
}
.msg-content {
  width: 100%;
  max-width: 100%;
  height: 270px;
  max-height: 500px;
}
.msg-name,.msg-email {
  width: 48%;
  height: 25px;
  margin-right: 4%;
  padding: 0 10px;
}
.msg-email {
  margin-right: 0;
}
.submit {
  float: right;
  padding: 5px;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  line-height: 24px;
  background-color: #e91e63;
  border: none;
  color: #fff;
  border-radius: 3px;
  margin-top: 10px;
}
.msg-list>li {
  border-bottom: 1px solid #e5eaed;
}
.msg-list>li article {
  margin: 20px 0;
}
.msg-list>li section {
  line-height: 20px;
  font-size: 14px;
  margin-left: 80px;
  white-space: normal;
  word-break: break-all;
  word-wrap: break-word;
}
.msg-list .avatar {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  float: left;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
  margin-right: 15px;
}
.msg-author-time {
  color: #aaa;
  font-size: 12px;
  display: block;
}
.msg-reply>p {
  margin: 5px 0;
  line-height: 24px;
}
.full-content header {
  margin: 0 0!important;
}
</style>
