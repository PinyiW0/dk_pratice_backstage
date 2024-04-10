<template>
  <div class="bg-primary p-3">
    <el-row :gutter="20">
      <el-col :span="4" :offset="2">
        <RouterLink to="/admin/login" class="text-white align-middle"
          >後台登入頁</RouterLink
        >
      </el-col>
      <el-col :span="4">
        <RouterLink to="/admin/carinfo" class="text-white align-middle"
          >車商基本資料頁</RouterLink
        >
      </el-col>
    </el-row>
  </div>
  <RouterView />
</template>

<script setup>
import dayjs from "dayjs";
// console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"));
</script>

<style scoped>
</style>
