<script setup lang="ts">
defineProps<{
  heading: string;
}>();
</script>

<template>
  <div class="c-ui-content-page-intro">
    <h1 class="u-text-lg u-clr-white c-ui-content-page-intro__heading">{{ heading }}</h1>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/responsive";

.c-ui-content-page-intro {
  border-top: 1px solid var(--gz-blur-mute-20);
  width: 100%;

  &__heading {
    margin: var(--gz-space-lg) 0;
  }

  @include adaptive-laptop {
    &__heading {
      margin: var(--gz-space-sm) 0;
    }
  }

  @include adaptive-tablet {
    border-top: none;

    &__heading {
      margin: var(--gz-space-sm) 0;
    }
  }

  @include adaptive-mobile {
    border-top: none;

    &__heading {
      margin: 0 0 var(--gz-space-sm);
    }
  }
}
</style>
