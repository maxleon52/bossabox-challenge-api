const Tool = require("../models/Tool");
const User = require("../models/User");

module.exports = {
  // Lista TODOS
  async index(req, res) {
    const tools = await Tool.find();

    return res.status(200).json(tools);
  },

  // Lista UM
  async show(req, res) {
    try {
      const { tag } = req.query;
      const tools = await Tool.find({ tags: new RegExp(tag, "i") });
      console.log(tools);

      if (tools.length <= 0) {
        return res
          .status(200)
          .json({ message: "Não existe nenhuma ferramenta com esse nome" });
      }

      return res.status(200).json(tools);
    } catch (error) {}
  },

  // Cria UM
  async store(req, res) {
    try {
      const { filename } = req.file;
      const { title, link, description, tags } = req.body;
      const { user_id } = req.headers;

      // // Verifica se User está logado
      const user = await User.findById(user_id);

      if (!user) {
        return res.status(400).json({ message: "Usuário não logado!" });
      }

      // Verifica se já existe uma ferramenta cadastrada com o nome informado
      let tool = await Tool.findOne({ title });
      if (tool) {
        return res.status(401).json({
          message: "Já existe uma ferramenta cadastrada com esse nome.",
        });
      }

      // Cadastra nova ferramenta
      tool = await Tool.create({
        user: user_id,
        file: filename,
        tags: tags.split(",").map((tag) => tag.trim()),
        title,
        link,
        description,
      });
      return res.status(201).json(tool);
    } catch (error) {
      return res.status(401).json({ error: error });
    }
  },

  //Atualiza UM
  async update(req, res) {
    try {
      const tool = await Tool.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
      });
      return res.status(201).json(tool);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  //Deletar UM
  async destroy(req, res) {
    try {
      const { _id } = req.params;

      await Tool.findByIdAndDelete({ _id: _id });
      return res.status(204);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
