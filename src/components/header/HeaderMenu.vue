<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { Permission } from '@/type/permission';

const router = useRouter();
const store = useUserStore();
const { role } = storeToRefs(store);
const filterRouter = router.options.routes.filter((item) => {
  return (
    (item.name !== Permission.Normal &&
      item.name !== Permission.Super &&
      item.name !== Permission.Manage) ||
    role.value.indexOf(item.name as string) !== -1
  );
});
</script>

<template>
  <el-menu mode="horizontal" :router="true" default-active="/home">
    <el-menu-item v-for="item in filterRouter" :key="item.name" :index="item.path">
      {{ item.name }}
    </el-menu-item>
    <!-- <el-sub-menu v-else>
        <template #title>{{ item.name }}</template>
        <el-menu-item v-for="child in item.children" :key="child.name" :index="item.path">
          {{ child.name }}
        </el-menu-item>
      </el-sub-menu> -->
  </el-menu>
</template>

<style lang="scss" scoped></style>
