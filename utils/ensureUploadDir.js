import fs from 'fs';
import path from 'path';

const ensureUploadDir = () => {
  const imgDir = path.join(path.resolve(), 'uploads');
  if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
    console.log('📁 uploads directory created');
  } else {
    console.log('📁 uploads directory already exists');
  }
};

export default ensureUploadDir;
