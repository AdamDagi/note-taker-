const express = require('express');
const app = express();
const port = 5500;

app.get('/notes', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

