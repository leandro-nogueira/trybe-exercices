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

const getById = async (req, res, _next) => {
  const { id } = req.params;
  const user = await USER.getById(id);
  if (!user.length) return res.status(404).json({message: 'NOT FOUND'});
  return res.status(200).json(user);
}

const updateUser = async (req, res, _next) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  const verifyId = await USER.getById(id);
  if (!verifyId.length) return res.status(404).json({message: 'NOT FOUND'});
  if (!firstName || !lastName || !email || !password) {
    return res.status(404).json({message: 'Dados obrigatórios'});
  };
  if (password.length < 6) {
    return res.status(404).json({
      message: 'O campo "password" deve ter pelo menos 6 caracteres',
    });
  };

  const updatedUser = await USER.updateUser(id, firstName, lastName, email, password);
  return res.status(201).json(updatedUser);
};

module.exports = {
  createUser,
  getAll,
  getById,
  updateUser,
};
