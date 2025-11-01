<template>
  <el-dialog
    :model-value="visible"
    :append-to-body="false"
    show-close
    @close="$emit('close')"
  >
    <template #header>
      <Logo class="logo" />
    </template>

    <div class="content">
      <WidgetInstallmentProfiles />
      <WidgetDialogInfo />
    </div>

    <template #footer>
      <WidgetDialogButton @click="$emit('close')" />
    </template>
  </el-dialog>
</template>

<script setup>
import Logo from "./svg/Logo.vue";
import WidgetDialogInfo from "./WidgetDialogInfo.vue";
import WidgetInstallmentProfiles from "./WidgetInstallmentProfiles.vue";
import WidgetDialogButton from "./WidgetDialogButton.vue";

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.logo {
  transform: translateX(4px) scale(1.2);
}

.content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
</style>
