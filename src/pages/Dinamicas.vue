<template>
  <div class="title">Dinâmicas</div>
  <div class="row q-mb-xl">
    <ExpansionItem :opcoes="dados" />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { db } from "../../firebaseConfig.js";
import { collection, getDocs, where, query } from "firebase/firestore";
import ExpansionItem from "src/components/ExpansionItem.vue";

export default defineComponent({
  name: "DinamicasPage",

  components: {
    ExpansionItem,
  },

  setup() {
    const dados = ref([]);
    const route = useRoute();
    const valorRecebido = route.params.tematica;

    onMounted(async () => {
      console.log("valorRecebido", valorRecebido);
      const q = query(
        collection(db, "dinamicas"),
        where("tema", "==", valorRecebido)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        dados.value.push({ id: doc.id, ...doc.data() });
        console.log("dados", dados.value);
      });
    });

    return {
      dados,
    };
  },
});
</script>
