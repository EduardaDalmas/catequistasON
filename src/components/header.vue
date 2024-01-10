<template>
  <div class="header-menu row">
    <img src="~assets/logo.png" alt="logo" class="logo" />
    <div class="gt-sm">
      <div class="options row">
        <div class="option">
          <a href="/login">Home</a>
        </div>
        <div class="option">
          <a href="/register">Dinâmicas</a>
        </div>
        <div class="option">
          <a href="/register">Orações</a>
        </div>
      </div>
    </div>
    <div class="lt-md">
      <div class="col-md-6 row">
        <q-btn
          class="icon-menu"
          flat
          dense
          round
          @click="drawerRight = !drawerRight"
          icon="menu"
          aria-label="Menu"
        />
      </div>
    </div>
    <q-drawer
      v-if="drawerRight"
      side="right"
      v-model="drawerRight"
      bordered
      class="menu-expansivo"
    >
      <q-scroll-area class="fit">
        <div class="option">
          <a href="/login">Home</a>
        </div>
        <div class="option">
          <a href="/register">Dinâmicas</a>
        </div>
        <div class="option">
          <a href="/register">Orações</a>
        </div>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HeaderPage",

  setup() {
    return {
      drawerRight: ref(false),
    };
  },
});
</script>
