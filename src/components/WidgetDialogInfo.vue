<template>
  <div class="info">
    <h2 class="title">Как оформить?</h2>
    <el-steps direction="vertical">
      <el-step
        title="В способах оплаты выберите +7 pay и нажмите «Оформить заказ»"
      />
      <el-step
        title="На следующей странице введите номер телефона и код из смс"
      />
      <el-step
        title="Выберите условия и укажите карту/СБП для оплаты первой части"
      />
      <el-step title="Оплатите первый платеж и покупка ваша!" />
    </el-steps>
  </div>
</template>

<style lang="scss" scoped>
.info {
  font-family: "Inter", sans-serif;
}

.title {
  margin: 0;
  padding-bottom: 13px;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0;
}

.el-steps {
  height: auto;
  gap: 12px;
}

.el-step {
  align-items: center;

  :deep(.el-step__head) {
    width: 40px;
  }

  :deep(.el-step__icon) {
    height: 40px;
    width: 40px;
    border: none;
    background-color: #f5f7f9;
  }

  :deep(.el-step__icon-inner) {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: center;
  }

  :deep(.el-step__title) {
    padding: 0;
    font-family: "Inter", sans-serif !important;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0px;
  }

  :deep(.el-step__title.is-process) {
    font-weight: initial;
  }
}
</style>
