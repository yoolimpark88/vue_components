module.exports = {
  devServer: {
    port: 8081,
  },
  css: {
    loaderOptions: {
      sass: {
        //additionalData: `@import "@/style/scss/abstracts/variables.scss";`,
        sassOptions: {
          quietDeps: true,
          quietDeprecationWarnings: true,
        },
      },
    },
  },
};
