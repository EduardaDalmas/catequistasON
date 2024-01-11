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
        <div v-if="opcao.imagem">
          <q-img
            v-if="opcao.imagem"
            :src="opcao.imagem"
            :alt="opcao.titulo"
            class="img-design"
          />
        </div>

        <iframe
          class="video-design"
          :src="opcao.video"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
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
