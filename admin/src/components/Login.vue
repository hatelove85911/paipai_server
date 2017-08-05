<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="User">
      <el-input v-model="form.user"></el-input>
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="form.password" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Login</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import 'meteor-client'
import { Meteor } from 'meteor/meteor'
import router from '../router'

export default {
  data() {
    return {
      form: {
        user: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      Meteor.loginWithPassword(this.form.user, this.form.password, (error) => {

        if (error) {
          alert('login failed')
        } else {
          router.push('/')
        }
      })
    }
  }
}
</script>

