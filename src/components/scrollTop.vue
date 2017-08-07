<template>
 <div class="back-to-top" @click="backToTop" v-show="showReturnToTop" @mouseenter="show" @mouseleave="hide">
  <i :class="[bttOption.iClass]" :style="{color:bttOption.iColor,'font-size':bttOption.iFontsize}"></i>
  <span class="tips" :class="[bttOption.iPos]" :style="{color:bttOption.textColor}" v-show="showTooltips">{{bttOption.text}}</span>
 </div>
</template>

<script>
 import { scrollIt } from '@/assets/js/scrollIt'; // 引入动画过渡的实现
 export default {
  name: 'scrollTop',
  props: {
   text: { // 文本提示
    type: String,
    default: ''
   },
   textColor: { // 文本颜色
    type: String,
    default: '#71e2f1'
   },
   iPos: { // 文本位置
    type: String,
    default: 'bottom'
   },
   iClass: { // 图标形状
    type: String,
    default: 'fa fa-chevron-up'
   },
   iColor: { // 图标颜色
    type: String,
    default: '#71e2f1'
   },
   iFontsize: { // 图标大小
    type: String,
    default: '32px'
   },
   pageY: { // 默认在哪个视图显示返回按钮
    type: Number,
    default: 300
   },
   transitionName: { // 过渡动画名称
    type: String,
    default: 'linear'
   }
  },
  data () {
   return {
    showTooltips: false,
    showReturnToTop: false
   }
  },
  computed: {
   bttOption () {
    return {
     text: this.text,
     textColor: this.textColor,
     iPos: this.iPos,
     iClass: this.iClass,
     iColor: this.iColor,
     iFontsize: this.iFontsize
    }
   }
  },
  methods: {
   show () { // 显示隐藏提示文字
    return this.showTooltips = true;
   },
   hide () {
    return this.showTooltips = false;
   },
   currentPageYOffset () {
    // 判断滚动区域大于多少的时候显示返回顶部的按钮
    window.pageYOffset > this.pageY ? this.showReturnToTop = true : this.showReturnToTop = false;

   },
   backToTop () {
    scrollIt(0, 500, this.transitionName, this.currentPageYOffset);
   }
  },
  created () {
   window.addEventListener('scroll', this.currentPageYOffset);
  },
  beforeDestroy () {
   window.removeEventListener('scroll', this.currentPageYOffset)
  }
 }
</script>

<style scoped lang="scss">
 .back-to-top {
  position: fixed;
  bottom: 5%;
  right: 100px;
  z-index: 9999;
  cursor: pointer;
  width: auto;
  i {
   font-size: 24px;
   display: inline-block;
   position: relative;
   text-align: center;
   padding: 10px;
   background-color: rgba(234, 231, 231, 0.52);
   border-radius: 5px;
   transition: all 0.3s linear;
   &:hover {
    border-radius: 50%;
    background: #71e2f1;
    color: #fff !important;
   }
  }
  .tips {
   display: inline-block;
   position: absolute;
   word-break: normal;
   white-space: nowrap;
   width: auto;
   font-size: 12px;
   color: #fff;
   z-index: -1;
  }
  .left {
   right: 0;
   top: 50%;
   margin-right: 50px;
   transform: translateY(-50%);
  }
  .right {
   left: 0;
   top: 50%;
   margin-left: 50px;
   transform: translateY(-50%);
  }
  .bottom {
   bottom: 0;
   margin-top: 50px;
  }
  .top {
   top: 0;
   margin-bottom: 50px;
  }
 }
</style>
