<template>
    <AppTopbar @menu-toggle="onMenuToggle" />
  <div class="layout-sidebar" @click="onSidebarClick">
    <SideNav :model="menu" @menuitem-click="onMenuItemClick" />
  </div>
</template>
<script>
import SideNav from "@/views/main/sideNav/SideNav.vue";
import AppTopbar from "@/views/main/sideNav/AppTopbar.vue";
import SideNavData from "@/data/SideNavData.json";
import { activeClassName } from "@/composables/sideNav";
import { menuOnClick } from "@/composables/menuCheck";
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

    return {
      onMenuItemClick,
      menu: SideNavData.menu,
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
