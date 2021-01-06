let data1;
let data2;

const mappa = new Mappa('Leaflet');
let placeMap;
let canvas;

let lat;
let lon;

let d;
let points;

let important;

const button = document.createElement('button');

const options = {
  lat: 50,
  lng: 20,
  zoom: 5,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload() {
  data1 = loadTable('places_important.csv', 'csv', 'header');
  data2 = loadTable('places_all.csv', 'csv', 'header');
}

function setup() {
  canvas = createCanvas(1000, 700);
  placeMap = mappa.tileMap(options);

  textSize(20);
  textAlign(CENTER, CENTER);

  placeMap.overlay(canvas);

  points = [];
  d = [];

  button.innerText = 'Kartenansich wechseln'
  document.body.appendChild(button);
  button.addEventListener('click', () => {changeMap();})
}

function draw() {
  clear();
  if (important) {
    i = 0
    for (let row of data1.rows) {
      d[i] = 10;
      lat = row.get('lat');
      lon = row.get('lon');
      info = row.get('info');
      const place = placeMap.latLngToPixel(lat, lon);

      if (mouseX < place.x + 5 && mouseX > place.x - 5 && mouseY < place.y + 5 && mouseY > place.y - 5) {
        d[i] = 20;
        fill(0, 0, 0);
        textSize(20);
        text(info , place.x, place.y + 20);
      }

      fill(255, 50, 50);
      points[i] = ellipse(place.x, place.y, d[i], d[i]);
      i++;
    }
  } else {
      i = 0
      for (let row of data2.rows) {
        d[i] = 10;
        lat = row.get('lat');
        lon = row.get('lon');
        const place = placeMap.latLngToPixel(lat, lon);

        fill(255, 50, 50);
        points[i] = ellipse(place.x, place.y, d[i], d[i]);
        i++;
    }
  }
}

function changeMap() {
  important = !important;
}
