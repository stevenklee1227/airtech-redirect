const express = require('express');
const app = express();

app.use((req, res) => {
  res.redirect(301, 'https://www.airtech.co');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Redirecting all traffic to https://www.airtech.co`);
});
