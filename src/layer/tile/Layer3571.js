/*
 * L.PolarMap.layer3571 presets a tile layer with the EPSG:3571 settings.
*/

L.PolarMap.layer3571 = L.PolarMap.laeaTileLayer("http://{s}.tiles.arcticconnect.org/osm_3571/{z}/{x}/{y}.png", {
  name: "ac_3571",
  crs: "EPSG:3571"
});
