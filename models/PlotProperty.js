import { Schema, model } from 'mongoose';

const plotPropertySchema = new Schema({
  Id: String,
  Project_type: { type: String, required: true },
  Project_category: { type: String, required: true},
  Project_status: { type: String, required: true},
  Project_tag: { type: String, required: true},

  Project_File_Name: { type: String, required: true },
  Project_Name: { type: String, required: true },
  Developer_Name: { type: String, required: true },
  Developer_Logo: String,
  Description: String,
  Developer_Rera_No: { type: String, required: true },

  State: { type: String, required: true },
  City: { type: String, required: true },
  Location: { type: String, required: true },
  Localities: String,
  Pin_Code: String,

  Super_Area_Plot: String,
  Price_per_sq_Plot: String,
  Total_Price_Plot: String,
  Floor_Plan_Plot: String,

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
  Main_Image: String,

  Built: String,
  Garages: String,
  Mode: String,
  Possession: String,
  Number_of_unit: String,

  Security: String,
  Link: String,
  Amenities: []
}, { timestamps: true });

const PlotProperty = model('PlotProperty', plotPropertySchema);
export default PlotProperty;
