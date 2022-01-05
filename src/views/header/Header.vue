<template>
    <AppTopbar @menu-toggle="onMenuToggle" />
  <div class="layout-sidebar" @click="onSidebarClick">
    <SideNav :model="menu" @menuitem-click="onMenuItemClick" />
  </div>
</template>
<script>
import SideNav from "@/views/main/sideNav/SideNav.vue";
import AppTopbar from "@/views/main/sideNav/AppTopbar.vue";
// import SideNavData from "@/data/SideNavData.json";
import SideDB from "@/api/sideNavDB.js";
import { activeClassName } from "@/service/sideNavService";
import { menuOnClick } from "@/service/menuCheckService";
import { ref } from '@vue/reactivity';
export default {
  components: {
    SideNav,
    AppTopbar,
  },
  setup() {
    const {
      containerClass,
      changeMobileMenuState,
      changeStaticMenuInactive,
      layoutMode,
      mobileMenuActive,
      changeOverlayMenuState,
      changeOverMenuState,
      changeMobileState,
      changeMenuOnclick,
    } = activeClassName();

    const {
      checkOnMenu
    } = menuOnClick();

    const onMenuToggle = (event) => {
      changeMenuOnclick(true);
      if (window.innerWidth >= 992) {
        if (layoutMode.value === "overlay") {
          if (mobileMenuActive.value === true) {
            changeOverMenuState(true);
          }
          changeOverlayMenuState();
          changeMobileState(false);
        } else if (layoutMode.value === "static") {
          changeStaticMenuInactive();
        }
      } else {
        changeMobileMenuState();
      }
      event.preventDefault();
    };
    const onSidebarClick = () => {
      changeMenuOnclick(true);
    };

    const onMenuItemClick = (event) => {
      if (event.item && !event.item.items) {
        checkOnMenu(event.item.label);
        changeOverMenuState(false);
        changeMobileState(false);
      }
    };
    const SideN = ref([]);
    const SideNavonDB = async () => {
      let res;
            //비동기 처리 끝나는 지점 체크 await
      res = await SideDB.get('menu');
      SideN.value = res.data;
    };
    SideNavonDB();
    
    return {
      onMenuItemClick,
      // menu: SideNavData.menu,
      menu:SideN,
      containerClass,
      onMenuToggle,
      onSidebarClick,
    };
  },
};
</script>

<style lang="scss">
@import "@/App.scss";
</style>
