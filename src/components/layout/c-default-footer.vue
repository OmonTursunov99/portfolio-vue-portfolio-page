<script setup lang="ts">
import CUiCardSocial from "@/components/ui/cards/c-ui-card-social.vue";
import CUiListsUnordered from "@/components/ui/lists/c-ui-lists-unordered.vue";

const aboutTheSite = {
  heading: 'О сайте',
  fields: [
    {href: '#', label: 'Правила'},
    {href: '#', label: 'Оплата'}
  ]
};
const client = {
  heading: 'Клиенту',
  fields: [
    {href: '#', label: 'Агентский договор'},
    {href: '#', label: 'Лицензионное соглашение'},
    {href: '#', label: 'Политика cookie'},
    {href: '#', label: 'Политика конфиденциальности'}
  ]
};
const contacts = {
  heading: 'Контакты',
  fields: [
    {href: '#', label: 'Связаться с нами'},
    {href: '#', label: 'Помощь'}
  ]
};

</script>

<template>
  <footer class="c-default-footer">
    <div class="u-container">
      <div class="c-default-footer__wrapper">
        <div class="c-default-footer__content">
          <a class="c-default-footer__link" href="/">
            <img src="/images/logo.png" alt=""/>
          </a>
          <div class="c-default-footer__socials">
            <c-ui-card-social img-url="/images/facebook.png"/>
            <c-ui-card-social img-url="/images/instagram.png"/>
            <c-ui-card-social img-url="/images/telegram.png"/>
            <c-ui-card-social img-url="/images/youtube.png"/>
            <c-ui-card-social img-url="/images/linkedin.png"/>
          </div>
          <p class="u-text-sm u-text-sm--lh-md u-clr-mute">© 2023 Real Money Trading. Все права защищены</p>
        </div>
        <c-ui-lists-unordered :heading="aboutTheSite.heading" :fields="aboutTheSite.fields"/>
        <c-ui-lists-unordered :heading="client.heading" :fields="client.fields"/>
        <c-ui-lists-unordered :heading="contacts.heading" :fields="contacts.fields"/>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "@/assets/styles/responsive";

.c-default-footer {
  margin-top: 198px;

  &__wrapper {
    border-top: 1px solid var(--gz-blur-mute-20);
    padding: var(--gz-space-xl) 0;
    display: flex;
    align-items: flex-start;
    gap: 140px;

    & > * {
      &:nth-child(2) {
        margin-right: 18px;
        margin-left: auto;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__socials {
    display: flex;
    align-items: center;
    gap: var(--gz-space-2xs);
    margin: 49px 0 50px;
  }

  @include adaptive-laptop {

    &__wrapper {
      padding: var(--gz-space-lg) 0;
      gap: 100px;

      & > * {
        &:nth-child(2) {
          margin-right: 0;
        }
      }
    }

  }
;

  @include adaptive-tablet {
    margin-top: 100px;

    &__wrapper {
      padding: var(--gz-space-sm) 0;
      gap: var(--gz-space-sm);

      & > * {
        &:nth-child(2) {
          margin-right: 0;
        }
      }
    }

  }

  @include adaptive-mobile {
    margin-top: var(--gz-space-lg);

    &__wrapper {
      flex-direction: column;
      gap: var(--gz-space-sm);

      & > * {
        &:nth-child(2) {
          margin-right: 0;
          margin-left: 0;
          margin-top: var(--gz-space-sm);
        }
      }
    }
  }
}
</style>
