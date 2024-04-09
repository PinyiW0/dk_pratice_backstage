<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div class="text-25px text-#ff6700 bg-#ccc">你好Unocss</div>
    <a href=""></a><RouterLink to="/admin/login">後台登入頁</RouterLink>
    
  </div>
  <RouterView />
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue';
import dayjs from 'dayjs';
console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"));
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
</style>
