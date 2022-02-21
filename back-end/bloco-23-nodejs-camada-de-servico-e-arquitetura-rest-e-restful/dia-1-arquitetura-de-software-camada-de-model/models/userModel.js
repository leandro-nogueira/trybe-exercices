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
}

module.exports = {
  createUser,
  getAll,
}