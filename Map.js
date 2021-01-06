let data1;

const mappa = new Mappa('Leaflet');
let placeMap;
let canvas;

let lat;
let lon;

let d;
let points;

const options = {
  lat: 50,
  lng: 20,
  zoom: 5,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}


function preload() {
  data1 = loadTable('places_1.csv', 'csv', 'header');
}

function setup() {
  canvas = createCanvas(1000, 700);
  placeMap = mappa.tileMap(options);

  textSize(20);
  textAlign(CENTER, CENTER);

  placeMap.overlay(canvas);

  points = [];
  d = [];
}

function draw() {
  clear();
  i = 0
  for (let row of data1.rows) {
    d[i] = 10;
    lat = row.get('lat');
    lon = row.get('lon');
    info = row.get('info')
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

}
