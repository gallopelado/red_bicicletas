const mongoose = require('mongoose')
const Bicicleta = require("../../models/bicicleta")

describe('Testing bicicletas', ()=>{
    beforeEach(function(done) {
        const mongoDB = 'mongodb://localhost/test_db'
        mongoose.connect(mongoDB, { useNewUrlParser: true })
        
        const db = mongoose.connection
        db.on('error', console.error.bind(console, 'MongoDB connection error: '));
        db.once('open', function() {
            console.log('We are connected to test database');
            done();
        })
    })
    afterEach(function(done){
        Bicicleta.deleteMany({}, function(err, success){
            if(err) console.log(err);
            mongoose.disconnect(err);
            done();
        })
    })

    describe('Bicicleta.createInstance', ()=>{
        it('crea una instancia de Bicicleta', () => {
            const bici = Bicicleta.createInstance(1, "verde", "urbana", [-34.5, -54.1]);
            expect(bici.code).toBe(1)
            expect(bici.color).toBe("verde")
            expect(bici.modelo).toBe("urbana")
            expect(bici.ubicacion[0]).toEqual(-34.5)
            expect(bici.ubicacion[1]).toEqual(-54.1)
        })
    })
    describe('Bicicleta.allBicis', () => {
        it('comienza vacía', (done)=> {
            Bicicleta.allBicis(function(err, bicis) {
                expect(bicis.length).toBe(0);
                done();
            })
        })
    })
    describe('Bicicleta.add', ()=> {
        it('agrega solo una bici', (done)=>{
            const aBici = new Bicicleta({ code: 1, color: "verde", modelo: "urbana"})
            Bicicleta.add(aBici, function(err, newBici){
                if(err) console.error(err)
                Bicicleta.allBicis(function(err, bicis){
                    expect(bicis.length).toEqual(1)
                    expect(bicis[0].code).toEqual(aBici.code)
                    done()
                })
            })
        })
    })
    describe('Bicicleta.findByCode', ()=>{
        it('debe devolver la bici con code 1', (done)=>{
            Bicicleta.allBicis(function(err, bicis){
                expect(bicis.length).toBe(0)

                const aBici = new Bicicleta({ code: 1, color: "verde", modelo: "urbana" })
                Bicicleta.add(aBici, function(err, newBici){
                    if(err) console.error(err)

                    const aBici2 = new Bicicleta({ code:2, color: "roja", modelo: "urbana"} )
                    Bicicleta.add(aBici2, function(err, newBici){
                        if(err) console.error(err)
                        Bicicleta.findByCode(1, function(err, targetBici){
                            expect(targetBici.code).toBe(aBici.code)
                            expect(targetBici.color).toBe(aBici.color)
                            expect(targetBici.modelo).toBe(aBici.modelo)
                            done()
                        })
                    })
                })
            })
        })
    })
})

//Antes de cada test se vacía la colección
/* beforeEach(() => Bicicleta.allBicis=[])

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
}) */