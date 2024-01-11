<template>
  <div
    class="option-dynamics col-4"
    v-for="opcao in opcoes"
    :key="opcao"
    @click="selection(opcao.valor)"
  >
    <a>{{ opcao.nome }}</a>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonOption",

  props: {
    opcoes: {
      type: Array,
      required: true,
    },
  },

  methods: {
    selection(valor) {
      this.$emit("valor", valor);
    },
  },
});
</script>
