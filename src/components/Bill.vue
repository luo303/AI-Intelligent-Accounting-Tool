<template>
  <div v-if="list.length !== 0">
    <div class="bill" v-for="(bill, date) in list" :key="bill.billId">
      <div class="top">
        <div class="left">{{ date }}</div>
        <div class="right">
          <div class="font">支</div>
          <span>￥{{ bill.total }}</span>
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
          <div class="item-right">-￥{{ item.amount }}</div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <van-empty image-size="17rem" description="暂无账单" />
  </div>
</template>

<script setup lang="ts">
const rawlist = [
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
  }
]
const list = rawlist.reduce((acc: any, bill) => {
  // 获取当前账单的日期键（这里 billAt 已是 YYYY-MM-DD 格式）
  const dateKey = bill.billAt
  const dateamount = bill.amount
  // 检查累积器中是否有该日期键，没有则初始化空数组
  if (!acc[dateKey]) {
    acc[dateKey] = {
      bills: [],
      total: 0
    }
  }

  //  将当前账单推入对应日期的数组
  acc[dateKey].bills.push(bill)
  acc[dateKey].total += dateamount

  // 返回累积器，供下一次遍历使用
  return acc
}, {}) // 初始化累积器为 空对象
console.log(list)
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
      .font {
        font-size: 12px;
        text-align: center;
        line-height: 1rem;
        width: 1rem;
        height: 1rem;
        border-radius: 6px;
        background-color: rgba(221, 30, 103, 0.237);
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
    }
  }
}
</style>
