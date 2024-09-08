import express from 'express';
import {
  PowerConsumptionGraphData,
  PowerConsumptionsbasedonWeatherData,
  PowerConsumptionsbasedonPublicHolidays,
  PowerFurtherRequiredfromSolarEnergy
} from '../models/GraphData.js';

const router = express.Router();

// Routes for Power Consumption Graph Data
router.get('/power-consumption-graph', async (req, res) => {
  try {
    const data = await PowerConsumptionGraphData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Routes for Power Consumption Based on Weather Data
router.get('/power-weather', async (req, res) => {
  try {
    const data = await PowerConsumptionsbasedonWeatherData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Routes for Power Consumption Based on Public Holidays
router.get('/power-public-holidays', async (req, res) => {
  try {
    const data = await PowerConsumptionsbasedonPublicHolidays.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Routes for Power Further Required from Solar Energy
router.get('/power-solar', async (req, res) => {
  try {
    const data = await PowerFurtherRequiredfromSolarEnergy.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



// Export the router
export default router;
