<script setup lang="ts">
import type { DealQuery } from "@/composables/deals/useDeals";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { platform } from "@/helper/core";

const TAB_ACTIONS_SPACE = platform() ? 50 : 60;
type BannerAttr = {
  width: string;
  left: string;
}

const props = defineProps<{
  fields: DealQuery[];
  active: DealQuery;
}>();
defineEmits<{
  (e: 'change:query', value: string): void;
}>();

const buttonSelector = ref();

const activeQueryIndex = computed<number>(() => props.fields.findIndex(f => f.value === props.active.value));
const bannerAttr = computed<BannerAttr>(() => {
  if (!buttonSelector.value) {
    return {
      width: "0",
      left: "0"
    };
  }
  const width = buttonSelector.value[activeQueryIndex.value].clientWidth;
  let left = 0;

  if (!!activeQueryIndex.value) {
    left = (TAB_ACTIONS_SPACE * activeQueryIndex.value) + buttonSelector.value[activeQueryIndex.value - 1].clientWidth;
  }

  return {
    width: `${width}px`,
    left: `${left}px`
  };
});

onUnmounted(() => {
  buttonSelector.value = null;
});
onMounted(() => {
  buttonSelector.value = document.querySelectorAll('.c-logic-tab__button');
});
</script>

<template>
  <div class="c-logic-tab">
    <div ref="banner" class="c-logic-tab__banner" :style="bannerAttr"/>
    <div class="c-logic-tab__actions">
      <button
        v-for="f in fields"
        :key="f.value"
        class="u-text-sm u-text-sm--lh-md c-logic-tab__button"
        type="button"
        :disabled="f.value === active.value"
        @click="$emit('change:query', f.value)"
      >
        {{ f.label }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/responsive";

.c-logic-tab {
  border-bottom: 1px solid var(--gz-blur-mute-20);
  width: 100%;
  height: 41px;
  position: relative;

  &__banner {
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: var(--gz-clr-primary);
    border-radius: 1px;
    transition: var(--gz-transition);
  }

  &__actions {
    display: flex;
    align-items: flex-start;
    gap: var(--gz-space-xl);
  }

  &__button {
    color: var(--gz-clr-mute);
    transition: var(--gz-transition);

    &:disabled {
      color: var(--gz-clr-white);
    }
  }

  @include adaptive-laptop {
    &__actions {
      gap: 50px;
    }
  }
  @include adaptive-tablet {
    &__actions {
      gap: 50px;
    }
  }
  @include adaptive-mobile {
    &__actions {
      gap: 50px;
    }
  }
}
</style>
