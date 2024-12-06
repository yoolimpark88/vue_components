module.exports = {
  devServer: {
    port: 8081,
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@use "@/style/scss/abstracts/variables" as *;`,
        sassOptions: {
          quietDeps: true,
          quietDeprecationWarnings: true,
        },
      },
    },
  },
};
