var svgWidth = 1000;
var svgHeight = 500;
var margin = {top:10, right: 30, bottom: 30, left: 60};
var width = svgWidth-margin.left-margin.right;
var height = svgHeight-margin.top-margin.bottom;

var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

