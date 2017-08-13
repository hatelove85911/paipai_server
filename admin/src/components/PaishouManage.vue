<template>
  <div>
    <el-table
      :data="paishous"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="wxid"
        label="weixin id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="contactno"
        label="contact no">
      </el-table-column>
    </el-table>
    <el-button type="primary" size="large" @click="addpaishou">add</el-button>
  </div>
</template>

<script>
import 'meteor-client'
import { Paishous } from 'api/paishous/paishous.js'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

export default {
  data: function () {
    return {
      paishous: []
    }
  },
  mounted: function () {
    Meteor.subscribe('paishous.all');

    Tracker.autorun(() => {
      this.paishous = Paishous.find().fetch()
    })
  },
  methods: {
    addpaishou: function () {
      Paishous.insert({
        name: 'junshen',
        wxid: 'shit',
        contactno: '777'
      })
    }
  }
}
</script>

