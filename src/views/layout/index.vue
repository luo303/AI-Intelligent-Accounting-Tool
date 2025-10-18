<template>
  <div class="main">
    <div class="top"><router-view /></div>
    <div class="bottom">
      <van-tabbar route>
        <van-tabbar-item replace to="/home" icon="wap-home"
          >首页</van-tabbar-item
        >
        <van-tabbar-item replace to="/echarts" icon="gold-coin"
          >报表</van-tabbar-item
        >
        <van-tabbar-item replace to="/add" icon="add"></van-tabbar-item>
        <van-tabbar-item replace to="/friends" icon="friends"
          >好友</van-tabbar-item
        >
        <van-tabbar-item replace to="/mydetail" icon="setting"
          >我的</van-tabbar-item
        >
      </van-tabbar>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main {
  .top {
    height: 90vh;
    overflow: scroll;
  }
  .van-tabbar {
    height: 10vh;
  }
}
</style>
