<template>
  <div class="title">Dinâmicas</div>
  <div class="row q-mb-xl">
    <ButtonOption :opcoes="dados" />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { db } from "../../firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";
import ButtonOption from "src/components/ButtonOption.vue";

export default defineComponent({
  name: "DinamicasPage",

  components: {
    ButtonOption,
  },

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
      dados,
    };
  },
});
</script>
