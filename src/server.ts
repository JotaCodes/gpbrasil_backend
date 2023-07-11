require('dotenv/config');
const express = require('express');



import { Request, Response, Router } from 'express';
import path from 'path';
const cors = require('cors');
const bodyParser = require('body-parser');
const formidable = require('express-formidable');
const app = express();

app.use(formidable());
app.use(bodyParser.json());
app.use(express.json());
const corsOpts = {
  origin: '*',

  methods: ['GET', 'POST'],

  allowedHeaders: ['Content-Type'],
};

app.use(cors());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(express.static('public'));

const router = Router();

app.use(router);
app.use(express.json());

router.get('/', (req: Request, res: Response) => {
  res.send('Home Page');
});
router.get('/public/assets/:imagename', (req: any, res: any) => {
  const imagename = req.params.imagename;
  res.sendFile(path.join(process.env.IMAGE_LOCALE + imagename));
});


app.listen(3333, () => 'server running on port 3333');
