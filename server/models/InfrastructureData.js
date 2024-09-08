import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);


const infrastructureSchema = new mongoose.Schema({
  Year: {
    type: String,
    required: true
  },
  Domestic: {
    type: Number,
    required: true
  },
  Commercial: {
    type: Number,
    required: true
  },
  Industrial: {
    type: Number,
    required: true
  },
  Street_Lighting: {
    type: Number,
    required: true
  },
  Others: {
    type: Number,
    required: true
  },
  Total: {
    type: Number,
    required: true
  }
}, {
  timestamps: true 
});

const Infrastructure = mongoose.model('Infrastructure', infrastructureSchema);

export {Infrastructure};
