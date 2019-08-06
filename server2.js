const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app,use(bodyParser.json());
app.use((req, res, next) => {
  console.log('<h1>Hellooooo</h1>')
  next();
})

app.get('/', (req, res) => {
  req.query
  req.body
  req.header
  req.params
  res.send('getting root');
})

// app.get('/profile', (req, res) => {
//   res.send('getting profile');
// })

// app.post('/', (req, res) => {
//   const user = {
//     name: 'sally',
//     hobby: 'soccer'
//   }

//   res.send(user);
// })
app.listen(3000);