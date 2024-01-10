<template>
  <div class="footer row gt-sm">
    <div class="col-4 col-md-4">
      <div class="row sesion-medias">
        <ButtonSocialMedia :medias="medias" />
      </div>
    </div>
    <div class="col-4 col-md-4">
      <div>
        <div class="text-footer">CatequistasON 2024</div>
        <div class="text-footer">Desenvolvido por Eduarda Dalmás</div>
      </div>
    </div>
    <div class="col-4 col-md-4">
      <img src="~assets/logo.png" alt="logo" class="logo" />
    </div>
  </div>
  <div class="footer-mobile lt-md">
    <div class="col">
      <div class="row justify-center">
        <div class="text-footer">CatequistasON 2024</div>
      </div>
      <div class="row justify-center">
        <div class="text-footer">Desenvolvido por Eduarda Dalmás</div>
      </div>
    </div>
    <div class="col text-center">
      <div class="row justify-center">
        <img src="~assets/logo.png" alt="logo" class="logo" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ButtonSocialMedia from "../components/ButtonSocialMedia.vue";

export default defineComponent({
  name: "FooterPage",

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
        link: "https://www.instagram.com/catequistason/",
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
