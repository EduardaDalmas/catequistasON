<template>
  <div class="header-menu row">
    <img src="~assets/logo.png" alt="logo" class="logo" />
    <div class="gt-sm">
      <div class="options row">
        <div class="option">
          <a href="/">Home</a>
        </div>
        <div class="option">
          <a href="/#/tematicas">Dinâmicas</a>
        </div>
        <div class="option">
          <a href="/#/oracoes">Orações</a>
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
          <a href="/">Home</a>
        </div>
        <div class="option">
          <a href="/#/tematicas">Dinâmicas</a>
        </div>
        <div class="option">
          <a href="/#/oracoes">Orações</a>
        </div>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { db } from "../../firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";

export default defineComponent({
  name: "HeaderPage",

  setup() {
    const dados = ref([]);

    onMounted(async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "temas"));
        querySnapshot.forEach((doc) => {
          dados.value.push({ id: doc.id, ...doc.data() });
        });
      } catch (error) {
        console.error("Erro ao obter dados do Firestore:", error);
      }
    });

    return {
      drawerRight: ref(false),
      dados,
    };
  },
});
</script>
