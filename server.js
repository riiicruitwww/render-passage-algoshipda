const express = require('express');
const path = require('path');

const app = express();

const fs = require('fs');

const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, './task_container.json'), 'utf-8'));

app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(express.json());

app.get('/', (req, res) => {
  res.redirect('/index.html');
});

app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(process.env.PORT || 80, () => {
  console.log('run');
});
