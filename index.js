const express = require('express');

const app = express();
const port = process.env.PORT || 3000
const router = require('./router.js');

app.use(express.json());
app.use(router);

app.listen(port, () =>
console.log(`Example app listening at http://localhost:${port}`));