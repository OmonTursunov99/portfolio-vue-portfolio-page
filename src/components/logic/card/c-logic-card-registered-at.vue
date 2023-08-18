<script setup lang="ts">
import { computed } from "vue";
import { dateFormat, dateRelative } from "@/helper/datetime";

const props = defineProps<{
  registeredAt: string;
}>();

const relative = computed(() => dateRelative(props.registeredAt));
const day = computed(() => dateFormat(props.registeredAt, 'dd MMMM yyyy'));
const hours = computed(() => dateFormat(props.registeredAt, 'HH:mm'));
</script>

<template>
  <div class="c-logic-card-registered-at">
    <p class="u-text-2xs u-text-2xs--lh-lg u-clr-mute">Регистрация: {{ relative }}</p>
    <p class="u-text-xs u-text-xs--lh-lg u-clr-white">{{ day }}, в {{ hours }}</p>
  </div>
</template>

<style scoped lang="scss">
.c-logic-card-registered-at {
  background-color: var(--gz-blur-dark-50);
  border-radius: var(--gz-space-xs);
  padding: var(--gz-space-xs);
  display: flex;
  flex-direction: column;
}
</style>
