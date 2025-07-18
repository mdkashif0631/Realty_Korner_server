import { Schema, model } from 'mongoose';




const propertySchema = new Schema({
  Project_type: { type: String, required: true},
  Project_category: { type: String, required: true},
  Project_status: { type: String, required: true},
  Project_tag: { type: String, required: true},
  Id: String,
  Project_File_Name: { type: String, required: true },
  Project_Name: { type: String, required: true },
  Developer_Name: { type: String, required: true },
  Developer_Logo: String,
  Description: String,
  Developer_Rera_No: { type: String, required: true },

  // Address
  State: { type: String, required: true },
  City: { type: String, required: true },
  Location: { type: String, required: true },
  Localities: { type: String },
  Pin_Code: { type: String },

  // Features for various BHK types
  Beds_2bhk: String,
  Super_Area_2bhk: String,
  Carpet_Area_2bhk: String,
  Built_Up_Area_2bhk: String,
  Price_per_sq_2bhk: String,
  Total_Price_2bhk: String,
  Floor_Plan_2bhk: String,

  Beds_3bhk: String,
  Super_Area_3bhk: String,
  Carpet_Area_3bhk: String,
  Built_Up_Area_3bhk: String,
  Price_per_sq_3bhk: String,
  Total_Price_3bhk: String,
  Floor_Plan_3bhk: String,

  Beds_4bhk: String,
  Super_Area_4bhk: String,
  Carpet_Area_4bhk: String,
  Built_Up_Area_4bhk: String,
  Price_per_sq_4bhk: String,
  Total_Price_4bhk: String,
  Floor_Plan_4bhk: String,

  Beds_5bhk: String,
  Super_Area_5bhk: String,
  Carpet_Area_5bhk: String,
  Built_Up_Area_5bhk: String,
  Price_per_sq_5bhk: String,
  Total_Price_5bhk: String,
  Floor_Plan_5bhk: String,

  Penthouse: String,
  Super_Area_Penthouse: String,
  Carpet_Area_Penthouse: String,
  Built_Up_Area_Penthouse: String,
  Price_per_sq_Penthouse: String,
  Total_Price_Penthouse: String,
  Floor_Plan_Penthouse: String,

  Master_Plan: String,
  Location_Map: String,
  Google_Map: String,
  End_price: String,
  Start_price: String,

  Image: String,
  Image01: String,
  Image02: String,
  Image03: String,
  Image04: String,
  Main_Image: { type: String, required: true},

  Built: String,
  Garages: String,
  Mode: String,
  Possession: String,
  Number_of_unit: String,

  Security: String,
  Link: String,
  Amenities: []
});

const Property = model('Property', propertySchema);
export default Property;
