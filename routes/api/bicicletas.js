const express = require('express')
const router = express.Router();
const bicicletaController = require('../../controllers/api/bicicletaControllerAPI');

router.get('/', bicicletaController.bicicleta_list);
router.post('/create', bicicletaController.bicicleta_create);
router.delete('/delete', bicicletaController.bicicleta_delete);
router.put('/update', bicicletaController.bicicleta_modify);

module.exports = router;