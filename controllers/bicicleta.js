const Bicicleta = require('../models/bicicleta');

exports.bicicleta_list = (req, res) => {
    res.render('bicicletas/index', { bicis: Bicicleta.allBicis })
}

exports.bicicleta_create_get = (req, res) => {
    res.render('bicicletas/create')
}

exports.bicicleta_create_post = (req, res) => {
    const { id, color, modelo, lat, lng } = req.body;
    const bicicleta = new Bicicleta(id, color, modelo, [lat, lng]);
    Bicicleta.add(bicicleta);
    res.redirect('/bicicletas')
}

exports.bicicleta_update_get = (req, res) => {
    const bici = Bicicleta.findById(req.params.id)

    res.render('bicicletas/update', {bici})
}

exports.bicicleta_update_post = (req, res) => {
    const bici = Bicicleta.findById(req.params.id)
    const { color, modelo, lat, lng } = req.body;
    bici.color = color;
    bici.modelo = modelo;
    bici.ubicacion = [ lat, lng ]

    res.redirect('/bicicletas')
}

exports.bicicleta_delete_post = (req, res) => {
    Bicicleta.removeById(req.params.id);
    res.redirect('/bicicletas')
}