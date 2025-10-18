<template>
  <div class="main">
    <div class="top">
      <input type="text" />
    </div>
    <div class="detail">
      <div class="detail-top"></div>
      <bill></bill>
    </div>
  </div>
</template>

<script setup lang="ts">
import Bill from '@/components/Bill.vue'
</script>

<style lang="scss" scoped>
.top {
  margin: 4vw 5vw 2vw 5vw;
  min-height: 10rem;
  width: 90vw;
  border-radius: 16px;
  background-color: rgba(255, 255, 255);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
}
</style>
