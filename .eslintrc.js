module.exports = {
  // ... 기존 설정
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".vue", ".json"],
      },
    },
  },
};
