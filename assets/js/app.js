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

d3.csv("/assets/data/data.csv")//.then(function(stateData){
//     stateData.forEach(function(data){
//         data.income = +data.income;
//         data.smokes = +data.smokes; //check to see if okay to have multiples included in forEach
//     })
// })
// var x = d3.scaleLinear()
//     .domain([0, 25]) //update upper limit
//     .range([0, width]);
// var y = d3.scaleLinear()
//     .domain([0,30]) //update upper limit
//     .range([height,0]);
