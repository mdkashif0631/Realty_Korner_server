import Property from '../models/Property.js';
import CommercialProperty from '../models/CommercialProperty.js';
import PlotProperty from '../models/PlotProperty.js';
// import { groupAmenitiesByCategory } from '../utils/groupAmenity.js';
// import { groupAmenitiesByCategory } from '../utils/groupAmenity.js';




// ------------------- Residential -------------------
export const addProperty = async (req, res) => {
  try {
    const formData = req.body;
    const files = req.files;

    const property = new Property({
      Project_type: formData.Project_type,
      Project_category: formData.Project_category,
      Project_status: formData.Project_status,
      Project_tag: formData.Project_tag,
      Id: formData.Id,
      Project_File_Name: formData.Project_File_Name,
      Project_Name: formData.Project_Name,
      Developer_Name: formData.Developer_Name,
      Developer_Logo: files.Developer_Logo?.[0]?.filename || '',
      Description: formData.Description,
      Developer_Rera_No: formData.Developer_Rera_No,

      State: formData.State,
      City: formData.City,
      Location: formData.Location,
      Localities: formData.Localities,
      Pin_Code: formData.Pin_Code,

      Beds_2bhk: formData.Beds_2bhk,
      Super_Area_2bhk: formData.Super_Area_2bhk,
      Carpet_Area_2bhk: formData.Carpet_Area_2bhk,
      Built_Up_Area_2bhk: formData.Built_Up_Area_2bhk,
      Price_per_sq_2bhk: formData.Price_per_sq_2bhk,
      Total_Price_2bhk: formData.Total_Price_2bhk,
      Floor_Plan_2bhk: files.Floor_Plan_2bhk?.[0]?.filename || '',

      Beds_3bhk: formData.Beds_3bhk,
      Super_Area_3bhk: formData.Super_Area_3bhk,
      Carpet_Area_3bhk: formData.Carpet_Area_3bhk,
      Built_Up_Area_3bhk: formData.Built_Up_Area_3bhk,
      Price_per_sq_3bhk: formData.Price_per_sq_3bhk,
      Total_Price_3bhk: formData.Total_Price_3bhk,
      Floor_Plan_3bhk: files.Floor_Plan_3bhk?.[0]?.filename || '',

      Beds_4bhk: formData.Beds_4bhk,
      Super_Area_4bhk: formData.Super_Area_4bhk,
      Carpet_Area_4bhk: formData.Carpet_Area_4bhk,
      Built_Up_Area_4bhk: formData.Built_Up_Area_4bhk,
      Price_per_sq_4bhk: formData.Price_per_sq_4bhk,
      Total_Price_4bhk: formData.Total_Price_4bhk,
      Floor_Plan_4bhk: files.Floor_Plan_4bhk?.[0]?.filename || '',

      Beds_5bhk: formData.Beds_5bhk,
      Super_Area_5bhk: formData.Super_Area_5bhk,
      Carpet_Area_5bhk: formData.Carpet_Area_5bhk,
      Built_Up_Area_5bhk: formData.Built_Up_Area_5bhk,
      Price_per_sq_5bhk: formData.Price_per_sq_5bhk,
      Total_Price_5bhk: formData.Total_Price_5bhk,
      Floor_Plan_5bhk: files.Floor_Plan_5bhk?.[0]?.filename || '',

      Penthouse: formData.Penthouse,
      Super_Area_Penthouse: formData.Super_Area_Penthouse,
      Carpet_Area_Penthouse: formData.Carpet_Area_Penthouse,
      Built_Up_Area_Penthouse: formData.Built_Up_Area_Penthouse,
      Price_per_sq_Penthouse: formData.Price_per_sq_Penthouse,
      Total_Price_Penthouse: formData.Total_Price_Penthouse,
      Floor_Plan_Penthouse: files.Floor_Plan_Penthouse?.[0]?.filename || '',

      Master_Plan: files.Master_Plan?.[0]?.filename || '',
      Location_Map: files.Location_Map?.[0]?.filename || '',
      Google_Map: files.Google_Map?.[0]?.filename || '',
      End_price: formData.End_price,
      Start_price: formData.Start_price,

      Image: files.Image?.[0]?.filename || '',
      Image01: files.Image01?.[0]?.filename || '',
      Image02: files.Image02?.[0]?.filename || '',
      Image03: files.Image03?.[0]?.filename || '',
      Image04: files.Image04?.[0]?.filename || '',
      Main_Image: files.Main_Image?.[0]?.filename || '',

      Built: formData.Built,
      Garages: formData.Garages,
      Mode: formData.Mode,
      Possession: formData.Possession,
      Number_of_unit: formData.Number_of_unit,

      Security: formData.Security,
      Link: formData.Link,
      Amenities: JSON.parse(formData.Amenities || '[]')
      // Amenities: groupAmenitiesByCategory(JSON.parse(formData.Amenities || '[]'))
    });

    await property.save();
    res.status(201).json({ message: 'Property added successfully' });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Failed to add property' });
  }
};

export const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    console.error("Error fetching properties:", err);
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
};

export const getPropertyByFileName = async (req, res) => {
  try {
    const property = await Property.findOne({ Project_Name: req.params.projectName });
    if (!property) return res.status(404).json({ message: 'Project not found' });
    res.json(property);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch property' });
  }
};

