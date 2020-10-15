// create map
const map = L.map('mapid').setView([-23.5344425, -46.6222736], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create popo overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeigth: 240
}).setContent('Lar das meninas <a herf="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

// create and add marker
L.marker([-23.5344425, -46.6222736], { icon })
    .addTo(map)
    .bindPopup(popup)