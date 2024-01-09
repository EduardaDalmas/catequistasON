<template>
  <q-parallax :height="600">
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
      <div class="text-overlay">“Deixem vir a mim as <span class="highlight">crianças</span>, não as impeçam,
        pois o Reino de Deus pertence aos que são
        semelhantes a elas”. - Marcos 10, 14</div>
      </div>
    </template>
  </q-parallax>

  <div class="sesion">
    <div class="title row">
      Apresentação
    </div>
    <div class="text row">
      Seja bem-vindo(a) ao site do projeto &nbsp; <span class="highlight">CatequistasON</span>
      Hoje em dia, tudo está conectado, e a catequese não pode ficar de fora.
      Em um mundo onde tudo compete para atrair a atenção das crianças e adolescentes, uma catequese dinâmica e atrativa é fundamental para que os catequizandos se interessem e se envolvam com a catequese.<br>
      Este projeto trás ideias de atividades relacionadas aos temas trabalhados nas catequeses, que podem ser utilizadas pelos catequistas em suas catequeses, e também por pais e responsáveis em casa, para que a catequese não se restrinja apenas ao encontro semanal, mas que seja vivenciada no dia a dia.<br>
    </div>
  </div>
  <q-separator class="separator-design" />
  <div class="sesion">
    <div class="title row">
      Apresentação
    </div>
    <div class="text row">
      Seja bem-vindo(a) ao site do projeto &nbsp; <span class="highlight">CatequistasON</span>
      Hoje em dia, tudo está conectado, e a catequese não pode ficar de fora.
      Em um mundo onde tudo compete para atrair a atenção das crianças e adolescentes, uma catequese dinâmica e atrativa é fundamental para que os catequizandos se interessem e se envolvam com a catequese.<br>
      Este projeto trás ideias de atividades relacionadas aos temas trabalhados nas catequeses, que podem ser utilizadas pelos catequistas em suas catequeses, e também por pais e responsáveis em casa, para que a catequese não se restrinja apenas ao encontro semanal, mas que seja vivenciada no dia a dia.<br>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})

</script>
