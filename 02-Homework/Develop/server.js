const express = require('express');
const path = require('path');

const PORT = process.env.port || 3001;

app.use(express.json());

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
