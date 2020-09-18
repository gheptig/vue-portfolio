const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../public"),
  devServer: {
    proxy: {
      "/api/newmessage": {
        target: "http://localhost:3000",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
