<script setup>
// import dayjs from 'dayjs';
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const useraccount = ref("");
const password = ref("");
const router = useRouter();

onMounted(() => {
  useraccount.value = "";
  password.value = "";
});

const login = () => {
  // 空白驗證
  if (!useraccount.value.trim() || !password.value.trim()) {
    alert("帳號與密碼欄位不可空白");
    return;
  }
  // 儲存 token
  const token = JSON.stringify({
    useraccount: useraccount.value,
    password: password.value,
  });
  localStorage.setItem("token", token);
  router.push("/admin/carinfo");
};

</script>
<template>
  <div class="common-layout bg-primary h-screen flex justify-center bgimage">
    <el-row class="row-bg" align="middle">
      <el-col :span="8">
        <el-form
          ref="ruleFormRef"
          style="max-width: 600px"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="auto"
          class="demo-ruleForm form bg-white pt-8 px-8 border-rounded-1"
        >
          <img
            src="/logo.svg"
            class="block w-full h-full mb-3 mx-auto"
            alt=""
            style="width: 92px"
          />
          <p class="font-600 text-primary text-center mb-7">格上駕駛附駕平台</p>
          <h1 class="font-600 text-8 text-primary text-center mb-15">客服端</h1>
          <el-form-item
            label="帳號"
            type="font-size-large"
            prop="checkPass"
            class="mb-10 font-600"
          >
            <el-input
              type="account"
              autocomplete="off"
              class="border-none"
              placeholder="請輸入帳號"
              v-model="useraccount"
            />
          </el-form-item>
          <el-form-item label="密碼" prop="pass" class="mb-12 font-600">
            <el-input
              type="password"
              autocomplete="off"
              placeholder="請輸入密碼"
              v-model="password"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="large"
              class="bg-primary border-0 text-5 font-500 px-15 rounded-full mx-auto"
              @click.prevent="login"
              >登入</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
:deep(.el-form-item__label) {
  font-size: 20px;
}
:deep(.el-input__wrapper) {
  border: 1px solid #2788bf;
  border-radius: 5px;
  box-shadow: none;
}
.form {
  min-width: 460px;
  min-height: 460px;
}
.bgimage {
  background-image: url("/loginBgWeb.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
