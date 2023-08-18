<script setup lang="ts">
defineProps<{
  borderSm?: boolean;
  paddingSm?: boolean;
}>();
</script>

<template>
  <div
    class="c-ui-card-blur"
    :class="{
      'c-ui-card-blur--border-sm': borderSm,
      'c-ui-card-blur--padding-sm': paddingSm
    }"
  >
    <slot/>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/responsive";

.c-ui-card-blur {
  border: 1px solid var(--gz-blur-white-7);
  backdrop-filter: blur(10px);
  box-shadow: 2px 0 10px 0 #0603090D;
  background-color: var(--gz-blur-white-3);
  border-radius: var(--gz-space-sm);
  padding: var(--gz-space-md);

  &--border-sm {
    border-radius: var(--gz-space-xs);
  }

  &--padding-sm {
    padding: 17px var(--gz-space-sm);
  }

  @include adaptive-laptop {
    padding: var(--gz-space-sm);

    &--padding-sm {
      padding: 12px var(--gz-space-sm);
    }
  }

  @include adaptive-tablet {
    padding: var(--gz-space-xs);

    &--padding-sm {
      padding: 10px var(--gz-space-xs);
    }
  }

  @include adaptive-mobile {
    padding: var(--gz-space-xs);

    &--padding-sm {
      padding: 9.5px var(--gz-space-xs);
    }

    &--border-sm {
      border-radius: var(--gz-space-2xs);
    }
  }
}
</style>
