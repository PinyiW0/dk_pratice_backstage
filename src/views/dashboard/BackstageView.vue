<script setup>
import { computed, ref } from "vue";
import { ElMessageBox } from "element-plus";
import { useRouter } from 'vue-router';
import ButtonView from '/src/components/ButtonView.vue';

const value = ref("");
const value2 = ref(true);
const router = useRouter();

const logout = () => {
  localStorage.removeItem('token');
  router.push('/admin/login');
};

const options = [
  {
    value: "機場接送",
    label: "機場接送",
  },
  {
    value: "代駕服務",
    label: "代駕服務",
  },
  {
    value: "計時包車",
    label: "計時包車",
  },
  {
    value: "長照接駁",
    label: "長照接駁",
  },
];

const dialogVisible = ref(false);

const handleClose = (done) => {
  ElMessageBox.confirm("是否確認完資訊?")
    .then(function () {
      done();
    })
    .catch(function () {
      // catch error
    });
};

// 篩選已停用項目
const showDisabled = ref(false);
const tableData = [
  {
    enabled: true,
    cardealer: "7",
    cardealername: "格上汽車",
    importance: "1",
    servertype: "機場接送、代駕服務、計時包車、長照接駁",
    bidnum: "12208883",
    principal: "",
    contactnum: "",
  },
  {
    enabled: false,
    cardealer: "7",
    cardealername: "格上汽車",
    importance: "1",
    servertype: "機場接送、代駕服務",
    bidnum: "12208883",
    principal: "",
    contactnum: "",
  },
  {
    enabled: true,
    cardealer: "7",
    cardealername: "格上汽車",
    importance: "1",
    servertype: "機場接送、代駕服務、計時包車",
    bidnum: "12208883",
    principal: "",
    contactnum: "",
  },
  {
    enabled: false,
    cardealer: "7",
    cardealername: "格上汽車",
    importance: "1",
    servertype: "代駕服務",
    bidnum: "12208883",
    principal: "",
    contactnum: "",
  },
];
const filterData = computed(() => {
  if (showDisabled.value) {
    return tableData.filter(item => !item.enabled);
  } else {
    return tableData.filter(item => item.enabled);
  }
})
</script>
<template>
  <div class="common-layout">
    <el-container>
      <!-- nav 列 -->
      <el-header>
        <div>
          <nav class="p-5 alignment-container flex justify-between items-center">
            <el-space direction="horizontal" alignment="center" :size="16">
              <img src="/logo-v.svg" alt="格上租車橫式Logo" />
              <h2 class="font-500 text-5">格上駕駛附駕平台</h2>
              <el-icon color="#FF5600" :size="22"><fold /></el-icon>
            </el-space>
            <el-space>
              <el-button
              type="primary"
              class="text-4 font-500 rounded-full mx-auto"
              @click="logout"
              plain
              >登出</el-button
            >
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
          <div class="bg-white m-5 border-rounded-1">
            <el-row justify="space-between" alignment="center" me-5>
              <el-col :span="18">
                <div class="grid-content ep-bg-white">
                  <h1 class="text-6 font-600 p-5">車商基本資料</h1>
                </div>
              </el-col>
              <el-col :span="3">
                <el-button
                  type="primary"
                  round
                  @click="dialogVisible = true"
                  class="my-5 w-full"
                >
                  新增
                </el-button>
                <el-dialog
                  v-model="dialogVisible"
                  title="新增車商基本資料"
                  width="500"
                  :before-close="handleClose"
                >
                  <span>新增車商基本資料</span>
                  <template #footer>
                    <div class="dialog-footer">
                      <el-button @click="dialogVisible = false">取消</el-button>
                      <el-button type="primary" @click="dialogVisible = false">
                        儲存
                      </el-button>
                    </div>
                  </template>
                </el-dialog>
              </el-col>
            </el-row>
            <el-row justify="space-between">
              <el-col :span="18">
                <el-space
                  direction="horizontal"
                  alignment="center"
                  class="pb-5"
                >
                  <div class="grid-content ep-bg-white mx-5">
                    <div class="flex flex-wrap gap-4 items-center">
                      <el-select
                        v-model="value"
                        placeholder="服務類型"
                        size="large"
                        style="width: 200px"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </div>
                  </div>
                  <ButtonView title="清除條件" />
                  <ButtonView title="搜尋" color="#E6653C" icon="Search" />
                  <!-- hovercolor="danger-dark" -->
                </el-space>
              </el-col>
              <el-col :span="4">
                <el-space
                  direction="horizontal"
                  alignment="center"
                  class="pb-5"
                >
                  <div class="grid-content ep-bg-white">
                    <el-checkbox
                      v-model="showDisabled"
                      label="顯示停用項目"
                      size="large"
                      alignment="center"
                    />
                  </div>
                </el-space>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="23" class="mx-5 mb-5">
                <el-table
                  :data="filterData"
                  border
                  style="width: 100%"
                  :row-class-name="tableRowClassName"
                  :header-cell-style="{ background: '#F5F7F9' }"
                >
                  <el-table-column
                    align="center"
                    row-style="#F5F7F9"
                    label="操作"
                  >
                    <el-button
                      type="primary"
                      link
                      @click="dialogVisible = true"
                    >
                      <el-icon :size="25">
                        <Edit />
                      </el-icon>
                    </el-button>
                  </el-table-column>
                  <el-table-column align="center" label="啟用">
                    <template #default="{ row }">
                      <el-switch
                        v-model="row.enabled"
                        class="mt-2"
                        style="margin-left: 24px"
                        inline-prompt
                        :active-icon="Check"
                        :inactive-icon="Close"
                      />
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="center"
                    prop="cardealer"
                    label="車商代碼"
                  />
                  <el-table-column
                    align="center"
                    prop="cardealername"
                    label="車商簡稱"
                  />
                  <el-table-column
                    align="center"
                    prop="importance"
                    label="重要度"
                  />
                  <el-table-column
                    align="center"
                    prop="servertype"
                    label="服務類型"
                  />
                  <el-table-column
                    align="center"
                    prop="bidnum"
                    label="統一編號"
                  />
                  <el-table-column
                    align="center"
                    prop="principal"
                    label="負責人"
                  />
                  <el-table-column
                    align="center"
                    prop="contactnum"
                    label="聯絡電話"
                  />
                </el-table>
              </el-col>
            </el-row>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
:deep(.el-header) {
  margin-bottom: 20px;
}
:deep(.menu-active) {
  background-color: #195090;
}
:deep(.el-breadcrumb) {
  border: 1px solid #dce0f0;
  background-color: white;
  padding: 6px 16px;
}
:deep(.el-table thead) {
  color: #004098;
}
</style>
