const express = require('express');
const cors = require('cors');

const usersRouter = require('./routes/api/users');
const addressesRouter = require('./routes/api/addresses');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/users', usersRouter);
app.use('/api/addresses', addressesRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Page with this url was not found' })
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));