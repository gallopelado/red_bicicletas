var mymap = L.map('main_map').setView([-25.34427, -57.58101], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

axios.get('/api/bicicletas').then(({data: {bicicletas}}) => {
    bicicletas && bicicletas.map(item => {
        L.marker([item.ubicacion[0], item.ubicacion[1]], {title: item.id}).addTo(mymap)
        .bindPopup(`Bicicleta color: ${item.color}, modelo: ${item.modelo}`)
        .openPopup();
    })
})