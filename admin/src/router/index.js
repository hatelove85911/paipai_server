import Vue from 'vue'
import Router from 'vue-router'
import AdminHome from '@/components/AdminHome'
import PaishouManage from '@/components/PaishouManage'
import BiaoshuManage from '@/components/BiaoshuManage'
import BidManage from '@/components/BidManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'adminhome',
      component: AdminHome,
      children: [{
        path: 'paishoumanage',
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
    }
  ]
})
