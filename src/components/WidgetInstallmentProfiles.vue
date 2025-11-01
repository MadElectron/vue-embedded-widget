<template>
  <div class="container">
    <el-radio-group v-model="selected">
      <el-radio-button label="6 недель" :value="1" />
      <el-radio-button label="4 месяца" :value="2" />
      <el-radio-button label="6 месяцев" :value="3" />
    </el-radio-group>

    <div class="content">
      <div class="tabs">
        <span class="tab">
          <span class="pay-today">
            <span>Сегодня</span>
            <span>6 625,00 ₽</span>
          </span>
        </span>
        <span class="tab">
          <span class="pay-more">ещё 3 платежа раз в две недели</span>
        </span>
        <span class="tab"></span>
        <span class="tab"></span>
      </div>

      <p>Ничего не переплачиваете</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selected = ref(1);
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
}

.el-radio-group {
  justify-content: stretch;
  padding: 8px;
  background-color: #f5f7f9;
  border-radius: 100px;
}

:deep(.el-radio-button) {
  flex: 1;
  padding: 12px 20px;
  opacity: 0.4;
}

:deep(.el-radio-button__inner) {
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #000;
}

:deep(.el-radio-button.is-active) {
  border-radius: 100px;
  font-weight: 500;
  opacity: 1;
  background-color: #fff;
  box-shadow: 0px 2.21px 5.52px 0px #2122242b;
  transition: all 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.content {
  padding: 16px 12px;
  border-radius: 26.52px;
  background: #f5f7f9;
  font-family: "Roboto", sans-serif;

  p {
    margin: 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0px;
    opacity: 0.4;
  }

  .tabs {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6.63px;
    align-items: end;
    width: 100%;
    margin-bottom: 8px;
    grid-auto-flow: column;

    .tab {
      .pay-today {
        display: grid;
        grid-template-columns: 1fr;
        gap: 4.42px;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0px;
      }

      .pay-more {
        position: absolute;
        bottom: 8.84px + 5.52px;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0px;
        opacity: 0.5;
      }

      &::after {
        content: "";
        display: block;
        margin-top: 8.84px;
        height: 5.52px;
        border-radius: 100px;
        background-color: #2525251a;
      }

      &:first-child {
        &::after {
          background-color: #252525;
        }
      }
    }
  }
}
</style>
