module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:vue/recommended"],
  plugins: ["vue"],
  env: {
    node: true,
  },
  // // 또는
  // globals: {
  //   process: true,
  // },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".vue", ".json"],
      },
    },
  },
};
