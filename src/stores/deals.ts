import { defineStore } from "pinia";
import { ref } from "vue";

export interface SalesData {
  id: number;
  date: string;
  type: string;
  name: string;
  seller: string;
  status: {
    label: string;
    variant: "success" | "info" | "warning" | "danger";
  };
  price: number;
}

export const useDealsStore = defineStore('dealsStore', () => {
  const sales = ref<SalesData[]>([
    {
      id: 1229,
      date: '2023-08-11T16:28:57.409+05:00',
      type: 'Золото',
      name: 'Золото',
      seller: 'GoldTrade',
      status: {
        label: "Выполнен",
        variant: "success"
      },
      price: 80
    },
    {
      id: 1230,
      date: '2023-08-11T16:28:57.409+05:00',
      type: 'Золото',
      name: 'Золото',
      seller: 'GoldTrade',
      status: {
        label: "Оплачен",
        variant: "warning"
      },
      price: 80
    },
    {
      id: 1500,
      date: '2023-08-11T16:28:57.409+05:00',
      type: 'Золото',
      name: 'Золото',
      seller: 'GoldTrade',
      status: {
        label: "Подтвержден",
        variant: "info"
      },
      price: 80
    },
    {
      id: 1234,
      date: '2023-08-11T16:28:57.409+05:00',
      type: 'Золото',
      name: 'Золото',
      seller: 'GoldTrade',
      status: {
        label: "Отклонен",
        variant: "danger"
      },
      price: 80
    },
  ]);

  return {
    sales
  };
});
