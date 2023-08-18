<script setup lang="ts">
import { useGzRoutes } from "@/composables/gzRoutes/useGzRoutes";
import CUiCardRoute from "@/components/ui/cards/c-ui-card-route.vue";
import CLogicButtonLogout from "@/components/logic/button/c-logic-button-logout.vue";

const gzRoutes = useGzRoutes();
</script>

<template>
  <div class="c-logic-lists-route">
    <div class="c-logic-lists-route__banner" :style="{ top: gzRoutes.bannerTopPosition.value }"/>
    <c-ui-card-route
      v-for="r in gzRoutes.routeFields.value"
      :key="r.id"
      :label="r.label"
      :route-name="r.routeName"
      :active="r.active"
    >
      <template #icon>
        <component :is="r.icon" :class="{ 'u-svg-primary': r.active }"/>
      </template>
    </c-ui-card-route>
    <c-logic-button-logout/>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/responsive";

.c-logic-lists-route {
  margin-top: var(--gz-space-sm);
  position: relative;

  &__banner {
    position: absolute;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: var(--gz-blur-white-3);
    border: 1px solid var(--gz-blur-white-7);
    border-radius: var(--gz-space-xs);
    transition: var(--gz-transition);
    z-index: -1;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 2px;
      height: 15px;
      background-color: var(--gz-clr-primary);
    }
  }

  @include adaptive-laptop {
    &__banner {
      height: 47px;
    }
  }

  @include adaptive-tablet {
    &__banner {
      height: 47px;
    }
  }
  @include adaptive-mobile {
    &__banner {
      height: 47px;
    }
  }
}
</style>
