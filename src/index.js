import express from 'express';
import mongoDBConnect from './database/db.js'
import cors from 'cors'
import router from './controllers/controllers.js'

const app = express();

app.use(cors());
app.use(express.json({ extended : false }));
app.use('/api',router);

const port = process.env.PORT || 3000;

mongoDBConnect();

app.listen(port);


