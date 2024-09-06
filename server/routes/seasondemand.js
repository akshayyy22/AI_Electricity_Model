import express from 'express';
import SeasonalDemand from '../models/SeasonDemandSchema.js'; // Adjust the path as necessary

const router = express.Router();

// Endpoint to get all seasonal demand records
router.get("/allseasondemanddata", async (req, res) => {
  try {
    const seasonalDemands = await SeasonalDemand.find();
    res.status(200).json(seasonalDemands);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Endpoint to get seasonal demand records by year
router.get("/seasondemand/:year", async (req, res) => {
  try {
    const year = req.params.year;
    const seasonalDemands = await SeasonalDemand.find({ year });
    if (seasonalDemands.length === 0) {
      return res.status(404).json({ message: "No data found for the requested year" });
    }
    res.status(200).json(seasonalDemands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to get seasonal demand records by year and season
router.get("/seasondemand/:year/:season", async (req, res) => {
  try {
    const { year, season } = req.params;
    const seasonalDemand = await SeasonalDemand.findOne({ year, season });
    if (!seasonalDemand) {
      return res.status(404).json({ message: "No data found for the requested year and season" });
    }
    res.status(200).json(seasonalDemand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;
