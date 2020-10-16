const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

//create map
const map = L.map('mapid', options).setView([-23.5344425, -46.6222736], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);


//create icon   
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popAnchor: [170, 2]
})

//create and add marker
L
.marker([-23.5344425, -46.6222736], { icon })
.addTo(map)

// image gallery

function selectImage(event) {
    const button = event.currentTarget

    // remove all .active classes 
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove('active');
    }
    // select a image clicked
    const image = button.children[0];
    const imageContainer = document.querySelector('.orphanage-details > img')

    // att image container
    imageContainer.src = image.src
    
    // add .active class for this button 
    button.classList.add('active');


}