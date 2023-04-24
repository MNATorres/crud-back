const express = require("express");
const userSchema = require("../models/user");
const cors = require('cors');

const app = express();
app.use(cors());



const router = express.Router();

//create user (crear usuario)
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all user (obtener los usuarios)
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get a user (obtener un usuario)
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update a user (actualizar un usuario)
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete a user (eliminar un usuario)
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
      .findOneAndDelete({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;
