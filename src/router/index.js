import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/views/Index'
// import Blog from '@/views/Blog'
// import About from '@/views/About'
// import Article from '@/views/Article'
// import Messages from '@/views/Messages'
// import admin from '@/admin/admin'
// import adminArticle from '@/admin/adminArticle'
// import change from '@/admin/change'
// import adminArticleList from '@/admin/adminArticleList'
import login from '@/admin/login'
const Blog = resolve => require(['@/views/Blog'], resolve)
const Index = resolve => require(['@/views/Index'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const Article = resolve => require(['@/views/Article'], resolve)
const Messages = resolve => require(['@/views/Messages'], resolve)
const admin = resolve => require(['@/admin/admin'], resolve)
const adminArticle = resolve => require(['@/admin/adminArticle'], resolve)
const change = resolve => require(['@/admin/change'], resolve)
const adminArticleList = resolve => require(['@/admin/adminArticleList'], resolve)
// const login = resolve => require(['@/admin/login'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: './',
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
      // redirect: '/admin/adminArticle',
      redirect: { name: 'adminArticle'},
      children: [
            { path: 'adminArticle', component: adminArticle, name: 'adminArticle'},
            { path: 'adminChange', component: change, name: 'adminChange'},
            { path: 'adminArticleList', component: adminArticleList, name: 'adminArticleList'},
        ]
    },
    {
      path: '/login',
      name: 'Login',
      component: login,
    }
  ]
})
