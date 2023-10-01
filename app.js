const express = require('express');
const db = require('./server');
const usersRouters = require('./routes/users');

const app = express();
app.use(express.json());

app.use('/users', usersRouters);


app.listen(3000, () => console.log('App listening on port 3000'));