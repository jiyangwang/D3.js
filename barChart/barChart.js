var w = 200;
var h = 100;
var padding = 2;
var dataset = [5, 10, 15, 20, 25, 11, 17, 13, 5, 9];
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
            
function colorPicker(v) {
  if (v<20) { return "#666666"; }
  else { return "#FF0033"; }
}

svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", function(d, i) {
      return i * (w / dataset.length);
   })
   .attr("y", function(d) {
      return h - (d * 4);
   })
   .attr("width", w / dataset.length - padding)
   .attr("height", function(d) {
      return d * 4;
   })
   .attr("fill", function(d) {
      return colorPicker(d);
   });

svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(function (d) { return d; })
   .attr("text-anchor", "middle")
   .attr("x", function(d, i) {
      return i * (w / dataset.length) + (w / dataset.length - padding) / 2;
   })
   .attr("y", function(d) {
      return h - (d * 4) + 14; 
   })
   .attr("font-family", "sans-serif")
   .attr("font-size", 12)
   .attr("fill", "#ffffff")