import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Blog from '@/views/Blog'
import About from '@/views/About'
import Article from '@/views/Article'
import Messages from '@/views/Messages'
import admin from '@/admin/admin'
import article from '@/admin/article'
import change from '@/admin/change'
import articleList from '@/admin/articleList'
import login from '@/admin/login'


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
    {
      path: '/admin',
      name: 'Admin',
      component: admin,
      children: [
            { path: '/adminArticle', component: article, name: '文章新建'},
            { path: '/adminChange', component: change, name: '文章修改'},
            { path: '/adminArticleList', component: articleList, name: '文章列表'},
        ]
    },
    {
      path: '/login',
      name: 'Login',
      component: login,
    }
  ]
})
