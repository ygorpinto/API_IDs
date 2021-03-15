const express = require('express');
const mongoDBConnect = require('./database/index')

const app = express();

app.use(express.json({ extended : false }));
app.use('/api',require('./controllers/index'));

mongoDBConnect();
const port = process.env.PORT || 3000;
app.listen(port);


