const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/multer");

const ToolController = require("./controllers/ToolController");
const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();
const upload = multer(uploadConfig);

// TESTE
routes.get("/teste", (req, res) => {
  return res.send("Servidor rodando!");
});

// Tools
routes.get("/tools", ToolController.index);
routes.get("/tools-search", ToolController.show);
routes.post("/tools", upload.single("file"), ToolController.store);
routes.put("/tools/:_id", ToolController.update);
routes.delete("/tools/:_id", ToolController.destroy);

// Users
routes.post("/signup", UserController.store);

// Sessions
routes.post("/signin", SessionController.store);

module.exports = routes;
