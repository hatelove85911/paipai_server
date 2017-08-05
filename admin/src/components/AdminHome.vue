<template>
  <div>
    <el-row type="flex" justify="end">
      <el-button @click="logout">Logout</el-button>
    </el-row>    
    <el-menu theme="dark" default-active="1" router mode="horizontal">
      <el-menu-item index="1" :route="{name: 'paishoumanage'}">拍手</el-menu-item>
      <el-menu-item index="2" :route="{name: 'biaoshumanage'}">标书</el-menu-item>
      <el-menu-item index="3" :route="{name: 'bidmanage'}">拍牌</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script>
import 'meteor-client'
import { Meteor } from 'meteor/meteor'
import router from '../router'

export default {
  methods: {
    logout() {
      Meteor.logout((error) => {
        if (error) {
          alert('logout failed')
        } else {
          router.push('/')
        }
      })
    }
  }
}
</script>
