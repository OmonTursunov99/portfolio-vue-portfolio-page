<script setup lang="ts">
import { useDeals } from "@/composables/deals/useDeals";
import CUiContentPageIntro from "@/components/ui/content/c-ui-content-page-intro.vue";
import CLogicTab from "@/components/logic/tab/c-logic-tab.vue";
import CLogicTable from "@/components/logic/table/c-logic-table.vue";

const deals = useDeals();
</script>

<template>
  <section class="page-deals">
    <c-ui-content-page-intro heading="Сделки" />
    <c-logic-tab
      :fields="deals.listsDealQuery.value"
      :active="deals.activeDealQuery.value"
      @change:query="deals.changeDealQuery"
    />
    <transition>
      <div :key="deals.activeDealQuery.value.value">
        <c-logic-table
          v-if="deals.activeDealQuery.value.value === 'sales'"
          :fields="[]"
          :body="[]"
        />
        <c-logic-table
          v-if="deals.activeDealQuery.value.value === 'purchases'"
          :fields="deals.tableFields"
          :body="deals.tableBody.value"
        />
      </div>
    </transition>
  </section>
</template>

<style scoped lang="scss">
.page-deals {
  width: 100%;
}
</style>
