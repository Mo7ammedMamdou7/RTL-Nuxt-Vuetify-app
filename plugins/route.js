export default ({ app }) => {
  app.router.afterEach((to, from) => {
    if (app.i18n.locale === 'ar') {
      app.vuetify.framework.rtl = true
    } else {
      app.vuetify.framework.rtl = false
    }
  })
}
