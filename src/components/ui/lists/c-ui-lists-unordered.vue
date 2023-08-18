<script setup lang="ts">
type Field = {
  href: string;
  label: string;
}

defineProps<{
  heading: string;
  fields: Field[];
}>();
</script>

<template>
  <div class="c-ui-lists-unordered">
    <p class="u-text-sm u-text-sm--bold u-text-sm--lh-md">{{ heading }}</p>
    <div class="c-ui-lists-unordered__line"/>
    <ul class="c-ui-lists-unordered__ul">
      <li
        v-for="f in fields"
        :key="f.label"
        class="c-ui-lists-unordered__li"
      >
        <a
          class="u-text-sm c-ui-lists-unordered__link"
          :href="f.href"
        >
          {{ f.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/responsive";

.c-ui-lists-unordered {
  &__line {
    width: 15px;
    height: 2px;
    border-radius: 1px;
    background-color: var(--gz-clr-danger);
    margin: var(--gz-space-xs) 0 var(--gz-space-md);
  }

  &__ul {
    display: flex;
    flex-direction: column;
    gap: var(--gz-space-sm);
  }

  &__link {
    color: var(--gz-blur-mute-60);
    transition: var(--gz-transition);

    &:hover {
      color: var(--gz-clr-white);
    }
  }

  @include adaptive-tablet {
    &__ul {
      gap: var(--gz-space-2xs);
    }
  }

  @include adaptive-mobile {
    &__ul {
      gap: var(--gz-space-2xs);
    }
  }
}
</style>
