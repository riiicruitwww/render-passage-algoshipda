const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(express.json());

app.get('/', (req, res) => {
  res.redirect('/index.html');
});

app.listen(process.env.PORT || 80, () => {
  console.log('run');
});
