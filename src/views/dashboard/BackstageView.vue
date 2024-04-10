<template>
  <div class="common-layout">
    <el-container>
      <!-- nav 列 -->
      <el-header class="">
        <div>
          <nav class="p-5 alignment-container">
            <el-space direction="horizontal" alignment="center" :size="16">
              <img src="/logo-v.svg" alt="格上租車橫式Logo" />
              <h2 class="font-500 text-5">格上駕駛附駕平台</h2>
              <el-icon color="#FF5600"><Fold /></el-icon>
            </el-space>
          </nav>
        </div>
      </el-header>
      <el-container>
        <!-- aside menu -->
        <el-aside class="bg-primary h-screen" width="260px">
          <el-row class="tac" width="260px">
            <el-col :span="24">
              <el-menu
                active-text-color="#fff"
                background-color="#3366A2"
                class="el-menu-vertical-demo"
                default-active="1-1"
                text-color="#fff"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-sub-menu index="1">
                  <template #title>
                    <el-icon><van /></el-icon>
                    <span>車商資料管理</span>
                  </template>
                  <el-menu-item index="1-1" class="menu-active"
                    >車商基本資料</el-menu-item
                  >
                  <el-menu-item index="1-2">司機資料維護</el-menu-item>
                  <el-sub-menu index="1-3">
                    <template #title>駕駛排班設定</template>
                    <el-menu-item index="1-3-1">駕駛管理</el-menu-item>
                    <el-menu-item index="1-3-2">當月駕駛班表</el-menu-item>
                    <el-menu-item index="1-3-3">排班設定</el-menu-item>
                  </el-sub-menu>
                  <el-sub-menu index="1-4">
                    <template #title>車商價格設定</template>
                    <el-menu-item index="1-4-1">其他價格設定</el-menu-item>
                    <el-menu-item index="1-4-2">連續假期設定</el-menu-item>
                  </el-sub-menu>
                  <el-sub-item index="1-5">
                    <template #title>車商端公告管理</template>
                  </el-sub-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                  <template #title>
                    <el-icon><shop /></el-icon>
                    <span>業務管理</span>
                  </template>
                  <el-menu-item index="2-1">合約設定</el-menu-item>
                </el-sub-menu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <!-- main 車商資料管理 -->
        <el-main class="p-0 bg-bg-gray">
          <el-breadcrumb separator="/" class="">
            <el-breadcrumb-item :to="{ path: '/' }"
              >車商資料管理</el-breadcrumb-item
            >
            <el-breadcrumb-item>車商基本資料</el-breadcrumb-item>
          </el-breadcrumb>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
// import dayjs from "dayjs";
</script>

<style scoped>
:deep .el-header {
  margin-bottom: 20px;
}
:deep .menu-active {
  background-color: #195090;
}
:deep .el-breadcrumb {
  border: 1px solid #dce0f0;
  background-color: white;
  padding: 6px 16px;
}
</style>
