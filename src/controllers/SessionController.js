const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado" });
    }

    return res.json(user);
  },
};
