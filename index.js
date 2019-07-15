const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors({ origin: "*" }));
app.get("/", (req, res) => res.status(200).json("Hello world"));

app.get("/abc/:ib", (req, res) => {
  res.status(200).json(req.params);
});

app.listen(8000)
