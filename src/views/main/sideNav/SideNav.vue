<template>
  <div class="layout-menu-container">
    <AppSubmenu
      :items="model"
      class="layout-menu"
      :root="true"
      @menuitem-click="onMenuItemClick"
    />
    <address style="color: #757575">
      Copyright © 2021 All rights reserved.<br />KORFINHOLDINGS CO., LTD
    </address>
  </div>
</template>

<script>
import AppSubmenu from "./AppSubmenu";
import { getCurrentInstance } from "vue";
export default {
  props: {
    model: Array,
  },
  components: {
    AppSubmenu,
  },
  setup() {
    const {emit} = getCurrentInstance();
    const onMenuItemClick = (event) => {
      emit("menuitem-click", event);
    };
    return {
      onMenuItemClick,
    };
  },
  computed: {
    darkTheme() {
      return this.$appState.darkTheme;
    },
  },
};
</script>