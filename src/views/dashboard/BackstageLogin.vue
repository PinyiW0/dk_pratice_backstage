<template>
  <div class="common-layout bg-primary h-screen">
    <el-container class="">
      <el-main class="">
        <el-row class="row-bg" justify="center">
          <el-col :span="12">
            <el-form
              ref="ruleFormRef"
              style="max-width: 600px"
              :model="ruleForm"
              status-icon
              :rules="rules"
              label-width="auto"
              class="demo-ruleForm form bg-white p-10 border-rounded-1"
            >
              <img src="/logo.svg" class="block w-full h-full mb-3 mx-auto" alt="" style="width:92px">
              <p class="font-600 text-primary text-center mb-7">格上駕駛附駕平台</p>
              <h1 class="font-600 text-8 text-primary text-center mb-10">客服端</h1>
              <el-form-item label="帳號" type="font-size-large" prop="checkPass" class="mb-10 font-600">
                <el-input type="password" autocomplete="off" class="border-none" />
              </el-form-item>
              <el-form-item label="密碼" prop="pass" class="mb-12 font-600">
                <el-input type="password" autocomplete="off" />
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  size="large"
                  class="bg-primary border-0 text-5 font-500 px-15 py-2 rounded-full mx-auto"
                  >登入</el-button
                >
              </el-form-item>
            </el-form>
          </el-col>
        
        </el-row>

      </el-main>
    </el-container>
  </div>
</template>

<script setup>
// import dayjs from 'dayjs';
</script>

<style scoped>
:deep .el-form-item__label {
  font-size: 20px;
}
:deep .el-input__wrapper {
  border: 1px solid #2788BF;
  border-radius: 5px;
}
</style>