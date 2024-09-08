import express from 'express';
const router = express.Router();
import {Infrastructure} from '../models/InfrastructureData.js'; 

// @route GET /infrastructure
// @desc Get all infrastructure data
router.get('/', async (req, res) => {
  try {
    const data = await Infrastructure.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// @route GET /infrastructure/:id
// @desc Get infrastructure data by ID
router.get('/:id', async (req, res) => {
  try {
    const data = await Infrastructure.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});






export default router;

