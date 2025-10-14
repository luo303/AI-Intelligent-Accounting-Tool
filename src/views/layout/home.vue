<template>
  <div class="empty"></div>
  <div class="top"></div>
  <div class="detail">
    <div class="detail-top"></div>
    <bill></bill>
  </div>
</template>

<script setup lang="ts">
import Bill from '@/components/Bill.vue';
</script>

<style lang="scss" scoped>
.empty {
  height: 2rem;
}
.top {
  margin: 0 5vw 2vw 5vw;
  min-height: 10rem;
  width: 90vw;
  border-radius: 16px;
  background-color: rgba(255, 255, 255);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
}
</style>
