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
            <el-form-item>
              <el-button type="primary" class="loginbutton" @click="login"
                >登录</el-button
              >
            </el-form-item>
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
              <el-button plain type="primary" class="button"
                >发送验证码</el-button
              >
            </el-form-item>
            <el-form-item class="footer">
              <el-button type="primary" class="registerbutton">注册</el-button>
              <el-button type="primary" class="registerbutton" @click="reset"
                >重置</el-button
              >
            </el-form-item>
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
  router.push('/')
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
  min-height: 100vh;
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
  height: 8vh;
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
  height: 8vh;
  width: 50vw;
}
.demo-tabs > .el-tabs__content {
  color: #6b778c;
  font-size: 32px;
  font-weight: 700;
}
.loginbutton {
  width: 100%;
  height: 7vh;
  border-radius: 8px;
}
.registerbutton {
  width: 40%;
  height: 6vh;
  border-radius: 8px;
}

.button {
  height: 8vh;
  margin-left: 3vw;
  width: 25vw;
  border-radius: 8px;
}
.footer {
  margin-top: 4vh;
}
</style>
