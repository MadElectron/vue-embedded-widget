<template>
  <el-button @click="$emit('click')">Отлично!</el-button>
</template>

<style scoped>
.el-button {
  width: 100%;
  height: 60px;
  margin: 0;
  padding: 20.5px;
  border-radius: 20px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.01em;
  background: #252525;
  color: #fff;
}
</style>
