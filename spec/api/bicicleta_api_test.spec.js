const Bicicleta = require("../../models/bicicleta")
const request = require("request")
const server = require("../../bin/www")// no hizo falta volver a crear el server, se hace implícito

describe("Bicicleta API", () => {
    describe("GET BICICLETAS /", () => {
        it("Status 200", () => {
            expect(Bicicleta.allBicis.length).toBe(0);

            const b1 = new Bicicleta(1, 'negro', '2019', [-25.34510, -57.57962]);
            Bicicleta.add(b1);

            request.get("http://localhost:3000/api/bicicletas", (error, response, body) => {
                expect(response.statusCode).toBe(200)
            })
        })
    })
    describe("POST BICICLETAS /create", () => {
        it("Status 200", (done) => {
            const headers = { 'content-type': 'application/json' }
            const aBici = '{ "id": 10, "color": "rojo", "modelo": "urbana", "lat": -34, "long": -54 }'
            request.post({
                headers: headers,
                url: "http://localhost:3000/api/bicicletas/create",
                body: aBici
            }, (error, response, body) => {
                expect(response.statusCode).toBe(200)
                expect(Bicicleta.findById(10).color).toBe("rojo")
                done()
            })
        })
    })
    describe("DELETE BICICLETAS /delete", () => {
        it("Status 200", (done) => {
            const b1 = new Bicicleta(1, 'negro', '2019', [-25.34510, -57.57962]);
            Bicicleta.add(b1);
            request.delete({
                headers: {'content-type': 'application/json'},
                url: "http://localhost:3000/api/bicicletas/delete",
                body: '{ "id": 1 }'
            }, (error, response, body) => {
                expect(response.statusCode).toBe(204)
                expect(Bicicleta.allBicis.length).toBe(0);
                expect(Bicicleta.findById(10).color).toBe('')
                done()
            })
        })
    })
})