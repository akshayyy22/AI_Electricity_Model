import express from 'express';
import SeasonalDemand from '../models/SeasonDemandSchema.js';

const router = express.Router();

// READ: Get all seasonal demand records
router.get('/seasonsalldata', async (req, res) => {
  try {
    const seasonalDemands = await SeasonalDemand.find();
    res.status(200).json(seasonalDemands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ: Get a single seasonal demand record by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const seasonalDemand = await SeasonalDemand.findById(id);
    if (!seasonalDemand) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json(seasonalDemand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ: Get seasonal demand records by season
router.get('/season/:season', async (req, res) => {
  try {
    const { season } = req.params;
    const seasonalDemands = await SeasonalDemand.find({ season });
    if (seasonalDemands.length === 0) {
      return res.status(404).json({ message: 'No records found for this season' });
    }
    res.status(200).json(seasonalDemands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
