import express from 'express';
import { MaxDemandOfEveryMonth, MaxDemandOfEveryYear, MaxDemandOfEachMonthEveryYear } from '../models/KPI.js'; // Correct model path

const router = express.Router();

// Endpoint to get data for MaxDemandOfEveryMonth
router.get("/kpis/every-month", async (req, res) => {
  try {
    const kpis = await MaxDemandOfEveryMonth.find();
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Endpoint to get data for MaxDemandOfEveryYear
router.get("/kpis/every-year", async (req, res) => {
  try {
    const kpis = await MaxDemandOfEveryYear.find();
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Endpoint to get data for MaxDemandOfEachMonthEveryYear
router.get("/kpis/every-month-every-year", async (req, res) => {
  try {
    const kpis = await MaxDemandOfEachMonthEveryYear.find();
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
