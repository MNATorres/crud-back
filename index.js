const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();


const userRoutes = require("./src/routes/user");

const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use('/api', userRoutes);

//routes
app.get("/", (req, res) => {
  res.send("Welcome to mi app");
});

//mongodb conection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MONGODB Atlas"))
  .catch((error) => console.error(error));

app.listen(9000, () => console.log("serverlistening on port", port));
