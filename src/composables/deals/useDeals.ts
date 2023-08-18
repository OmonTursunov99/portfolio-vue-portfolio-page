import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { keyBy, type Dictionary } from "lodash";
import { type SalesData, useDealsStore } from "@/stores/deals";
import { dateFormat } from "@/helper/datetime";

export interface DealQuery {
  value: string;
  label: string;
}

export type TableFiled = {
  key: string;
  name: string;
}
export interface TableBody extends SalesData {
  changedDate: string;
}

export function useDeals() {
  const router = useRouter();
  const dealsStore = useDealsStore();

  const listsDealQuery = ref<DealQuery[]>([
    {
      value: 'purchases',
      label: 'Покупки'
    },
    {
      value: 'sales',
      label: 'Продажи'
    }
  ]);

  const tabDealQueryIndexingByValue = computed<Dictionary<DealQuery>>(() => {
    return keyBy(listsDealQuery.value, 'value');
  });
  const activeDealQuery = computed<DealQuery>(() => {
    const tab = router.currentRoute.value.query.tab;
    if (!tab) {
      return listsDealQuery.value[0];
    }
    return tabDealQueryIndexingByValue.value[tab as string];
  });

  function changeDealQuery(value: string) {
    router.replace({
      ...router.currentRoute.value,
      query: {
        tab: value
      }
    });
  }

  const tableFields = [
    {key: 'id', name: '#'},
    {key: 'date', name: 'Дата'},
    {key: 'type', name: 'Тип'},
    {key: 'name', name: 'Наименование'},
    {key: 'seller', name: 'Продавец'},
    {key: 'status', name: 'Статус'},
    {key: 'price', name: 'Цена'}
  ];
  const tableBody = computed<TableBody[]>(() => {
    return  dealsStore.sales.map((s: SalesData) => {
      return {
        ...s,
        changedDate: dateFormat(s.date, 'dd.MM.yyyy HH:mm')
      };
    });
  });

  return {
    activeDealQuery,
    listsDealQuery,
    changeDealQuery,

    tableFields,
    tableBody
  };
}
