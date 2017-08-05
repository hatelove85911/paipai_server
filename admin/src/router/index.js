import Vue from 'vue'
import Router from 'vue-router'
import AdminHome from '@/components/AdminHome'
import PaishouManage from '@/components/PaishouManage'
import BiaoshuManage from '@/components/BiaoshuManage'
import BidManage from '@/components/BidManage'
import Login from '@/components/Login'
import {Meteor} from 'meteor/meteor'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'adminhome',
      component: AdminHome,
      children: [{
        path: '',
        name: 'paishoumanage',
        component: PaishouManage
      }, {
        path: 'biaoshumanage',
        name: 'biaoshumanage',
        component: BiaoshuManage
      }, {
        path: 'bidmanage',
        name: 'bidmanage',
        component: BidManage
      }]
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }]
})

router.beforeEach((to, from, next) =>{
  if(!Meteor.userId() && to.name !=='login') {
    next('/login')
  }
  next()
})

export default router
