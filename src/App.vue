<template>
  <div :class="containerClass" @click="onWrapperClick">
    <Header />
    <div class="layout-main-container">
      <div class="layout-main">
        <router-view />
      </div>
      <Footer />
    </div>

    <transition name="layout-mask">
      <div
        class="layout-mask p-component-overlay"
        v-if="mobileMenuActive"
      ></div>
    </transition>
  </div>
</template>
<script>
// import Main from "@/views/main/Main.vue";
import Header from "@/views/header/Header.vue";
import Footer from "@/views/footer/Footer.vue";
import { computed } from "vue";
import { activeClassName } from "@/service/sideNavService";
export default {
  components: {
    // Main,
    Header,
    Footer,
  },
  setup() {
    const {
      changeMobileState,
      changeOverMenuState,
      layoutMode,
      staticMenuInactive,
      overlayMenuActive,
      mobileMenuActive,
      changeMobileMenuState,
      checkMenuOnclick,
      changeMenuOnclick,
    } = activeClassName();
    const onWrapperClick = () => {
      if (!checkMenuOnclick.value) {
        changeOverMenuState(false);
        changeMobileState(false);
      }
      changeMenuOnclick(false);
    };
    const containerClass = computed(() => {
      return [
        "layout-wrapper",
        {
          "layout-static": layoutMode.value === "static",
          "layout-overlay": layoutMode.value === "overlay",
          "layout-static-sidebar-inactive":
            staticMenuInactive.value && layoutMode.value === "static",
          "layout-overlay-sidebar-active":
            overlayMenuActive.value && layoutMode.value === "overlay",
          "layout-mobile-sidebar-active": mobileMenuActive.value,
          "p-input-filled": false,
          "p-ripple-disabled": false,
          // "layout-theme-light": false,
        },
      ];
    });
    const showMain = () => {
      changeMobileMenuState();
    };
    return {
      onWrapperClick,
      containerClass,
      showMain,
      mobileMenuActive,
    };
  },
};
</script>


<style lang="scss">
@import './App.scss';
</style>

