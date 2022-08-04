const {Router} = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('C\'est la racine'));

router.post('/plants', controllers.createPlant);  //when it's this route, and the user is doing a POST request (adding an entry), the function createPlant needs to be called

router.get('/plants', controllers.getAllPlants);

router.get('/plants/:id', controllers.getPlantsById);

router.put('/plants/:id', controllers.updatePlant);

router.delete('/plants/:id', controllers.deletePlant);

module.exports = router;