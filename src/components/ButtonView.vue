<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: () => "Close",
  },
});
</script>

<template>
  <el-button color="#828282" class="text-white" :dark="isDark">
    <el-icon :size="20">
      <component :is="props.icon" />
    </el-icon>
    {{ props.title }}
  </el-button>
</template>