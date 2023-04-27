<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { Permission } from '@/type/permission';

const store = useUserStore();
const { changePermission } = store;
</script>

<template>
  <div class="authority-container">
    <el-row>
      <el-button @click="changePermission(Permission.Normal)" type="primary">一般</el-button>
      <el-button @click="changePermission(Permission.Manage)" type="primary">管理</el-button>
      <el-button @click="changePermission(Permission.Super)" type="primary">超级</el-button>
    </el-row>
    <el-row>
      <el-button v-permission="Permission.Normal" type="success">Normal</el-button>
      <el-button v-permission="Permission.Manage" type="warning">Manage</el-button>
      <el-button v-permission="Permission.Super" type="danger">Super</el-button>
    </el-row>
  </div>
</template>

<style lang="scss" scoped></style>
