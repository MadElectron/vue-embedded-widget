<template>
  <div class="widget">
    <el-button>
      <span class="content">
        <span class="logo">
          <Logo />
        </span>
        <span class="top">1 625 &#8381; &times; 4 платежа</span>
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
import { ref } from "vue";
import Logo from "./components/Logo.vue";
import Chevron from "./components/Chevron.vue";

defineProps({
  title: { type: String, default: "Привет, мир!" },
});

const onClick = () => alert("Виджет работает!");
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Inter";
  src: url("./assets/fonts/Inter-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
}

.widget {
  font-family: "Inter", sans-serif;
}

.el-button {
  height: auto;
  padding: 15px 12px;
  border-radius: 20px;
  border: none;
  background: #c8ff00;
  color: #000;

  .content {
    display: grid;
    grid-template-areas:
      "logo top right"
      "logo bottom right";
    gap: 0 8px;
    font-weight: 500;
    font-style: Medium;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -2%;
    vertical-align: middle;
    text-align: left;

    .logo {
      grid-area: logo;
      display: flex;
      align-items: center;
    }

    .top {
      grid-area: top;
    }

    .bottom {
      grid-area: bottom;
      color: transparentize(#000, 0.5);
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
      background-color: transparentize(#fff, 0.6);

      svg {
        width: 5px;
        height: 10px;
      }
    }
  }
}
</style>
