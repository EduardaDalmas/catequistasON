<template>
  <div class="title center">
    Selecione a temática para visualizar as dinâmicas disponíveis
  </div>
  <div class="row q-mb-xl">
    <ButtonOption :opcoes="dados" @valor="receberValor" />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { db } from "../../firebaseConfig.js";
import { collection, getDocs, where, query } from "firebase/firestore";
import ButtonOption from "src/components/ButtonOption.vue";

export default defineComponent({
  name: "TematicasPage",

  components: {
    ButtonOption,
  },

  methods: {
    receberValor(valor) {
      this.valorRecebido = valor;
      this.$router.push(`/dinamicas/${valor}`);
      // this.buscaDinamicas(this.valorRecebido);
    },
  },

  setup() {
    const dados = ref([]);
    const dinamicas = ref([]);
    const valorRecebido = ref("");

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

    const buscaDinamicas = async () => {
      const q = query(
        collection(db, "dinamicas"),
        where("tema", "==", valorRecebido.value)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        dinamicas.value.push({ id: doc.id, ...doc.data() });
        console.log("dinamicas", dinamicas.value);
      });
    };

    return {
      dados,
      valorRecebido,
      buscaDinamicas,
    };
  },
});
</script>
