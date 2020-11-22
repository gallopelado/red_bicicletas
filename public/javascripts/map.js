var mymap = L.map('main_map').setView([-25.34427, -57.58101], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

L.marker([-25.34427, -57.58101]).addTo(mymap)
    .bindPopup('Mi casita')
    .openPopup();