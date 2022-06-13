module.exports = {
  module: {
    rules: [
      {
        test: /\.(vtt)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
};