// ------------------- Commercial -------------------
export const addCommercialProperty = async (req, res) => {
  try {
    const formData = req.body;
    const files = req.files;

    const commercial = new CommercialProperty({
      Id: formData.Id,
      Project_type: formData.Project_type,
      Project_category: formData.Project_category,
      Project_status: formData.Project_status,
      Project_tag: formData.Project_tag,
      Project_File_Name: formData.Project_File_Name,
      Project_Name: formData.Project_Name,
      Developer_Name: formData.Developer_Name,
      Developer_Logo: files.Developer_Logo?.[0]?.filename || '',
      Description: formData.Description,
      Developer_Rera_No: formData.Developer_Rera_No,
      State: formData.State,
      City: formData.City,
      Location: formData.Location,
      Localities: formData.Localities,
      Pin_Code: formData.Pin_Code,
      Meeting_Room: formData.Meeting_Room,
      Cabins: formData.Cabins,
      Work_Station: formData.Work_Station,
      No_Seat_WS: formData.No_Seat_WS,
      Private_Pantry: formData.Private_Pantry,
      Wash_Rooms: formData.Wash_Rooms,
      Super_Area_Commercial: formData.Super_Area_Commercial,
      Carpet_Area_Commercial: formData.Carpet_Area_Commercial,
      Built_Up_Area_Commercial: formData.Built_Up_Area_Commercial,
      Price_per_sq_Commercial: formData.Price_per_sq_Commercial,
      Total_Price_Commercial: formData.Total_Price_Commercial,
      Floor_Plan_Commercial: files.Floor_Plan_Commercial?.[0]?.filename || '',
      Master_Plan: files.Master_Plan?.[0]?.filename || '',
      Location_Map: files.Location_Map?.[0]?.filename || '',
      Google_Map: files.Google_Map?.[0]?.filename || '',
      End_price: formData.End_price,
      Start_price: formData.Start_price,
      Image: files.Image?.[0]?.filename || '',
      Image01: files.Image01?.[0]?.filename || '',
      Image02: files.Image02?.[0]?.filename || '',
      Image03: files.Image03?.[0]?.filename || '',
      Image04: files.Image04?.[0]?.filename || '',
      Main_Image: files.Main_Image?.[0]?.filename || '',
      Built: formData.Built,
      Garages: formData.Garages,
      Mode: formData.Mode,
      Possession: formData.Possession,
      Number_of_unit: formData.Number_of_unit,
      Security: formData.Security,
      Link: formData.Link,
      Amenities: JSON.parse(formData.Amenities || '[]')
      // if sent as JSON string
    });

    await commercial.save();
    res.status(201).json({ message: 'Commercial property added successfully' });
  } catch (err) {
    console.error('Commercial Upload error:', err);
    res.status(500).json({ error: 'Failed to add commercial property' });
  }
};

export const getAllCommercialProperties = async (req, res) => {
  try {
    const properties = await CommercialProperty.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch commercial properties' });
  }
};

export const getCommercialPropertyByFileName = async (req, res) => {
  try {
    const properties = await CommercialProperty.findOne({ Project_Name: req.params.projectName });
    if (!properties) return res.status(404).json({ message: 'Project not found' });
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch property' });
  }
};

// ------------------- Plot -------------------
export const addPlotProperty = async (req, res) => {
  try {
    const formData = req.body;
    const files = req.files;

    const plot = new PlotProperty({
      Id: formData.Id,
      Project_type: formData.Project_type,
      Project_category: formData.Project_category,
      Project_status: formData.Project_status,
      Project_tag: formData.Project_tag,
      Project_File_Name: formData.Project_File_Name,
      Project_Name: formData.Project_Name,
      Developer_Name: formData.Developer_Name,
      Developer_Logo: files.Developer_Logo?.[0]?.filename || '',
      Description: formData.Description,
      Developer_Rera_No: formData.Developer_Rera_No,
      State: formData.State,
      City: formData.City,
      Location: formData.Location,
      Localities: formData.Localities,
      Pin_Code: formData.Pin_Code,
      Super_Area_Plot: formData.Super_Area_Plot,
      Price_per_sq_Plot: formData.Price_per_sq_Plot,
      Total_Price_Plot: formData.Total_Price_Plot,
      Floor_Plan_Plot: files.Floor_Plan_Plot?.[0]?.filename || '',
      Master_Plan: files.Master_Plan?.[0]?.filename || '',
      Location_Map: files.Location_Map?.[0]?.filename || '',
      Google_Map: files.Google_Map?.[0]?.filename || '',
      End_price: formData.End_price,
      Start_price: formData.Start_price,
      Image: files.Image?.[0]?.filename || '',
      Image01: files.Image01?.[0]?.filename || '',
      Image02: files.Image02?.[0]?.filename || '',
      Image03: files.Image03?.[0]?.filename || '',
      Image04: files.Image04?.[0]?.filename || '',
      Main_Image: files.Main_Image?.[0]?.filename || '',
      Built: formData.Built,
      Garages: formData.Garages,
      Mode: formData.Mode,
      Possession: formData.Possession,
      Number_of_unit: formData.Number_of_unit,
      Security: formData.Security,
      Link: formData.Link,
      Amenities: JSON.parse(formData.Amenities || '[]')
    });

    await plot.save();
    res.status(201).json({ message: 'Plot property added successfully' });
  } catch (err) {
    console.error('Plot Upload error:', err);
    res.status(500).json({ error: 'Failed to add plot property' });
  }
};

export const getAllPlotProperties = async (req, res) => {
  try {
    const plots = await PlotProperty.find();
    res.json(plots);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch plot properties' });
  }
};
