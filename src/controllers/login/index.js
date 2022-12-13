const login = async (req, res) => {
  try {
    const user = req.body;
    if (!user) throw new Error("No se Envio Usuario");
    if (user.usuario != "Usuario") throw new Error("no coincide el usuario");
    if (user.contraseña != "Password")
      throw new Error("no conincide la Password");
    return res.status(200).json({
      data: user,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: "Usuario no Encontrado " + error,
    });
  }
};

module.exports = {
  login,
};
