const User = require("../models/User");

module.exports = {
  async store(req, res) {
    try {
      const { name, email } = req.body;

      let existUser = await User.findOne({ email });

      if (existUser) {
        return res.status(401).json({
          message: "Este e-mail já está cadastrado, use outro.",
        });
      } else {
        const response = await User.create({ name, email });
        return res.status(201).json(response);
      }
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  },
};
