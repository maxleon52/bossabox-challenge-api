const Tool = require("../models/Tool");

module.exports = {
  // Lista TODOS
  async index(req, res) {
    const tools = await Tool.find();

    return res.status(200).json(tools);
  },

  // Lista UM
  async show(req, res) {
    const { tag } = req.query;
    const tools = await Tool.find({ tags: tag });

    return res.status(200).json(tools);
  },

  // Cria UM
  async store(req, res) {
    const { title, link, description, tags } = req.body;

    let tool = await Tool.findOne({ title });

    if (tool) {
      return res.status(401).json({
        message: "Já existe uma ferramenta cadastrada com esse nome.",
      });
    }
    const { id } = await Tool.create({ title, link, description, tags });

    return res.status(201).json({ title, link, description, tags, id });
  },

  //Atualiza UM
  async update(req, res) {
    try {
      const tool = await Tool.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
      });
      console.log(tool);
      return res.json(tool);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  //Deletar UM
  async destroy(req, res) {
    try {
      const { _id } = req.params;
      const response = await Tool.findByIdAndDelete({ _id: _id });
      return res
        .status(204)
        .json({ message: "Ferramenta deletado com sucesso!" });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
