<script setup lang="ts">
defineProps<{
  imgUrl: string;
}>();
</script>

<template>
  <a class="c-ui-card-social" href="#">
    <img
      class="c-ui-card-social__image"
      :src="imgUrl"
      alt=""
    />
  </a>
</template>

<style scoped lang="scss">
.c-ui-card-social {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid var(--gz-blur-white-7);
  background-color: var(--gz-blur-white-3);
  width: 45px;
  min-width: 45px;
  height: 45px;
  &__image {
    filter: grayscale(1);
    width: 15px;
    transition: var(--gz-transition);
  }
  &:hover {
    .c-ui-card-social__image {
      filter: grayscale(0);
    }
  }
}
</style>
