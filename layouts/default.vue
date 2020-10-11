<template>
  <v-app light>
    <v-main>
      <Navbar />
      <v-container fluid>
        <nuxt />
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>
<script>
export default {
  created() {
    if (this.$i18n.locale === 'ar') {
      this.$vuetify.rtl = true
    } else {
      this.$vuetify.rtl = false
    }
  },
}
</script>
