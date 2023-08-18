<script setup lang="ts">
import type { TableBody, TableFiled } from "@/composables/deals/useDeals";
import CUiContentChips from "@/components/ui/content/c-ui-content-chips.vue";

defineProps<{
  fields: TableFiled[];
  body: TableBody[];
}>();
</script>

<template>
  <div class="c-ui-table-mobile">
    <table
      v-for="b in body"
      :key="b.id"
      class="c-ui-table-mobile__table"
      :class="{'c-ui-table-mobile__clr-mute': b.status.variant === 'danger'}"

    >
      <tr>
        <th class="c-ui-table-mobile__th" colspan="1">
          <div class="c-ui-table-mobile__flex">
            <p class="u-clr-mute u-text-xs" style="height: 17px"></p>
            <p class="u-text-xs"># {{ b.id }}</p>
          </div>
        </th>
        <th class="c-ui-table-mobile__th" colspan="1">
          <div class="c-ui-table-mobile__flex">
            <p class="u-clr-mute u-text-xs">Дата</p>
            <p class="u-text-xs">{{ b.changedDate }}</p>
          </div>
        </th>
        <th class="c-ui-table-mobile__th" colspan="1">
          <div class="c-ui-table-mobile__flex">
            <p class="u-clr-mute u-text-xs">Тип</p>
            <p class="u-text-xs" :class="{'u-clr-primary': b.status.variant !== 'danger'}">{{ b.type }}</p>
          </div>
        </th>
        <th class="c-ui-table-mobile__th" colspan="2">
          <div class="c-ui-table-mobile__flex">
            <p class="u-clr-mute u-text-xs">Наименование</p>
            <div class="c-ui-table-mobile__flex c-ui-table-mobile__flex--row">
              <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.7246 0.295219C9.65402 0.115673 9.4967 0 9.32308 0H5.67618C5.50242 0 5.34501 0.115872 5.27452 0.295651C4.90029 1.25009 3.67298 4.37755 3.67298 4.37755H11.327C11.327 4.37755 10.1893 1.47749 9.7246 0.295219Z" fill="#FF9839"/>
                <path d="M14.9622 9.05062C14.9622 9.05062 13.8922 6.32394 13.5184 5.37245H8.51938C8.23931 6.08642 7.50003 7.97056 7.50003 7.97056C7.16022 7.10443 6.82023 6.23841 6.48009 5.37245H1.48102C1.19833 6.09309 0.0378275 9.05065 0.0378275 9.05065C-0.0225534 9.20453 -0.0100436 9.38252 0.0710208 9.52369C0.152085 9.66484 0.290718 9.75 0.439458 9.75H14.5605C14.7093 9.75 14.8479 9.66484 14.929 9.52369C15.01 9.38252 15.0226 9.20453 14.9622 9.05062Z" fill="#FF9839"/>
              </svg>

              <p class="u-text-xs" :class="{'u-clr-primary': b.status.variant !== 'danger'}">{{ b.name }}</p>
            </div>
          </div>
        </th>
      </tr>
      <tr>
        <th class="c-ui-table-mobile__th c-ui-table-mobile__th--end">
          <div class="c-ui-table-mobile__flex">
            <p class="u-clr-mute u-text-xs">Продавец</p>
            <p class="u-text-xs">{{ b.seller }}</p>
          </div>
        </th>
        <th class="c-ui-table-mobile__th c-ui-table-mobile__th--end">
          <div class="c-ui-table-mobile__flex">
            <p class="u-clr-mute u-text-xs">Статус</p>
            <c-ui-content-chips :label="b.status.label" :variant="b.status.variant"/>
          </div>
        </th>
        <th class="c-ui-table-mobile__th c-ui-table-mobile__th--end">
          <div class="c-ui-table-mobile__flex">
            <p class="u-clr-mute u-text-xs">Цена</p>
            <p class="u-text-xs">
              {{ b.price }}
              <span class="u-text-2xs u-text-xs--semibold u-clr-mute">KZT</span>
            </p>
          </div>
        </th>
        <th class="c-ui-table-mobile__th c-ui-table-mobile__th--end">
          <div class="c-ui-table-mobile__flex">
            <p class="u-clr-mute u-text-xs"></p>
            <p class="u-text-xs"></p>
          </div>
        </th>
      </tr>
    </table>
  </div>
</template>

<style scoped lang="scss">
.c-ui-table-mobile {
  display: flex;
  flex-direction: column;
  gap: var(--gz-space-2xs);
  margin-top: var(--gz-space-sm);

  &__table {
    width: 100%;
    border-spacing: 0;
    border-collapse: separate;
    padding: 0 var(--gz-space-xs);
    background-color: var(--gz-blur-white-3);
    border: 1px solid var(--gz-blur-white-7);
    backdrop-filter: blur(10px);
    border-radius: var(--gz-space-sm);
  }

  &__flex {
    display: flex;
    flex-direction: column;
    gap: var(--gz-space-2xs);

    &--row {
      flex-direction: row;
      align-items: center;
    }
  }

  &__th {
    text-align: left;
    padding: var(--gz-space-xs) 0;

    &--end {
      border-top: 1px solid var(--gz-blur-white-7);
    }
  }

  &__clr-mute {
    th {
      color: var(--gz-clr-mute) !important;
      svg {
        path {
          fill: var(--gz-clr-mute);
        }
      }
    }
  }
}
</style>
