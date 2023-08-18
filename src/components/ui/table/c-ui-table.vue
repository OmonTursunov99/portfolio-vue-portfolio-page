<script setup lang="ts">
import type { TableBody, TableFiled } from "@/composables/deals/useDeals";
import CUiContentChips from "@/components/ui/content/c-ui-content-chips.vue";

defineProps<{
  fields: TableFiled[];
  body: TableBody[];
}>();
</script>

<template>
  <table class="c-ui-table">
    <tr>
      <th
        v-for="f in fields"
        :key="f.key"
        class="u-clr-mute u-text-xs c-ui-table__th"
      >
        {{ f.name }}
      </th>
    </tr>
    <tr
      v-for="b in body"
      :key="b.id"
      :class="{'c-ui-table__clr-mute': b.status.variant === 'danger'}"
    >
      <td class="c-ui-table__td">
        <div class="c-ui-table__flex u-text-xs">
          # {{ b.id }}
        </div>
      </td>
      <td class="c-ui-table__td">
        <div class="c-ui-table__flex u-text-xs">
          {{ b.changedDate }}
        </div>
      </td>
      <td class="c-ui-table__td">
        <div class="c-ui-table__flex u-text-xs" :class="{'u-clr-primary': b.status.variant !== 'danger'}">
          {{ b.type }}
        </div>
      </td>
      <td class="c-ui-table__td">
        <div class="c-ui-table__flex u-text-xs">
          <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.7246 0.295219C9.65402 0.115673 9.4967 0 9.32308 0H5.67618C5.50242 0 5.34501 0.115872 5.27452 0.295651C4.90029 1.25009 3.67298 4.37755 3.67298 4.37755H11.327C11.327 4.37755 10.1893 1.47749 9.7246 0.295219Z" fill="#FF9839"/>
            <path d="M14.9622 9.05062C14.9622 9.05062 13.8922 6.32394 13.5184 5.37245H8.51938C8.23931 6.08642 7.50003 7.97056 7.50003 7.97056C7.16022 7.10443 6.82023 6.23841 6.48009 5.37245H1.48102C1.19833 6.09309 0.0378275 9.05065 0.0378275 9.05065C-0.0225534 9.20453 -0.0100436 9.38252 0.0710208 9.52369C0.152085 9.66484 0.290718 9.75 0.439458 9.75H14.5605C14.7093 9.75 14.8479 9.66484 14.929 9.52369C15.01 9.38252 15.0226 9.20453 14.9622 9.05062Z" fill="#FF9839"/>
          </svg>

          <p class="u-text-xs" :class="{'u-clr-primary': b.status.variant !== 'danger'}">{{ b.name }}</p>
        </div>
      </td>
      <td class="c-ui-table__td">
        <div class="c-ui-table__flex u-text-xs">
          {{ b.seller }}
        </div>
      </td>
      <td class="c-ui-table__td">
        <div class="c-ui-table__flex u-text-xs">
          <c-ui-content-chips :label="b.status.label" :variant="b.status.variant" />
        </div>
      </td>
      <td class="c-ui-table__td">
        <div class="c-ui-table__flex u-text-xs">
          <p>
            {{ b.price }}
            <span class="u-text-2xs u-text-xs--semibold u-clr-mute">KZT</span>
          </p>
        </div>
      </td>
    </tr>
  </table>
</template>

<style scoped lang="scss">
.c-ui-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;

  &__th {
    padding: 20px 20px 10px;
    text-align: left;
  }

  &__td {
    padding: 21px 20px 24px;
    backdrop-filter: blur(10px);
    background-color: var(--gz-blur-white-3);
    border-top: 1px solid var(--gz-blur-white-7);
    border-bottom: 1px solid var(--gz-blur-white-7);

    &:first-child {
      border-left: 1px solid var(--gz-blur-white-7);
      border-radius: 20px 0 0 20px;
    }

    &:last-child {
      border-right: 1px solid var(--gz-blur-white-7);
      border-radius: 0 20px 20px 0;
    }
  }

  &__flex {
    display: flex;
    align-items: center;
    gap: var(--gz-space-2xs);
  }

  &__clr-mute {
    td {
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
