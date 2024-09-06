import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const seasonalDemandSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  season: {
    type: String,
    required: true,
    enum: ['Spring', 'Summer', 'Fall', 'Winter'],
  },
  unrestricted_demand: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const SeasonalDemand = mongoose.model('SeasonalDemand', seasonalDemandSchema);

export default SeasonalDemand;
