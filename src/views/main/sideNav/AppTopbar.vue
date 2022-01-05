<template>
  <div class="layout-topbar">
    <div class="layout-topbar-logo flex flex-row">
      <router-link to="/">
        <img :src="headerLogo.src" :alt="headerLogo.alt" />
      </router-link>
      <p class="text-xl">Jeff Kim</p>
    </div>
    <button
      class="p-link layout-menu-button layout-topbar-button"
      @click="onMenuToggle"
    >
      <i class="pi pi-bars"></i>
    </button>
    <ul class="text-3xl font-bold">
      <li>{{ menuOnClickNow }}</li>
    </ul>

    <button
      class="p-link layout-topbar-menu-button layout-topbar-button"
      v-styleclass="{
        selector: '@next',
        enterClass: 'hidden',
        enterActiveClass: 'scalein',
        leaveToClass: 'hidden',
        leaveActiveClass: 'fadeout',
        hideOnOutsideClick: true,
      }"
    >
      <i class="pi pi-ellipsis-v"></i>
    </button>
    <ul class="layout-topbar-menu hidden lg:flex origin-top">
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-calendar"></i>
          <span>Events</span>
        </button>
      </li>
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-cog"></i>
          <span>Settings</span>
        </button>
      </li>
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-user"></i>
          <span>Profile</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import { menuOnClick } from "@/service/menuCheckService";
export default {
  setup() {
    const { menuOnClickNow } = menuOnClick();
    const { emit } = getCurrentInstance();
    const onMenuToggle = (event) => {
      emit("menu-toggle", event);
    };
    return {
      headerLogo: {
        src: require("@/assets/images/512.png"),
        // src: require("@/assets/images/KORFINHOLDINGS.png"),
        // src: require('@/assets/images/logo_white_w.svg'),
        alt: "totalwallet_logo",
      },
      onMenuToggle,
      menuOnClickNow,
    };
  },
};
</script>