const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

mongoose.connect(
  "mongodb+srv://bossabox:bossabox@cluster-syszona-ibh2w.mongodb.net/bossabox-api?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(process.env.PORT || 3333);
