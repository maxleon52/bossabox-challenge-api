const express = require("express");
const ToolController = require("./controllers/ToolController");
const routes = express.Router();

// TESTE
routes.get("/teste", (req, res) => {
  return res.send("Servidor rodando!");
});

routes.get("/tools", ToolController.index);
routes.get("/tools", ToolController.show);
routes.post("/tools", ToolController.store);
routes.put("/tools/:_id", ToolController.update);
routes.delete("/tools/:_id", ToolController.destroy);

module.exports = routes;
