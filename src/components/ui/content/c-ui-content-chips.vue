<script setup lang="ts">
import { computed } from "vue";

export type ColorVariant = "success" | "info" | "warning" | "danger";

const props = defineProps<{
  variant: ColorVariant;
  label: string;
}>();

const colorSchema = computed(() => `c-ui-content-chips--${props.variant}`);
</script>

<template>
  <div class="c-ui-content-chips" :class="[colorSchema]">
    <span class="c-ui-content-chips__dod"/>
    <p class="u-text-2xs">{{ label }}</p>
  </div>
</template>

<style scoped lang="scss">
.c-ui-content-chips {
  display: flex;
  align-items: center;
  gap: var(--gz-space-2xs);

  &__dod {
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }

  &--success {
    color: var(--gz-clr-success);
    span {
      background-color: var(--gz-clr-success);
      box-shadow: 0 0 5px 3px var(--gz-blur-success-4);
    }
  }
  &--info {
    color: var(--gz-clr-info);
    span {
      background-color: var(--gz-clr-info);
      box-shadow: 0 0 5px 3px var(--gz-blur-info-4);
    }
  }
  &--warning {
    color: var(--gz-clr-warning);
    span {
      background-color: var(--gz-clr-warning);
      box-shadow: 0 0 5px 3px var(--gz-blur-warning-4);
    }
  }
  &--danger {
    span {
      background-color: var(--gz-clr-danger);
      box-shadow: 0 0 5px 3px var(--gz-blur-danger-4);
    }
    .u-text-2xs {
      color: var(--gz-clr-danger) !important;
    }
  }
}
</style>
