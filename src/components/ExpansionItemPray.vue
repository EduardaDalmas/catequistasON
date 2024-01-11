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
          <div v-for="opcao in opcao.descricao" :key="opcao">
            {{ opcao }}
            <q-separator class="q-mt-md q-mb-lg" />
          </div>
        </q-card-section>
        <q-img
          v-if="opcao.imagem"
          :src="opcao.imagem"
          :alt="opcao.titulo"
          class="img-design"
        />
        <q-video v-if="opcao.video" class="video-design" :src="opcao.video" />
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExpansionItemPray",

  props: {
    opcoes: {
      type: Array,
      required: true,
    },
  },
});
</script>
