const express = require('express')
const router = express.Router();
const bicicletaController = require('../controllers/bicicleta');

router.get('/', bicicletaController.bicicleta_list)

router.get('/create',bicicletaController.bicicleta_create_get)

router.post('/create',bicicletaController.bicicleta_create_post)

router.get('/update/:id',bicicletaController.bicicleta_update_get)

router.post('/update/:id',bicicletaController.bicicleta_update_post)

router.get('/delete/:id',bicicletaController.bicicleta_delete_post)

module.exports = router;