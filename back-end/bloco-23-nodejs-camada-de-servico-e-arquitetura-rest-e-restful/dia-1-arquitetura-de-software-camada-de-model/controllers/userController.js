const USER = require('../models/userModel');

const createUser = async (req, res, _next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(404).json({message: 'Dados obrigatórios'});
  };
  if (password.length < 6) {
    return res.status(404).json({
      message: 'O campo "password" deve ter pelo menos 6 caracteres',
    });
  };

  const newUser = await USER.createUser(firstName, lastName, email, password); 
  
  return res.status(201).json(newUser);
};

const getAll = async (_req, res, _next) => { 
  const list = await USER.getAll();
  return res.status(200).json(list);
};

module.exports = {
  createUser,
  getAll,
};
