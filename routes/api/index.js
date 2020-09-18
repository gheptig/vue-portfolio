const router = require("express").Router();
const db = require("../../models");

router.post("/newmessage", (req, res) => {
  console.log(req.body.name);
  console.log(req.body.email);
  console.log(req.body.note);
  db.Message.create({
    name: req.body.name,
    email: req.body.email,
    note: req.body.note,
  })
    .then((result) => {
      console.log("Message added successfully");
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/newmessage", (req, res) => {
  db.Message.findAll({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
