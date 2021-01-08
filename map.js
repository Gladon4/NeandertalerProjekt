const mappa = new Mappa('Leaflet');
let placeMap;
let canvas;

let lat;
let lon;

let d;
let points;

let founds = [];

let important = true;

const button = document.createElement('button');

let parent = document.getElementsByClassName("places");

const options = {
  lat: 50,
  lng: 50,
  zoom: 4,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup() {
  canvas = createCanvas(window.innerWidth * 0.98, window.innerHeight * 0.85);
  placeMap = mappa.tileMap(options);

  textSize(20);
  textAlign(CENTER, CENTER);
  placeMap.overlay(canvas);

  button.addEventListener('click', () => {changeMap();})
  parent[0].appendChild(button);
}


function draw() {
  clear();

  if (important) {
    button.innerText = 'Kartenansich zu allen Funden wechseln'
    i = 0

    for(point of data) {
      d = 10;
      lat = point[0]
      lon = point[1]
      info = point[2]

      const place = placeMap.latLngToPixel(lat, lon);

      if (mouseX < place.x + 5 && mouseX > place.x - 5 && mouseY < place.y + 5 && mouseY > place.y - 5) {
        d = 20;
        fill(0, 0, 0);
        strokeWeight(3);
        stroke('#f6f6f6');
        textSize(20);
        text(info , place.x - 250, place.y + 20,500);
        stroke('#fff');
      }

      fill(255, 50, 50);
      points = ellipse(place.x, place.y, d, d);
      stroke('black');
      strokeWeight(1);
    }
  } else {
    button.innerText = 'Kartenansich zu wichtigen Funden wechseln'
      for (point of data_all) {
        d = 10;
        lat = point[0]
        lon = point[1]

        const place = placeMap.latLngToPixel(lat, lon);

        if (mouseX < place.x + 5 && mouseX > place.x - 5 && mouseY < place.y + 5 && mouseY > place.y - 5) {
          d = 20;
        }

        fill(0, 200, 0);
        points = ellipse(place.x, place.y, d, d);
    }
  }
}

function changeMap() {
  important = !important;
}
