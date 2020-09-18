const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Express boilerplate middleware
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routing
// =============================================
app.use("/api", routes);

// Everything that is not an api request is sent to index.html
// for client side routing.

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));

  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

// Sync sequelize models then start Express app
// =============================================
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("\n*************************************");
    console.log(`${process.env.DB_NAME} database connected`);
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on PORT ${PORT}`);
      console.log("*************************************\n");
    });
  });
