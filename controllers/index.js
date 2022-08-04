//contains CRUD logic

const Plant = require('../models/plant');

const createPlant = async (req, res) => {
  try {
    const plant = await new Plant(req.body);
    await plant.save();

    return res.status(201).json({
      plant,
    });
  } catch(e) {
    return res.status(500).json({error: e.message});
  }
}

const getAllPlants = async (req, res) => {
  try {
    const allPlants = await Plant.find();

    return res.status(200).json({
      allPlants,
    });

  } catch(e) {
    return res.status(500).json({error: e.message});
  }
}

const getPlantsById = async (req, res) => {
  try {
    const {id} = req.params;

    const plant = await Plant.findById(id);

    //if the plant is in the db, send it back as a response
    if(plant)
      return res.status(200).json({
        plant
      });

    //if the user is looking for a plant that dne in the db, or made a typo, send back a 404 error
    return res.status(404).send('Plant not found');

  } catch(e) {
    return res.status(500).json({error: e.message});
  }
}

//technically you shouldn't be writing update code in an async function
const updatePlant = (req, res) => {
  try {
    const {id} = req.params;
    Plant.findByIdAndUpdate(id, req.body, {new: true}, (e, plant) => {
      if(e !== null) {
        console.log(e, 'error');
        res.status(404).send(message);
      }
      else {
        console.log(plant);
        res.json(plant);
      }
    });
  } catch(e) {
    return res.status(500).json({error: e.message});
  }
}

const deletePlant = async (req, res) => {
  try {
    const {id} = req.params;
    const deleted = await Plant.findByIdAndDelete(id);
    
    if(deleted)
      return res.status(200).send('Plant deleted successfully.');
    throw new Error('Plant not found');
  } catch(e) {
    return res.status(500).json({error: e.message});
  }
}

module.exports = {
  createPlant,
  getAllPlants,
  getPlantsById,
  updatePlant,
  deletePlant
}