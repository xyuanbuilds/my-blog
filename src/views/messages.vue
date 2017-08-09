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
        <div class="main-full">
          <div class="full-content">
            <div class="messages-text">
              <h3 class="hestia-title text-center">Leave a Reply</h3>
              <textarea ref='textBox' spellcheck='false' placeholder="咱们交♂流交♂流~~" v-model="message" class="msg-content" cols="45" rows="8" aria-required="true"></textarea>
              <div class="input">
                <input type="text" placeholder="起个名吧" v-model.trim="name" class="msg-name">
                <input type="email" placeholder="你的邮箱哦" v-model.trim="email" class="msg-email">
              </div>
              <br>
              <button @click='submit' :disabled='submitFlag'>
                    <span>{{submitFlag ? '提交中...' : '发布评论'}}</span>
                    <span>{{status}}</span>
              </button>
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
      axios.get("/messages/messageList").then((result)=>{
        let res = result.data
        this.messagesList = res.result
      })
    },
    submit () {
      let reg = /^[\w_-]+@[\w_-]+\.[\w\\.]+$/
      if (!this.name || !this.email || !this.message) {
        this.status = '信息不全啊'
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
      axios.post("messages/messageSub", {
        "name": this.name,
        "email": this.email,
        "content": this.message
      }).then((result)=>{
          let res = result.data
          if (res.status == "0") {
            this.status = '留言成功喽'
          } else {
            this.status = '蜜汁错误'
          }
      })
    }
  }
}
</script>

<style lang="css">
.messges-text {
  width: 100%;
  text-align: center;
  display: table-cell;
  overflow: visible;
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
.msg-name,.msg-email {
  width: 48%;
  height: 25px;
  margin-right: 4%;
  padding: 0 10px;
}
.msg-email {
  margin-right: 0;
}
</style>
