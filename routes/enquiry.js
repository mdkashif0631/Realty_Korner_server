import express from 'express';
import { addEnquiry, getAllEnquiry } from '../controllers/enquiryController.js';


const router = express.Router();

router.post('/enquiries', addEnquiry);
router.get('/enquiries', getAllEnquiry);

export default router;
