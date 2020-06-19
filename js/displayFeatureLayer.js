/*
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
  <style>
    html, body, #viewDiv {
      padding: 0;
      margin: 0;
      height: 100%;
      width: 100%;
    }
  </style>
  <link rel="stylesheet" href="https://js.arcgis.com/4.15/esri/themes/light/main.css">
  <script src="https://js.arcgis.com/4.15/"></script>
*/
require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], function(Map, MapView, FeatureLayer) {
  
  var map = new Map({
    basemap: "topo-vector"
  });

  var featureLayer = new FeatureLayer({
    url: "https://services1.arcgis.com/tojDB8zdH47917Mi/arcgis/rest/services/test/FeatureServer"
  });
  map.add(featureLayer);
    
  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-121, 47],
    zoom: 13
  });

});