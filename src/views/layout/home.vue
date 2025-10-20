<template>
  <div class="main">
    <div class="top">
      <span class="dateselect" @click="showPoup"
        >{{ selectYear }}年{{ selectMonth }}月&nbsp;&nbsp;></span
      >
      <div class="expense">
        <span class="expense-font">支</span>
        ￥2025
      </div>
      <div class="abc">
        <span class="income">
          <span class="income-font">收</span>
          ￥2021
        </span>
        <span class="balance">
          <span class="income-font">余</span>
          ￥235
        </span>
      </div>
    </div>
    <div class="detail">
      <div class="detail-top"></div>
      <bill></bill>
    </div>
    <!-- 日期选择 -->
    <van-popup
      v-model:show="show"
      :style="{ width: '100%', height: '46.5vh' }"
      position="bottom"
    >
      <van-date-picker
        v-model="currentDate"
        title="选择年月"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        :columns-type="columnsType"
        @confirm="confirm"
        @cancel="cancel"
    /></van-popup>
  </div>
</template>

<script setup lang="ts">
import Bill from '@/components/Bill.vue'
import { ref } from 'vue'

const nowtime = new Date()
const selectYear = ref(nowtime.getFullYear())
const selectMonth = ref(nowtime.getMonth() + 1)
const currentDate = ref(['2021', '01'])
const columnsType: any = ref(['year', 'month'])
const show = ref(false)

//取消键
const cancel = () => {
  show.value = false
}
//确认键
const confirm = (a: any) => {
  console.log(a)
  selectYear.value = a.selectedValues[0]
  selectMonth.value = a.selectedValues[1]
  show.value = false
}
//控制点击弹出日期选择
const showPoup = () => {
  show.value = true
}
const formatter = (type: any, option: any) => {
  if (type === 'year') {
    option.text += '年'
  }
  if (type === 'month') {
    option.text += '月'
  }
  return option
}
const minDate = new Date(2020, 0, 1)
const maxDate = new Date(2028, 12, 1)
</script>

<style lang="scss" scoped>
.top {
  margin: 4vw 5vw 2vw 5vw;
  min-height: 10rem;
  width: 90vw;
  padding: 1rem;
  border-radius: 16px;
  background-color: rgba(255, 255, 255);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  .dateselect {
    display: inline-block;
    width: 8rem;
    height: 1.8rem;
    border-radius: 0.5rem;
    text-align: center;
    line-height: 1.8rem;
    background-color: rgb(255, 240, 217);
  }
  .expense {
    margin: 1.5rem 0;
    font-weight: 700;
    font-size: 1.3rem;
    color: rgb(116, 144, 235);
    .expense-font {
      padding: 0.3rem;
      font-size: 1rem;
      font-weight: 400;
      color: gray;
      text-align: center;
      line-height: 1rem;
      width: 1rem;
      height: 1rem;
      border-radius: 6px;
      background-color: rgba(189, 185, 186, 0.237);
    }
  }
  .abc {
    .income {
      font-weight: 700;
      font-size: 1.2rem;
      color: rgb(245, 58, 58);
    }
    .balance {
      font-weight: 700;
      font-size: 1.2rem;
      color: rgb(156, 213, 71);
      margin-left: 2rem;
    }
    .income-font {
      padding: 0.3rem;
      font-size: 1rem;
      font-weight: 400;
      color: gray;
      text-align: center;
      line-height: 1rem;
      width: 1rem;
      height: 1rem;
      border-radius: 6px;
      background-color: rgba(189, 185, 186, 0.237);
    }
  }
}
</style>
