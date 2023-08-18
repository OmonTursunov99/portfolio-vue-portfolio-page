<script setup lang="ts">
import { computed } from "vue";

type Field = {
  active: boolean;
  count: number;
}

const props = defineProps<{
  rate: number;
}>();

const fields = computed<Field[]>(() => {
  const r = [];
  for (let count = 1; count <= 5; count++) {
    let active = false;
    if (props.rate >= count) {
      active = true;
    }

    r.push({active, count})
  }
  return r;
});
</script>

<template>
  <div class="c-ui-card-rate">
    <!-- Исключения | вызов svg -->
    <svg
      v-for="f in fields"
      :key="f.count"
      class="c-ui-card-rate__icon"
      :class="{ 'c-ui-card-rate__icon--active': f.active }"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path opacity="0.5"
        d="M17.9529 6.80118C17.8344 6.42084 17.5111 6.15157 17.1302 6.1156L11.9341 5.62334L9.88058 0.606473C9.72896 0.237889 9.38399 0 9.00001 0C8.61603 0 8.27092 0.237889 8.12027 0.606473L6.06675 5.62334L0.869867 6.1156C0.48891 6.15229 0.166319 6.42156 0.0471155 6.80118C-0.0714013 7.18151 0.0380516 7.59868 0.326173 7.86236L4.25398 11.4563L3.09587 16.779C3.01113 17.1704 3.15671 17.5751 3.4679 17.8098C3.63517 17.9367 3.83169 18 4.0289 18C4.19836 18 4.36797 17.953 4.51944 17.8584L9.00001 15.0628L13.4798 17.8584C13.8084 18.0633 14.2216 18.0446 14.5321 17.8098C14.8433 17.5751 14.9889 17.1704 14.9042 16.779L13.746 11.4563L17.6738 7.86236C17.9618 7.59868 18.0714 7.18237 17.9529 6.80118Z"
        fill="#7D7781"/>
    </svg>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/responsive";

.c-ui-card-rate {
  display: flex;
  align-items: center;
  gap: 9px;

  &__icon {
    path {
      fill: var(--gz-clr-mute);
    }

    &--active {
      path {
        fill: var(--gz-clr-primary);
      }
    }
  }

  @include adaptive-laptop {
    gap: 6px;

    &__icon {
      width: 12px;
      height: 12px;
    }
  }

  @include adaptive-tablet {
    gap: 4px;

    &__icon {
      width: 10px;
      height: 10px;
    }
  }

  @include adaptive-mobile {
    gap: 4px;

    &__icon {
      width: 10px;
      height: 10px;
    }
  }
}
</style>
