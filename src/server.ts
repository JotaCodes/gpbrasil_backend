require('dotenv/config');
const express = require('express');

const AccountController = require('./controllers/AccountController')
const CategoryController = require('./controllers/CategoryController')
const DifferentialsController = require('./controllers/DifferentialsController')

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


router.get('/api/v1/account/detail/', AccountController.detail);
router.get('/api/v1/account/list/', AccountController.list);
router.put('/api/v1/account/edit/', AccountController.edit);
router.delete('/api/v1/account/delete/', AccountController.delete);
router.post('/api/v1/account/register/', AccountController.register);
router.post('/api/v1/differentialsAdd/register/', AccountController.differentials);
router.delete('/api/v1/differentialsremove/delete/', AccountController.differentialsRemove);


router.get('/api/v1/category/detail/:id', CategoryController.detail);
router.get('/api/v1/category/list/', CategoryController.list);
router.put('/api/v1/category/edit/:id', CategoryController.edit);
router.delete('/api/v1/category/delete/:id', CategoryController.delete);
router.post('/api/v1/category/register/', CategoryController.register);

router.get('/api/v1/differentials/detail/:id', DifferentialsController.detail);
router.get('/api/v1/differentials/list/', DifferentialsController.list);
router.put('/api/v1/differentials/edit/:id', DifferentialsController.edit);
router.delete('/api/v1/differentials/delete/:id', DifferentialsController.delete);
router.post('/api/v1/differentials/register/', DifferentialsController.register);

app.listen(3333, () => 'server running on port 3333');
