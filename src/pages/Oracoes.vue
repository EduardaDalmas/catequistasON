<template>
  <div class="title">Orações</div>
  <div class="row q-mb-xl">
    <ExpansionItem :opcoes="dados" />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { db } from "../../firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";
import ExpansionItem from "src/components/ExpansionItemPray.vue";

export default defineComponent({
  name: "OracoesPage",

  components: {
    ExpansionItem,
  },

  setup() {
    const dados = ref([]);

    onMounted(async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "oracoes"));
        querySnapshot.forEach((doc) => {
          dados.value.push({ id: doc.id, ...doc.data() });
        });
      } catch (error) {
        console.error("Erro ao obter dados do Firestore:", error);
      }
    });

    return {
      dados,
    };
  },
});
</script>
