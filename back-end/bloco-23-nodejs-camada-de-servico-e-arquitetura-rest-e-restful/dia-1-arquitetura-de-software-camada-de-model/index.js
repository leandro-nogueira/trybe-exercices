const express = require('express');
// require('dotenv').config();
const USER = require('./controllers/userController');
// const bodyParser = require('body-parser');
const app = express();
app.use(express.json());

const PORT = process.env.PORT|| 3000;

app.post('/user', USER.createUser);
app.get('/user', USER.getAll);
app.get('/user/:id', USER.getById);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});