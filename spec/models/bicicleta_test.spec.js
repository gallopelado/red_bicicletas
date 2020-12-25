const Bicicleta = require("../../models/bicicleta")

//Antes de cada test se vacía la colección
beforeEach(() => Bicicleta.allBicis=[])

describe("Bicicleta.allBicis", () => {
    it("comienza vacía", () => {
        expect(Bicicleta.allBicis.length).toBe(0);
    })
})

describe("Bicicleta.add", () => {
    it("agregamos una", () => {
        expect(Bicicleta.allBicis.length).toBe(0);
        const b1 = new Bicicleta(1, 'negro', '2019', [-25.34510, -57.57962]);
        Bicicleta.add(b1);
        expect(Bicicleta.allBicis[0]).toBe(b1);
    })
})

describe("Bicicleta.findById", () => {
    it("debe devolver la bici con id 1", () => {
        expect(Bicicleta.allBicis.length).toBe(0);
        const b1 = new Bicicleta(1, 'negro', '2019', [-25.34510, -57.57962]);
        Bicicleta.add(b1);
        const targetBici = Bicicleta.findById(1);
        expect(targetBici.id).toBe(1)
    })
})