process.env.VUE_APP_H5PACK_TIME = `${new Date().getTime()}`;

module.exports = {
  // https://cli.vuejs.org/config/#pages
  pages: {
    index: {
      entry: "src/main.tsx"
    }
  },
  /// https://cli.vuejs.org/zh/guide/css.html#css-modules
  css: {
    loaderOptions: {
      css: {
        localsConvention: "camelCaseOnly"
      }
    }
  },
  publicPath: ""
};
