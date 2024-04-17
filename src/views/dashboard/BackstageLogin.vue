<script lang="ts" setup>
// import dayjs from 'dayjs';
import { ref, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import type { FormInstance, FormRules } from "element-plus";

const useraccount = ref("");
const password = ref("");
const router = useRouter();

interface RuleForm {
  account: string;
  password: string;
}
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  account: "",
  password: "",
});
const rules = reactive<FormRules<RuleForm>>({
  account: [
    { required: true, message: "請輸入正確的帳號", trigger: "blur" },
    { min: 3, max: 10, message: "長度應屆於 3 ~ 10 碼", trigger: "blur" },
  ],
  password: [
    { required: true, message: "請輸入正確的密碼", trigger: "blur" },
    { min: 3, max: 10, message: "長度應屆於 3 ~ 10 碼", trigger: "blur" },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      const token = JSON.stringify({
        useraccount: ruleForm.account,
        password: ruleForm.password,
      });
      localStorage.setItem("token", token);
      router.push("/admin/carinfo");
      resetForm(formEl);
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
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
            prop="account"
            class="mb-10 font-600"
            placeholder="請輸入帳號"
          >
            <el-input v-model="ruleForm.account" />
          </el-form-item>
          <el-form-item
            label="密碼"
            prop="password"
            class="mb-10 font-600"
            placeholder="請輸入密碼"
          >
            <el-input v-model="ruleForm.password" show-password />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="large"
              class="bg-primary border-0 text-5 font-500 px-15 rounded-full mx-auto"
              @click.prevent="submitForm(ruleFormRef)"
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
