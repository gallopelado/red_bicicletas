const Bicicleta = function(id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function() {
    return `id: ${this.id} | color: ${this.color} | modelo: ${this.modelo} | ubicacion: ${this.ubicacion}`;
}

Bicicleta.allBicis = [];

Bicicleta.add = function(aBici) {
    Bicicleta.allBicis.push(aBici)
};

Bicicleta.findById = function(aBiciId) {
    const aBici = Bicicleta.allBicis.find( item => item.id == aBiciId);
    if(aBici) {
        return aBici;
    }
    throw new Error(`no existe la bicicleta con el id ${aBiciId}`);
}


Bicicleta.removeById = function(aBiciId) {
    const aBici = Bicicleta.findById(aBiciId);
    for(let i=0; i< Bicicleta.allBicis.length; i++) {
        if(Bicicleta.allBicis[i].id === aBici.id) {
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
}
const b1 = new Bicicleta(1, 'negro', '2019', [-25.34510, -57.57962]);
const b2 = new Bicicleta(2, 'blanco', '2020', [-25.34481, -57.58032]);

Bicicleta.add(b1);
Bicicleta.add(b2);

module.exports = Bicicleta;