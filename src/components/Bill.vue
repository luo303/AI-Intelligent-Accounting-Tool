<template>
  <div v-if="Object.keys(list).length > 0">
    <div class="bill" v-for="(bill, date) in list" :key="date">
      <div class="top">
        <div class="left">{{ date }}</div>
        <div class="right">
          <div class="expense" v-if="bill.expense !== 0">
            <div class="expense-font">支</div>
            <span>￥{{ Math.abs(bill.expense) }}</span>
          </div>
          <div class="income">
            <div class="income-font" v-if="bill.income !== 0">收</div>
            <span>￥{{ bill.income }}</span>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="item" v-for="(item, index) in bill.bills" :key="index">
          <div class="item-left">
            <div class="img">
              <van-image
                round
                width="2rem"
                height="2rem"
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
              />
            </div>
            <div class="detail">
              <div class="detail-top">{{ item.category }}</div>
              <div class="detail-bottom">{{ item.note }}支出</div>
            </div>
          </div>
          <div class="item-right">
            <span v-if="item.amount >= 0" class="income"
              >+￥{{ Math.abs(item.amount) }}</span
            >
            <span v-else class="expense">-￥{{ Math.abs(item.amount) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <van-empty
      image="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png"
      image-size="40vw"
      description="暂无账单"
      class="empty"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
//后端返回的原生数据
const rawlist: any = ref([])
//经过处理，最终渲染的数据
const list: any = ref([])
//后续这里改成像后端发送请求获取数据
const getrawlist = (year: any, month: any, day: any = 1) => {
  console.log(year)
  console.log(month)
  console.log(day)
  rawlist.value = [
    {
      billId: 11,
      amount: -300,
      currency: 'CNY',
      category: '游戏',
      note: 'steam',
      noteImgUrl: '',
      billAt: '2025-09-23',
      comments: [
        {
          commentId: 2,
          userName: 'zhengjun1',
          content: '羡慕steam',
          imgUrl: ''
        },
        {
          commentId: 3,
          userName: 'zhengjun1',
          content: '羡慕steam',
          imgUrl: ''
        }
      ]
    },
    {
      billId: 11,
      amount: -300,
      currency: 'CNY',
      category: '游戏',
      note: 'steam',
      noteImgUrl: '',
      billAt: '2025-09-24',
      comments: [
        {
          commentId: 2,
          userName: 'zhengjun1',
          content: '羡慕steam',
          imgUrl: ''
        },
        {
          commentId: 3,
          userName: 'zhengjun1',
          content: '羡慕steam',
          imgUrl: ''
        }
      ]
    },
    {
      billId: 11,
      amount: 300,
      currency: 'CNY',
      category: '游戏',
      note: 'steam',
      noteImgUrl: '',
      billAt: '2025-09-24',
      comments: [
        {
          commentId: 2,
          userName: 'zhengjun1',
          content: '羡慕steam',
          imgUrl: ''
        },
        {
          commentId: 3,
          userName: 'zhengjun1',
          content: '羡慕steam',
          imgUrl: ''
        }
      ]
    },
    {
      billId: 11,
      amount: 300,
      currency: 'CNY',
      category: '游戏',
      note: 'steam',
      noteImgUrl: '',
      billAt: '2025-07-23',
      comments: [
        {
          commentId: 2,
          userName: 'zhengjun1',
          content: '羡慕steam',
          imgUrl: ''
        },
        {
          commentId: 3,
          userName: 'zhengjun1',
          content: '羡慕steam',
          imgUrl: ''
        }
      ]
    },
    {
      billId: 11,
      amount: 300,
      currency: 'CNY',
      category: '游戏',
      note: 'steam',
      noteImgUrl: '',
      billAt: '2025-09-23',
      comments: [
        {
          commentId: 2,
          userName: 'zhengjun1',
          content: '羡慕steam',
          imgUrl: ''
        },
        {
          commentId: 3,
          userName: 'zhengjun1',
          content: '羡慕steam',
          imgUrl: ''
        }
      ]
    },
    {
      billId: 11,
      amount: 300,
      currency: 'CNY',
      category: '游戏',
      note: 'steam',
      noteImgUrl: '',
      billAt: '2025-09-23',
      comments: [
        {
          commentId: 2,
          userName: 'zhengjun1',
          content: '羡慕steam',
          imgUrl: ''
        },
        {
          commentId: 3,
          userName: 'zhengjun1',
          content: '羡慕steam',
          imgUrl: ''
        }
      ]
    },
    {
      billId: 11,
      amount: 300,
      currency: 'CNY',
      category: '游戏',
      note: 'steam',
      noteImgUrl: '',
      billAt: '2025-09-28',
      comments: [
        {
          commentId: 2,
          userName: 'zhengjun1',
          content: '羡慕steam',
          imgUrl: ''
        },
        {
          commentId: 3,
          userName: 'zhengjun1',
          content: '羡慕steam',
          imgUrl: ''
        }
      ]
    },
    {
      billId: 11,
      amount: 300,
      currency: 'CNY',
      category: '游戏',
      note: 'steam',
      noteImgUrl: '',
      billAt: '2025-09-28',
      comments: [
        {
          commentId: 2,
          userName: 'zhengjun1',
          content: '羡慕steam',
          imgUrl: ''
        },
        {
          commentId: 3,
          userName: 'zhengjun1',
          content: '羡慕steam',
          imgUrl: ''
        }
      ]
    },
    {
      billId: 11,
      amount: 300,
      currency: 'CNY',
      category: '游戏',
      note: 'steam',
      noteImgUrl: '',
      billAt: '2025-06-23',
      comments: [
        {
          commentId: 2,
          userName: 'zhengjun1',
          content: '羡慕steam',
          imgUrl: ''
        },
        {
          commentId: 3,
          userName: 'zhengjun1',
          content: '羡慕steam',
          imgUrl: ''
        }
      ]
    }
  ]
  return rawlist
}
//处理后端返回的原始数据
const getlist = (year: any, month: any, day: any) => {
  getrawlist(year, month, day)
  return rawlist.value.reduce((acc: any, bill: any) => {
    const dateKey = bill.billAt
    const dateamount = bill.amount
    if (!acc[dateKey]) {
      acc[dateKey] = {
        bills: [],
        total: 0,
        expense: 0,
        income: 0
      }
    }
    acc[dateKey].bills.push(bill)
    acc[dateKey].total += dateamount
    if (bill.amount >= 0) {
      acc[dateKey].income += bill.amount
    } else {
      acc[dateKey].expense += bill.amount
    }
    return acc
  }, {})
}

onMounted(() => {
  list.value = getlist(2025, 10, 1)
  console.log(list.value)
})
defineExpose({
  list,
  getlist
})
</script>

<style scoped lang="scss">
.bill {
  margin: 1.5vw 5vw;
  width: 90vw;
  border-radius: 16px;
  padding: 1rem;
  background-color: rgba(255, 255, 255);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right {
      display: flex;
      align-items: center;
      .expense {
        display: flex;
        .expense-font {
          font-size: 12px;
          text-align: center;
          line-height: 1rem;
          width: 1rem;
          height: 1rem;
          border-radius: 6px;
          background-color: rgba(221, 30, 103, 0.237);
        }
      }
      .income {
        margin-left: 0.5rem;
        display: flex;
        .income-font {
          font-size: 12px;
          text-align: center;
          line-height: 1rem;
          width: 1rem;
          height: 1rem;
          border-radius: 6px;
          background-color: rgba(189, 185, 186, 0.237);
        }
      }
    }
  }
  .content {
    margin-top: 1rem;
    .item {
      height: 3rem;
      margin: 1rem 1rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .item-left {
        height: 100%;
        display: flex;
        align-items: center;
        .img {
          margin-right: 0.5rem;
        }
        .detail {
          display: flex;
          flex-direction: column;
          .detail-top {
            font-weight: 600;
            margin-bottom: 0.5rem;
          }
          .detail-bottom {
            color: gray;
          }
        }
      }
      .item-right {
        .income {
          color: rgb(244, 66, 66);
        }
      }
    }
  }
}
.empty {
  margin-top: 20vw;
}
</style>
