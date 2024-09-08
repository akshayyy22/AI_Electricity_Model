import express from 'express';

import { AllDayData  } from '../models/AllDayData.js'; // Correct model path

const router = express.Router();

// Get all records
router.get('/', async (req, res) => {
  try {
    const data = await AllDayData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a record by ID
router.get('/:id', async (req, res) => {
  try {
    const data = await AllDayData.findById(req.params.id);
    if (!data) return res.status(404).json({ message: 'Record not found' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



export default router;
