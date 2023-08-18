<script setup lang="ts">
import CUiCardBlur from "@/components/ui/cards/c-ui-card-blur.vue";
import CUiCardRate from "@/components/ui/cards/c-ui-card-rate.vue";
import { useUserStore } from "@/stores/user";
import { platform } from "@/helper/core";
import { useDealsStore } from "@/stores/deals";

const userStore = useUserStore();
const dealsStore = useDealsStore();
</script>

<template>
  <header class="c-default-header">
    <div class="u-container">
      <div class="c-default-header__wrapper">
        <h1 v-if="!platform('mobile')" class="u-text-xl u-clr-white">Мой профиль</h1>
        <div class="c-default-header__info">
          <h1 v-if="platform('mobile')" class="u-text-xl u-clr-white u-mr-auto">Мой профиль</h1>
          <c-ui-card-blur border-sm padding-sm>
            <div class="c-default-header__card">
              <p class="u-text-sm u-clr-mute">Рейтинг:</p>
              <p class="u-text-md u-clr-white">{{ userStore.profile.rate }}</p>
              <c-ui-card-rate :rate="userStore.profile.rate"/>
            </div>
          </c-ui-card-blur>
          <c-ui-card-blur border-sm padding-sm>
            <div class="c-default-header__card">
              <p class="u-text-sm u-clr-mute">Отзывов:</p>
              <p class="u-text-md u-clr-white">{{ userStore.profile.reviews }}</p>
            </div>
          </c-ui-card-blur>
          <c-ui-card-blur border-sm padding-sm>
            <div class="c-default-header__card">
              <p class="u-text-sm u-clr-mute">
                Сделок:
                <span class="u-text-md u-clr-white">{{ userStore.profile.deals }}</span>
              </p>
              <p class="u-text-sm u-clr-mute">
                Продаж:
                <span class="u-text-md u-clr-white">{{ dealsStore.sales.length }}</span>
              </p>
              <p class="u-text-sm u-clr-mute">
                Покупок:
                <span class="u-text-md u-clr-white">0</span>
              </p>
            </div>
          </c-ui-card-blur>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/styles/responsive";

.c-default-header {
  &__wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__info {
    display: flex;
    align-items: stretch;
    justify-content: flex-end;
    gap: var(--gz-space-xs);
  }

  &__card {
    display: flex;
    align-items: center;
    gap: var(--gz-space-2xs);
  }

  @include adaptive-laptop {
    &__info {
      gap: var(--gz-space-2xs);
    }
  }

  @include adaptive-tablet {
    &__info {
      flex-wrap: wrap;
    }
  }

  @include adaptive-mobile {
    &__info {
      flex-wrap: wrap;
    }
  }
}
</style>
