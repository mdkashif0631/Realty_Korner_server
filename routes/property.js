import express from 'express';
import upload from '../utils/multerUpload.js';
import {
  addProperty,
  getAllProperties,
  getPropertyByFileName,
  addCommercialProperty,
  getAllCommercialProperties,
  getCommercialPropertyByFileName,
  addPlotProperty,
  getAllPlotProperties
} from '../controllers/propertyController.js';

const Router = express.Router();

Router.post('/properties', upload, addProperty);
Router.get('/properties', getAllProperties);
Router.get('/properties/:projectName', getPropertyByFileName);
Router.post('/commercialproperties', upload, addCommercialProperty);
Router.get('/commercialproperties', getAllCommercialProperties);
Router.get('/commercialproperties/:projectName', getCommercialPropertyByFileName);
Router.post('/plotproperties', upload, addPlotProperty);
Router.get('/plotproperties', getAllPlotProperties);

export default Router;