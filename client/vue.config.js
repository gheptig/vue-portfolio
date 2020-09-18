// const path = require("path");

module.exports = {
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
