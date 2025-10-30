<template>
  <div class="widget">
    <el-button>
      <span class="content">
        <span class="logo">
          <Logo />
        </span>
        <span class="top"
          >1 625 <span class="ruble">₽</span> &times;
          {{ t("payment", 4) }}</span
        >
        <span class="bottom">на 2, 4 или 6 месяцев</span>
        <span class="right">
          <span class="chevron">
            <Chevron />
          </span>
        </span>
      </span>
    </el-button>
  </div>
</template>

<script setup>
import Logo from "./components/svg/Logo.vue";
import Chevron from "./components/svg/Chevron.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

defineProps({
  // title: { type: String, default: "Привет, мир!" },
});

const onClick = () => alert("Виджет работает!");
</script>

<style lang="scss" scoped>
@use "sass:color";

.widget {
  font-weight: 400;
}

.el-button {
  justify-content: stretch;
  height: auto;
  width: 100%;
  padding: 15px 12px;
  border-radius: 20px;
  border: none;
  background: #c8ff00;
  color: #000;

  & > :deep(span) {
    flex-grow: 1;
  }

  .content {
    display: grid;
    grid-template-columns: min-content auto min-content;
    grid-template-areas:
      "logo top right"
      "logo bottom right";
    gap: 0 8px;
    width: 100%;
    font-family: "Inter", sans-serif !important;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: left;

    .logo {
      grid-area: logo;
      display: flex;
      align-items: center;
    }

    .ruble {
      font-family: Roboto, sans-serif !important;
      font-weight: 400;
    }

    .top {
      grid-area: top;
    }

    .bottom {
      grid-area: bottom;
      color: color.scale(#000, $alpha: -50%);
    }

    .right {
      grid-area: right;
      display: flex;
      align-items: center;
    }

    .chevron {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: color.scale(#fff, $alpha: -40%);

      svg {
        width: 5px;
        height: 10px;
      }
    }
  }
}
</style>
