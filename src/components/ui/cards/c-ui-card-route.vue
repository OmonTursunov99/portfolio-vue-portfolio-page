<script setup lang="ts">
defineProps<{
  active: boolean;
  label: string;
  routeName: string;
}>();
</script>

<template>
  <router-link class="u-route-action" :to="{name: routeName}">
    <slot name="icon"/>
    <p
      class="u-text-sm u-text-sm--lh-md u-text-clamp"
      :class="[active ? 'u-clr-white' : 'u-clr-mute']"
    >
      {{ label }}
    </p>
  </router-link>
</template>
