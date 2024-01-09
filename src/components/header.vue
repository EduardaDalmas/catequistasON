<template>
  <div class="header-menu row">
    <img src="~assets/logo.png" alt="logo" class="logo" />
    <div class="options row">
      <div class="option">
        <a href="/login">home</a>
      </div>
      <div class="option">
        <a href="/register">Dinâmicas</a>
      </div>
      <div class="option">
        <a href="/register">Contato</a>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderPage',
})
</script>
