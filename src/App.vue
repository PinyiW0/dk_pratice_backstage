<template>
  <!-- <div>
    <RouterLink to="/admin/login">後台登入頁 | </RouterLink>
    <RouterLink to="/admin/carbasicinfo">車商基本資料頁</RouterLink>
  </div> -->
  <RouterView />
</template>

<script setup>
import dayjs from 'dayjs';
console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"));
</script>

<style scoped>
</style>
