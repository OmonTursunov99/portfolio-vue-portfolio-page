<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import CUiCardBlur from "@/components/ui/cards/c-ui-card-blur.vue";
import CUiCardAvatar from "@/components/ui/cards/c-ui-card-avatar.vue";
import CUiContentChips from "@/components/ui/content/c-ui-content-chips.vue";
import CLogicCardRegisteredAt from "@/components/logic/card/c-logic-card-registered-at.vue";
import CLogicListsRoute from "@/components/logic/lists/c-logic-lists-route.vue";
import arrow from "@/assets/svg/arrow.svg"
import { ref } from "vue";

const userStore = useUserStore();

const visible = ref<boolean>(false);

function changeVisible() {
  visible.value = !visible.value;
}
</script>

<template>
  <aside class="c-default-sidebar">
    <c-ui-card-blur>
      <div class="c-default-sidebar__head">
        <c-ui-card-avatar/>
        <div class="c-default-sidebar__user">
          <p class="u-text-md u-clr-white u-text-clamp">{{ userStore.profile.username }}</p>
          <c-ui-content-chips
            class="c-default-sidebar__chips--none"
            variant="success"
            label="Онлайн"
          />
        </div>
        <button
          class="c-default-sidebar__action"
          type="button"
          :class="{'c-default-sidebar__action--close': !visible}"
          @click="changeVisible"
        >
          <arrow />
        </button>
      </div>
      <div class="c-default-sidebar__wrapper" :class="{'c-default-sidebar__wrapper--open': visible}">
        <div class="c-default-sidebar__chips">
          <c-ui-content-chips
            class="u-mt-2xs"
            variant="success"
            label="Онлайн"
          />
        </div>
        <div class="c-default-sidebar__info">
          <p class="u-text-xs u-clr-mute c-default-sidebar__description">Продажа голды в вов 24/7</p>
          <c-logic-card-registered-at :registered-at="userStore.profile.registeredAt"/>
        </div>
        <c-logic-lists-route/>
      </div>
    </c-ui-card-blur>
  </aside>
</template>

<style scoped lang="scss">
@import "@/assets/styles/responsive";

.c-default-sidebar {
  min-width: 320px;
  width: 320px;

  &__wrapper {

  }

  &__head {
    display: flex;
    align-items: center;
    gap: var(--gz-space-xs);
  }

  &__action {
    padding: var(--gz-space-xs) 5px var(--gz-space-xs) var(--gz-space-xs);
    margin-left: auto;

    svg {
      transition: var(--gz-transition);
    }

    &--close {
      svg {
        transform: rotate(180deg);
      }
    }
  }

  &__user {
    display: flex;
    flex-direction: column;
    gap: var(--gz-space-2xs);
  }

  &__info {
    margin-top: var(--gz-space-sm);
    display: flex;
    flex-direction: column;
    gap: var(--gz-space-sm);
  }

  &__chips {
    display: none;
  }

  &__chips--none {
    display: flex;
  }

  @include adaptive-laptop {
    min-width: 234px;
    width: 234px;

    &__description {
      font-size: 12px;
      line-height: 15px;
    }
  }

  @include adaptive-tablet {
    min-width: 190px;
    width: 190px;

    &__head {
      padding: 5px 5px 0;
    }

    &__description {
      padding: 0 5px;
    }

    &__chips {
      display: flex;
      padding: 0 5px;
    }

    &__chips--none {
      display: none;
    }

    &__info {
      margin-top: var(--gz-space-xs);
      gap: var(--gz-space-xs);
    }
  }

  @include adaptive-mobile {
    width: 100%;
    min-width: 100%;

    &__wrapper {
      height: 0;
      overflow: hidden;
      transition: var(--gz-transition);
      &--open {
        height: 392px;
      }
    }
  }
}
</style>
