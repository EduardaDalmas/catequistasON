<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderPage></HeaderPage>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <FooterPage></FooterPage>
</template>

<script>
import { defineComponent, ref } from "vue";
import HeaderPage from "src/components/header.vue";
import FooterPage from "src/components/footer.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    HeaderPage,
    FooterPage,
  },

  setup() {},
});
</script>
