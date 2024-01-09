<template>
  <q-parallax>
    <template v-slot:media>
      <img src="~assets/capa.png" class="imagem_tema">
    </template>

    <template v-slot:content="scope">
      <div

        :style="{
          top: (scope.percentScrolled * 60) + '%',
          left: 0,
          right: 0
        }"
      >
      <div class="text-overlay">“Deixem vir a mim as <span class="highlight"><b>crianças</b></span>, não as impeçam,
        pois o Reino de Deus pertence aos que são
        semelhantes a elas”. - Marcos 10, 14</div>
      </div>
    </template>
  </q-parallax>

  <div class="sesion">

  </div>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})

</script>
