<script setup lang="ts">
import CDefaultHeader from "@/components/layout/c-default-header.vue";
import CDefaultSidebar from "@/components/layout/c-default-sidebar.vue";
import CDefaultFooter from "@/components/layout/c-default-footer.vue";
</script>

<template>
  <main class="layout-default">
    <c-default-header/>
    <div class="u-container layout-default__content">
      <c-default-sidebar/>
      <router-view/>
    </div>
    <c-default-footer/>
  </main>
</template>


<style scoped lang="scss">
@import "@/assets/styles/responsive";

.layout-default {
  padding-top: 127px;

  &__content {
    margin-top: var(--gz-space-lg);
    display: flex;
    align-items: flex-start;
    gap: var(--gz-space-xl);
  }

  @include adaptive-laptop {
    padding-top: 107px;

    &__content {
      margin-top: 30px;
      gap: var(--gz-space-sm);
    }
  }

  @include adaptive-tablet {
    padding-top: 98px;

    &__content {
      margin-top: 18px;
      border-top: 1px solid var(--gz-blur-mute-20);
      padding-top: 19px;
      gap: var(--gz-space-sm);
    }
  }

  @include adaptive-mobile {
    padding-top: 40px;

    &__content {
      margin-top: 20px;
      border-top: 1px solid var(--gz-blur-mute-20);
      padding-top: 20px;
      gap: var(--gz-space-sm);
      flex-direction: column;
    }
  }
}
</style>
