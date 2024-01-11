<template>
  <q-list
    bordered
    class="rounded-borders list-design"
    v-for="opcao in opcoes"
    :key="opcao.id"
  >
    <q-expansion-item
      group="somegroup"
      class="expansion-item q-pb-lg"
      :label="opcao.titulo"
      :caption="'Clique para ver mais'"
    >
      <q-card>
        <q-separator class="separator-design" />
        <q-card-section class="textName">
          {{ opcao.descricao }}
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExpansionItem",

  props: {
    opcoes: {
      type: Array,
      required: true,
    },
  },
});
</script>
