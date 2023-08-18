import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { keyBy, type Dictionary } from "lodash";
import dashboard from "@/assets/svg/dashboard.svg";
import plus from "@/assets/svg/plus.svg";
import comment from "@/assets/svg/comment.svg";
import userMini from "@/assets/svg/user-mini.svg";
import { platform } from "@/helper/core";

export interface RouteList {
  icon: any;
  label: string;
  id: number;
  routeName: string;
}
export interface RouteFields extends RouteList {
  active: boolean;
}


export function useGzRoutes() {
  const router = useRouter();

  const routes = ref<RouteList[]>([
    {
      icon: dashboard,
      label: 'Сделки',
      id: 1,
      routeName: "Deals"
    },
    {
      icon: plus,
      label: 'Объявления',
      id: 2,
      routeName: "Announcements"
    },
    {
      icon: comment,
      label: 'Отзывы',
      id: 3,
      routeName: "Reviews"
    },
    {
      icon: userMini,
      label: 'Редактировать профиль',
      id: 4,
      routeName: "UserUpdate"
    }
  ]);
  let bannerHeight = platform() ? 47 : 60;
  console.info("platform()", platform());

  const routesIndexingByRouteName = computed<Dictionary<RouteList>>(() => {
    return keyBy(routes.value, 'routeName');
  });
  const routeActive = computed<RouteList>(() => {
    return routesIndexingByRouteName.value[router.currentRoute.value.name as string];
  });
  const routeFields = computed<RouteFields[]>(() => {
    return routes.value.map(r => {
      return {
        ...r,
        active: routeActive.value.id === r.id
      };
    });
  });
  const bannerTopPosition = computed<string>(() => `${bannerHeight * (routeActive.value.id - 1)}px`);

  return {
    routeFields,
    bannerTopPosition
  };
}
