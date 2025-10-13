<template>
  <div>
    <router-view />

    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">报表</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search"></van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">好友</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
