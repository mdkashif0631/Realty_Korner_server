import multer from 'multer';
import path from 'path';
import fs from 'fs';

const imgDir = path.join(path.resolve(), 'uploads');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, imgDir),
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage }).fields([
  { name: 'Developer_Logo' },
  { name: 'Image' },
  { name: 'Image01' },
  { name: 'Image02' },
  { name: 'Image03' },
  { name: 'Image04' },
  { name: 'Main_Image' },
  { name: 'Floor_Plan_2bhk' },
  { name: 'Floor_Plan_3bhk' },
  { name: 'Floor_Plan_4bhk' },
  { name: 'Floor_Plan_5bhk' },
  { name: 'Floor_Plan_Penthouse' },
  { name: 'Floor_Plan_Plot' },
  { name: 'Floor_Plan_Commercial' },
  { name: 'Master_Plan' },
  { name: 'Location_Map' },
  { name: 'Google_Map' },
]);

export default upload;