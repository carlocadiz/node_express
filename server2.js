const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('<h1>Hellooooo</h1>')
  next();
})

app.get('/', (req, res) => {
  res.send('getting root');
})

app.get('/profile', (req, res) => {
  res.send('getting profile');
})

app.delete('/', (req, res) => {
  const user = {
    name: 'sally',
    hobby: 'soccer'
  }

  res.send(user);
})
app.listen(3000);