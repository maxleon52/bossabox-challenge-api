const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

mongoose.connect(
  "mongodb+srv://bossabox:bossabox@cluster-syszona-ibh2w.mongodb.net/bossabox-api?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const app = express();
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");

app.use(cors());
app.use(express.json());
app.use(routes);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(3333);
