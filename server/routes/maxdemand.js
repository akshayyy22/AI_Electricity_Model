import express from 'express';
import Demand from '../models/MaxDemandEachMonth.js'; // Adjust based on your actual model path

const router = express.Router();

// Endpoint to get all demand records
router.get("/alltimemaxdemanddata", async (req, res) => {
  try {
    const demands = await Demand.find();
    res.status(200).json(demands);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Endpoint to get demand records by year
router.get("/:year", async (req, res) => {
  try {
    const year = req.params.year;
    const demands = await Demand.find({ year });
    if (demands.length === 0) {
      return res.status(404).json({ message: "No data found for the requested year" });
    }
    res.status(200).json(demands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to get demand records by year and month
router.get("/:year/:month_name", async (req, res) => {
  try {
    const { year, month_name } = req.params;
    const demand = await Demand.findOne({ year, month_name });
    if (!demand) {
      return res.status(404).json({ message: "No data found for the requested year and month" });
    }
    res.status(200).json(demand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;
