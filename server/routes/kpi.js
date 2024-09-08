import express from 'express';

import { MaxDemandOfEveryMonth, MaxDemandOfEveryYear, MaxDemandOfEachMonthEveryYear } from '../models/KPI.js'; // Correct model path

const router = express.Router();

// Endpoint to get data for MaxDemandOfEveryMonth
router.get("/maxdemandofeverymonth", async (req, res) => {
  try {
    const kpis = await MaxDemandOfEveryMonth.find();
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Endpoint to get data for MaxDemandOfEveryYear
router.get("/maxdemandofeveryyear", async (req, res) => {
  try {
    const kpis = await MaxDemandOfEveryYear.find();
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Endpoint to get data for MaxDemandOfEachMonthEveryYear
router.get("/maxdemandofeachmontheveryyear", async (req, res) => {
  try {
    const kpis = await MaxDemandOfEachMonthEveryYear.find();
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
