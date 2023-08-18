<script setup lang="ts">
import { computed } from "vue";
import { platform } from "@/helper/core";
import CUiTable from "@/components/ui/table/c-ui-table.vue";
import CUiTableMobile from "@/components/ui/table/c-ui-table-mobile.vue";
import type { TableBody, TableFiled } from "@/composables/deals/useDeals";

const props = defineProps<{
  fields: TableFiled[];
  body: TableBody[];
}>();

const empty = computed<boolean>(() => !props.body.length);
const bind = computed<any>(() => {
  if (platform()) {
    return CUiTableMobile;
  }
  return CUiTable;
});
</script>

<template>
  <div class="c-logic-table">
    <p v-if="empty" class="u-text-md u-text-md--bold u-mt-lg">Список пуст ...</p>
    <component
      v-else
      :is="bind"
      :fields="fields"
      :body="body"
    />
  </div>
</template>

<style scoped lang="scss">
.c-logic-table {

}
</style>
