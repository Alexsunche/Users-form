const express = require('express');
const app = express();
const {UserModel} = require('./mongoose/database');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req,res) => {
  UserModel.find().then(data => res.json(data));
});
app.get('/users', (req,res) => {
  UserModel.find().then(data => res.json(data));
}
);

app.post('/users', (req,res) => {
  const {firstName, lastName, email} = req.body;

  const user = new UserModel({
      firstName,
      lastName,
      email
  });
    user.save();
});

app.delete('/users/:id', (req, res) => {
    UserModel.findById(req.params.id)
    .then(userModel =>{ userModel.remove();
      return UserModel.find();
    })
    .then(model => res.json(model));
});

app.listen(3001, () => {
  console.log('Example app listening on port 3001!')
});
