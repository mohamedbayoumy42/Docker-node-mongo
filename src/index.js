const express = require('express');
const PORT = 4000;
const app = express();
app.get('/', (req, res) => res.send('<h1> Hello Bayoumy hi!hi!prod!<h1>'));
app.listen(PORT, () => console.log(`app is running on port: ${PORT}`));