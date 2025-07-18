import { connect, Schema, model } from 'mongoose';
import { readFileSync } from 'fs';

const propertySchema = new Schema({
  project_type: Number,
  id: Number,
  image: String,
  logoimg: String,
  name: String,
  address: String,
  price: String,
  built: String,
  area: String,
  beds: String,
  garages: String,
  mode: String,
  location: String,
  description: String,
  possession: String,
  security: String,
  start_price: String,
  end_price: String,
  link: String
});
const Property = model('Property', propertySchema);

async function importData() {
  await connect('mongodb+srv://mdkashif0631:Kashif123@realtkorner.2ebciuy.mongodb.net/?retryWrites=true&w=majority&appName=RealtKorner', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const data = JSON.parse(readFileSync('./properties.json', 'utf-8'));
  await Property.insertMany(data);
  console.log('📦 Data imported!');
  process.exit();
}

importData();
