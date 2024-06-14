// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Set up the server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Listen on port 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});