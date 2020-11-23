const Bicicleta = require('../../models/bicicleta');

exports.bicicleta_list = function(req, res) {
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    })
}

exports.bicicleta_create = function(req, res) {
    const bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo, [req.body.lat, req.body.lng]);
    Bicicleta.add(bici);
    res.status(200).json({
        bicicleta: bici
    });
}

exports.bicicleta_delete = function(req, res) {
    Bicicleta.removeById(req.body.id);
    res.status(204).send();
}

exports.bicicleta_modify = function(req, res) {
    const bici = Bicicleta.findById(req.body.id)
    const { color, modelo, lat, lng } = req.body;
    bici.color = color;
    bici.modelo = modelo;
    bici.ubicacion = [ lat, lng ]
    res.status(200).json({
        bicicleta: bici
    });
}