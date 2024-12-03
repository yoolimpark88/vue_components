module.exports = {
  devServer: {
    port: 8081,
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          quietDeps: true,
          quietDeprecationWarnings: true,
        },
      },
    },
  },
};
