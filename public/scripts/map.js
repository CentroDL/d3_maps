(function(){
var width = 960,
    height = 700;

/*var projection = d3.geo.albersUsa()
  .scale(82485)
  .translate([-23700,5980]);*/

var projection = d3.geo.conicConformal()
      .parallels([40 + 40 / 60, 41 + 2 / 60])
      .scale(70000)
      .rotate([74, -40 - 45 / 60]);

var path = d3.geo.path().projection(projection);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

d3_queue.queue()
    .defer(d3.json, "/data/nyc-zip-code.json")
    .await(ready);

function ready(error, map) {
  svg.append("g")
      .attr("class", "zipcode")
    .selectAll("path")
      .data(map.features)
    .enter().append("path")
      .attr("d", path);
}

})()
