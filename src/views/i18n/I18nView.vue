<script setup lang="ts">
import { ref } from 'vue';
import LangSelect from '@/components/LangSelect.vue';
import { useI18n } from 'vue-i18n';
import { validatePassword } from './rules';

// 数据源
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
});

// 验证规则
const i18n = useI18n();
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: i18n.t('msg.login.usernameRule')
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
});
</script>

<template>
  <div class="login-container">
    <el-form class="login-form" :model="loginForm" :rules="loginRules" ref="loginFormRef">
      <div class="title-container">
        <h3>{{ $t('msg.login.title') }}</h3>
        <LangSelect></LangSelect>
      </div>
      <el-form-item prop="username">
        <el-input
          placeholder="username"
          name="username"
          type="text"
          v-model="loginForm.username"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="password"
          name="password"
          v-model="loginForm.password"
        >
        </el-input>
      </el-form-item>

      <el-button type="primary" class="submit">{{ $t('msg.login.loginBtn') }}</el-button>
      <div class="tips" v-html="$t('msg.login.desc')"></div>
    </el-form>
  </div>
</template>

<style lang="scss" scoped></style>
