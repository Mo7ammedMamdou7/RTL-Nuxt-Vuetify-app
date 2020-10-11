<template>
  <v-app-bar flat color="primary">
    <v-toolbar-title class="white--text">LOGO</v-toolbar-title>
    <v-spacer></v-spacer>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="navbar-link"
      >{{ locale.name }}</nuxt-link
    >
  </v-app-bar>
</template>
<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
<style>
.navbar-link {
  background-color: transparent;
  border-width: 0;
  color: #fff !important;
  font-weight: bold;
  text-decoration: none;
}
.navbar-link:hover,
.navbar-link:focus,
.navbar-link:active {
  background: transparent;
  text-decoration: underline;
  box-shadow: none;
  border-radius: 0;
}
</style>
