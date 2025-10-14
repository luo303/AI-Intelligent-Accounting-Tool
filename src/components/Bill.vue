<template>
  <div class="bill">
    <div class="top">
      <div class="left">{{ time }}</div>
      <div class="right">
        <div class="font">支</div>
        <span>￥110</span>
      </div>
    </div>
    <div class="content">
      <div class="item">
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
            <div class="detail-top">餐饮</div>
            <div class="detail-bottom">xhh支出</div>
          </div>
        </div>
        <div class="item-right">-￥11.00</div>
      </div>
      <div class="item">
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
            <div class="detail-top">餐饮</div>
            <div class="detail-bottom">xhh支出</div>
          </div>
        </div>
        <div class="item-right">-￥11.00</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const time = '2025-10-13'
</script>

<style scoped lang="scss">
.bill {
  margin: 2vw 5vw;
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
      margin: 1rem;
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
