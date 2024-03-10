const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/api/world', (req, res) => {
  const inputValue = req.body.value;
  console.log('Received message from client:', inputValue);
  const responseMessage = `I received your POST request. This is what you sent me: ${inputValue}`;
  res.send(responseMessage);
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

