const connection = require('./connection');

const createUser = async (firstName, lastName, email, password) => {
  const [newUser] = await connection.execute(
  `INSERT INTO users (first_name, last_name, email, password)
    VALUES (?, ?, ?, ?);`,
    [firstName, lastName, email, password],
);

return {
  id: newUser.insertId,
  firstName,
  lastName,
  email,
};
};

const getAll = async() => { 
  const [users] = await connection.execute(
    `SELECT id, first_name, last_name, email FROM users;`
  );
  console.log(users)
    return users;
};

const getById = async (id) => {
  const [user] = await connection.execute(
    `SELECT id, first_name, last_name, email
      FROM users
      WHERE id = ?;`, [id],
  );
  return user;
};

module.exports = {
  createUser,
  getAll,
  getById,
}