<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderMenuVue from './components/header/HeaderMenu.vue';
</script>

<template>
  <header>
    <HeaderMenuVue />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  div#app {
    width: 100%;
    header {
      margin-bottom: 20px;
    }
  }
}
</style>
