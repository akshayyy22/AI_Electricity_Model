import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

// Power Consumption Graph Data Schema
const powerConsumptionGraphSchema = new Schema({
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  import_from_the_grid: { type: Number, required: true },
  schedule_from_the_grid: { type: Number, required: true },
  'od-ud': {
    type: Number, 
    required: true
  },
    demand_med: { type: Number, required: true },
});

const PowerConsumptionGraphData = mongoose.model(
  "PowerConsumptionGraphData",
  powerConsumptionGraphSchema
);

// Power Consumption based on Weather Data Schema
const powerConsumptionsWeatherSchema = new Schema({
  year: { type: Number, required: true },
  season: { type: String, required: true },
  unrestricted_demand: { type: Number, required: true },
});

const PowerConsumptionsbasedonWeatherData = mongoose.model(
  "PowerConsumptionsbasedonWeatherData",
  powerConsumptionsWeatherSchema
);

// Power Consumption based on Public Holidays Schema
const powerConsumptionsPublicHolidaysSchema = new Schema({
  date: { type: String, required: true }, 
  unrestricted_demand: { type: Number, required: true },
  month: { type: Number, required: true },
  festivals: { type: String, required: true },
});

const PowerConsumptionsbasedonPublicHolidays = mongoose.model(
  "PowerConsumptionsbasedonPublicHolidays",
  powerConsumptionsPublicHolidaysSchema
);

// Power Further Required from Solar Energy Schema
const powerFurtherRequiredSolarSchema = new Schema({
  date: { type: String, required: true }, 
  'od-ud': {
    type: Number, 
    required: true
  },
month: { type: Number, required: true },
});

const PowerFurtherRequiredfromSolarEnergy = mongoose.model(
  "PowerFurtherRequiredfromSolarEnergy",
  powerFurtherRequiredSolarSchema
);

export {
  PowerConsumptionGraphData,
  PowerConsumptionsbasedonWeatherData,
  PowerConsumptionsbasedonPublicHolidays,
  PowerFurtherRequiredfromSolarEnergy,
};
