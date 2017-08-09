import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Blog from '@/views/Blog'
import About from '@/views/About'
import Article from '@/views/Article'
import Messages from '@/views/Messages'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/messages',
      name: 'Messages',
      component: Messages
    },
  ]
})
