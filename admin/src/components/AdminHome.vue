<template>
  <div>
    <el-menu theme="dark" default-active="paishoumanage" :router="true" mode="horizontal">
      <el-menu-item index="paishoumanage">拍手</el-menu-item>
      <el-menu-item index="biaoshumanage">标书</el-menu-item>
      <el-menu-item index="bidmanage">拍牌</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
}
</script>
