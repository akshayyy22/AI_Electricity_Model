import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const demandSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  month_name: {
    type: String,
    required: true,
    enum: [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
  },
  unrestricted_demand: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const Demand = mongoose.model('Demand', demandSchema);

export default Demand;