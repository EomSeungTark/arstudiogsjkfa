window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Pokèmon',
            location: {
                // lat: <your-latitude>,
                // lng: <your-longitude>,
            },
        },
    ];
}

var models = [
  {
    url: './assets/assest2.glb',
    scale: '0.1 0.1 0.1',
    rotation: '0 180 0',
  }
];

var modelIndex = 0;
var setModel = function (model, entity) {
  if (model.scale) {
    entity.setAttribute('scale', model.scale);
  }
  if (model.position) {
    entity.setAttribute('position', model.position);
  }

  entity.setAttribute('gltf-model', model.url);
};

function renderPlaces(places) {
  let scene = document.querySelector('a-scene');

  places.forEach((place) => {
    let latitude = place.location.lat;
    let longitude = place.location.lng;

    let model = document.createElement('a-entity');
    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

    setModel(models[modelIndex], model);

    model.setAttribute('animation-mixer', '');
    scene.appendChild(model);
  });
}
