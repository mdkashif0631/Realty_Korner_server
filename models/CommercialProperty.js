import { Schema, model } from 'mongoose';

const commercialPropertySchema = new Schema({
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

  Meeting_Room: String,
  Cabins: String,
  Work_Station: String,
  No_Seat_WS: String,
  Private_Pantry: String,
  Wash_Rooms: String,
  Super_Area_Commercial: String,
  Carpet_Area_Commercial: String,
  Built_Up_Area_Commercial: String,
  Price_per_sq_Commercial: String,
  Total_Price_Commercial: String,
  Floor_Plan_Commercial: String,

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

const CommercialProperty = model('CommercialProperty', commercialPropertySchema);
export default CommercialProperty;
