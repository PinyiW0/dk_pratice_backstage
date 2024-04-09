<template>
  <div class="common-layout bg-primary w-screen h-screen">
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
              class="demo-ruleForm form bg-white"
            >
              <el-form-item label="帳號" type="font-size-large" prop="checkPass">
                <el-input type="password" autocomplete="off" />
              </el-form-item>
              <el-form-item label="密碼" prop="pass">
                <el-input type="password" autocomplete="off" />
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  class="bg-primary border-0 text-5 px-15 py-2 rounded-full flex items-center"
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
.form {
  max-width: 540px;
  max-height: 518px;
}
</style>