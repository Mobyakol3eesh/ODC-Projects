const express = require('express');
const app = express();

const registerRouter = require('./routes/registerRoute');
const loginRouter = require('./routes/loginRoute');
const mongoose = require('mongoose');
const cookies = require('cookie-parser');
const auth = require('./middleware/auth');
const taskMangerRouter = require('./routes/taskmangerRoute');
app.listen(3000, () => {
  console.log('Server is running on port 3000');
  
});

app.use(express.json());
app.use(cookies());

app.use('/register',registerRouter);
app.use('/login',loginRouter);
app.use('/task',taskMangerRouter)
mongoose.connect('mongodb://localhost:27017/admin');
