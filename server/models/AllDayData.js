import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const allDayDataSchema = new mongoose.Schema({
  date: {
    type: String, 
    required: true
  },
  time: {
    type: String, 
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  import_from_the_grid: {
    type: Number,
    required: true
  },
  schedule_from_the_grid: {
    type: Number,
    required: true
  },
  'od-ud': {
    type: Number, 
    required: true
  },
  demand_med: {
    type: Number,
    required: true
  },
  shedding: {
    type: Number, 
    required: true
  },
  unrestricted_demand: {
    type: Number,
    required: true
  },
  datetime: {
    type: String, 
    required: true
  },
  month: {
    type: Number,
    required: true
  }
});

const AllDayData = mongoose.model('AllDayData', allDayDataSchema);

export {AllDayData };
