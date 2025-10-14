<template>
  <div class="login">
    <div class="content">
      <h5 class="title">AI智能记账工具欢迎您</h5>
      <el-tabs
        v-model="activeName"
        class="demo-tabs"
        @tab-click="handleClick"
        stretch
      >
        <el-tab-pane label="账号登录" name="first">
          <el-form
            ref="ruleFormRef"
            style="max-width: 600px"
            :model="formdata"
            :rules="rules"
            label-width="auto"
          >
            <el-form-item prop="email">
              <el-input
                :prefix-icon="User"
                placeholder="邮箱"
                v-model="formdata.email"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                :prefix-icon="Lock"
                placeholder="密码"
                show-password
                type="password"
                v-model="formdata.password"
              >
              </el-input>
            </el-form-item>

            <button class="loginbutton" @click.prevent="login">登录</button>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="second">
          <el-form
            ref="formRef"
            style="max-width: 600px"
            :model="formdata"
            :rules="rules"
            label-width="auto"
          >
            <el-form-item prop="email">
              <el-input
                :prefix-icon="Message"
                placeholder="邮箱"
                v-model="formdata.email"
              />
            </el-form-item>
            <el-form-item prop="username">
              <el-input
                :prefix-icon="User"
                placeholder="用户名"
                v-model="formdata.username"
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                :prefix-icon="Lock"
                placeholder="密码"
                show-password
                type="password"
                v-model="formdata.password"
                class="input"
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="confirmPassword">
              <el-input
                :prefix-icon="Lock"
                placeholder="确认密码"
                show-password
                type="password"
                v-model="formdata.confirmPassword"
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="emailCode">
              <el-input
                :prefix-icon="Lock"
                placeholder="邮箱验证码"
                v-model="formdata.emailCode"
                class="email"
              >
              </el-input>
              <button class="emailbutton">发送验证码</button>
            </el-form-item>

            <div class="footer">
              <button class="registerbutton">注册</button>
              <button class="registerbutton" @click.prevent="reset">
                重置
              </button>
            </div>
          </el-form></el-tab-pane
        >
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Lock, Message, User } from '@element-plus/icons-vue'
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import type { formdata } from './type'
import { useRouter } from 'vue-router'

const activeName = ref('first')
const formRef = ref()
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
const router = useRouter()
const login = () => {
  router.push('/home')
}
//重置按钮
const reset = () => {
  formRef.value.resetFields()
}
//确认密码自定义规则
const repassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (value !== formdata.value.password) {
    callback(new Error('两次密码不一致'))
  } else {
    callback()
  }
}
const formdata = ref<formdata>({
  email: '',
  password: '',
  username: '',
  confirmPassword: '',
  emailCode: ''
})
const rules = ref({
  email: [
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' },
    { required: 'true', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ],
  password: [
    {
      required: 'true',
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      min: 6,
      max: 10,
      message: '密码需为6-10位',
      trigger: 'blur'
    }
  ],
  confirmPassword: [
    {
      validator: repassword,
      trigger: 'blur'
    }
  ],
  username: [
    {
      required: 'true',
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  emailCode: [
    {
      required: 'true',
      message: '请输入验证码',
      trigger: 'blur'
    },
    {
      min: 6,
      max: 6,
      message: '请输入正确的验证码',
      trigger: 'blur'
    }
  ]
})
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 45rem;
  .content {
    width: 90vw;
    padding: 20px 20px 10px 20px;
    border-radius: 16px;
    background-color: rgba(255, 255, 255);
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
    .title {
      /* 字体与排版 */
      font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
      font-size: 24px;
      font-weight: 600;
      color: #333;
      margin: 0;
      padding: 16px 0;

      /* 装饰效果 */
      position: relative;
      display: inline-block;

      /* 文字渐变（可选，增加视觉层次） */
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      background-image: linear-gradient(45deg, #4299e1, #6366f1);
    }
  }
}
.el-input {
  height: 4rem;
  width: 100%;
  :deep(.el-input__wrapper) {
    border-radius: 8px;
  }
}
//输入框图标大小
:deep(.el-input__prefix .el-icon) {
  font-size: 18px;
}

.email {
  height: 4rem;
  width: 50vw;
}
.demo-tabs > .el-tabs__content {
  color: #6b778c;
  font-size: 32px;
  font-weight: 700;
}
.loginbutton {
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 8px;
  background-color: rgb(64, 158, 255);
}
.registerbutton {
  width: 40%;
  height: 3rem;
  border: none;
  border-radius: 8px;
  background-color: rgb(64, 158, 255);
}

.emailbutton {
  height: 4rem;
  margin-left: 4.5vw;
  width: 25vw;
  border: none;
  border-radius: 8px;
  background-color: rgba(206, 223, 242, 0.618);
}
.footer {
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
}
</style>
