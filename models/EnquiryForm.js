import { Schema, model } from 'mongoose';

const enquirySchema = new Schema({
  Project_Name: String,
  fullName: String,
  email: String,
  phone_number: String,
  message: String
});

const Enquiry = model('Enquiry', enquirySchema);
export default Enquiry;
