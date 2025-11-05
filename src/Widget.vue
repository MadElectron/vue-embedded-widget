<template>
  <div class="widget" :style="widthStyle">
    <el-button @click="onClick">
      <span class="content">
        <span class="logo">
          <Logo />
        </span>
        <span class="top"
          >{{ paymentAmount }} <span class="ruble">₽</span> &times;
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

    <!-- Off-flow component -->
    <WidgetDialog :visible="dialogVisible" @close="dialogVisible = false" />
  </div>
</template>

<script setup>
import Logo from "./components/svg/Logo.vue";
import Chevron from "./components/svg/Chevron.vue";
import WidgetDialog from "./components/WidgetDialog.vue";
import { useI18n } from "vue-i18n";
import { ref, computed, provide } from "vue";
import { currency } from "./utils";

const { t } = useI18n();

const props = defineProps({
  price: { type: Number, default: 0 },
  paymentCount: { type: Number, default: 4 },
  width: { type: Number, default: null },
});

provide("price", props.price);

const dialogVisible = ref(false);

const widthStyle = computed(() =>
  props.width ? `width: ${props.width}px` : ""
);
const paymentAmount = computed(() =>
  currency(props.price / props.paymentCount, { maximumFractionDigits: 0 })
);

const onClick = (e) => {
  e.preventDefault();
  dialogVisible.value = true;
  console.log(dialogVisible.value);
};
</script>

<style lang="scss" scoped>
@use "sass:color";

.widget {
  width: 100%;
  min-width: fit-content;
  font-weight: 400;
}

.el-button {
  justify-content: stretch;
  width: 100%;
  height: auto;
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
