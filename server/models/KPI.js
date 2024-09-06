import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const maxDemandOfEveryMonthSchema = new Schema({
  month_name: {
    type: String,
    required: true,
  },
  unrestricted_demand: {
    type: Number,
    required: true,
  },
});

const maxDemandOfEveryYearSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  unrestricted_demand: {
    type: Number,
    required: true,
  },
});

const maxDemandOfEachMonthEveryYearSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  month_name: {
    type: String,
    required: true,
  },
  unrestricted_demand: {
    type: Number,
    required: true,
  },
});

const MaxDemandOfEveryMonth = mongoose.model(
  "MaxDemandOfEveryMonth",
  maxDemandOfEveryMonthSchema
);
const MaxDemandOfEveryYear = mongoose.model(
  "MaxDemandOfEveryYear",
  maxDemandOfEveryYearSchema
);
const MaxDemandOfEachMonthEveryYear = mongoose.model(
  "MaxDemandOfEachMonthEveryYear",
  maxDemandOfEachMonthEveryYearSchema
);

// Use ES6 export syntax
export { MaxDemandOfEveryMonth, MaxDemandOfEveryYear, MaxDemandOfEachMonthEveryYear };
