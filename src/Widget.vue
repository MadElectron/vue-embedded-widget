<template>
  <div class="widget">
    <el-card shadow="hover">
      <h3>{{ title }}</h3>
      <p>Это ваш Vue + Element Plus виджет 🎉</p>
      <el-button type="primary" @click="onClick">Нажми меня</el-button>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  title: { type: String, default: "Привет, мир!" },
});

const onClick = () => alert("Виджет работает!");
</script>

<style scoped>
.widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 260px;
}
</style>
