<template>
  <q-parallax class="imagem_tema">
    <template v-slot:media>
      <img src="~assets/capa.png" />
    </template>

    <template v-slot:content="scope">
      <div
        :style="{
          top: scope.percentScrolled * 60 + '%',
          left: 0,
          right: 0,
        }"
      >
        <div class="text-overlay">
          “Deixem vir a mim as <span class="highlight">crianças</span>, não as
          impeçam, pois o Reino de Deus pertence aos que são semelhantes a
          elas”. - Marcos 10, 14
        </div>
      </div>
    </template>
  </q-parallax>

  <div class="sesion">
    <div class="title row">Apresentação</div>
    <div class="text row">
      Seja bem-vindo(a) ao site do projeto &nbsp;
      <span class="highlight">CatequistasON</span> Hoje em dia, tudo está
      conectado, e a catequese não pode ficar de fora. Em um mundo onde tudo
      compete para atrair a atenção das crianças e adolescentes, uma catequese
      dinâmica e atrativa é fundamental para que os catequizandos se interessem
      e se envolvam com a catequese.<br />
      Este projeto trás ideias de atividades relacionadas aos temas trabalhados
      nas catequeses, que podem ser utilizadas pelos catequistas em suas
      catequeses, e também por pais e responsáveis em casa, para que a catequese
      não se restrinja apenas ao encontro semanal, mas que seja vivenciada no
      dia a dia.<br />
    </div>
  </div>
  <q-separator class="separator-design" />
  <div class="sesion row gt-sm">
    <div class="col-4 col-md-6">
      <img
        src="~assets/eduarda.png"
        class="imagem_eduarda"
        alt="Eduarda Dalmás"
      />
      <div class="textName">Eduarda Brisch Dalmás</div>
      <div class="row sesion-medias">
        <ButtonSocialMedia :medias="medias" />
      </div>
    </div>
    <div class="col-4 col-md-6">
      <div class="title">Quem sou eu?</div>
      <div class="text">
        Olá, eu sou a &nbsp; <b> Eduarda Dalmás!</b> Catequista da Diocese de
        Novo Hamburgo desde 2021. Trabalho com desenvolvimento web e sempre tive
        o sonho de colocar este projeto em prática para ajudar os catequistas e
        catequizandos a terem uma catequese mais dinâmica e atrativa.<br />
        Me inspirei muito no Beato Carlo Acutis, que também desenvolveu projetos
        de evangelização na internet, e como ele mesmo dizia:
        <span class="highlight"
          ><i>"Estar com Jesus, este é o meu plano de vida"</i>.</span
        >
        Beato Carlo Acutis, rogai por nós.
      </div>
    </div>
  </div>
  <div class="lt-md">
    <div>
      <img
        src="~assets/eduarda.png"
        class="imagem_eduarda"
        alt="Eduarda Dalmás"
      />
      <div class="textName">Eduarda Brisch Dalmás</div>
      <div class="row sesion-medias">
        <ButtonSocialMedia :medias="medias" />
      </div>
    </div>
    <div>
      <div class="title">Quem sou eu?</div>
      <div class="text">
        Olá, eu sou a &nbsp; <b> Eduarda Dalmás!</b> Catequista da Diocese de
        Novo Hamburgo desde 2021. Trabalho com desenvolvimento web e sempre tive
        o sonho de colocar este projeto em prática para ajudar os catequistas e
        catequizandos a terem uma catequese mais dinâmica e atrativa.<br />
        Me inspirei muito no Beato Carlo Acutis, que também desenvolveu projetos
        de evangelização na internet, e como ele mesmo dizia:
        <span class="highlight"
          ><i>"Estar com Jesus, este é o meu plano de vida"</i>.</span
        >
        Beato Carlo Acutis, rogai por nós.
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ButtonSocialMedia from "../components/ButtonSocialMedia.vue";

export default defineComponent({
  name: "IndexPage",

  components: {
    ButtonSocialMedia,
  },

  setup() {
    let medias = [
      {
        icon: "lab la-linkedin-in",
        link: "https://www.linkedin.com/in/eduarda-dalmas/",
      },
      {
        icon: "lab la-github",
        link: " https://github.com/EduardaDalmas",
      },
      {
        icon: "lab la-instagram",
        link: "https://www.instagram.com/eduardadalmas/",
      },
      {
        icon: "lab la-facebook-f",
        link: "https://www.facebook.com/eduarda.dalmas",
      },
      {
        icon: "mail_outline",
        link: "du.dalmas@hotmail.com",
      },
    ];

    return {
      medias,
    };
  },
});
</script>
