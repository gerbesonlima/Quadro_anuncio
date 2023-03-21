const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage });

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/upload', upload.array('pdfs', 5), function(req, res) {
  res.send('Arquivos enviados com sucesso!');
});

app.listen(3000, function () {
  console.log('Servidor rodando na porta 3000');
});
