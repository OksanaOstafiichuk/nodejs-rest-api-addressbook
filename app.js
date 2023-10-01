const express = require('express');
const cors = require('cors');
// const db = require('./server');
const usersRouters = require('./routes/users');
const addressesRouters = require('./routes/addresses');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', usersRouters);
app.use('/addresses', addressesRouters);

app.use((req, res) => {
  res.status(404).json({ message: 'Page with this url was not found' })
})

app.listen(3000, () => console.log('App listening on port 3000'));