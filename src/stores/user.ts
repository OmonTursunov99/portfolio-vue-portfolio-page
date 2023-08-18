import { defineStore } from "pinia";
import { computed, ref } from "vue";

export interface UserInfo {
  username: string;
  online: boolean;
  registeredAt: string;
  rate: number;
  reviews: number;
  deals: number;
}

export const useUserStore = defineStore('userStore', () => {
  const user = ref<UserInfo>({
    username: "Ivan_Mazepa",
    online: true,
    registeredAt: '2023-08-11T16:28:57.409+05:00',
    rate: 2,
    reviews: 0,
    deals: 0
  });

  const profile = computed<UserInfo>(() => user.value);

  return {
    profile,
  };
});
