//code based on https://www.d3-graph-gallery.com/graph/scatter_basic.html

var svgWidth = 1000;
var svgHeight = 500;
var margin = { top: 10, right: 30, bottom: 50, left: 60 };
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("/assets/data/data.csv").then(function (stateData) {
    stateData.forEach(function (data) {
        data.income = +data.income;
        // console.log(data.income);
        data.smokes = +data.smokes;
        // console.log(data.smokes);
    })

    var x = d3.scaleLinear()
        .domain([0, 25]) //update upper limit
        .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    var y = d3.scaleLinear()
        .domain([0, 30]) //update upper limit
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    svg.append("g")
        .selectAll("dot")
        .data(stateData)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return x(d.poverty); })
        .attr("cy", function (d) { return y(d.obesity); })
        .attr("r", 1.5)
        .style("fill", "#69b3a2")
})

//code based on http://www.d3noob.org/2012/12/adding-axis-labels-to-d3js-graph.html
svg.append("text")      // text label for the x axis
    .attr("x", svgWidth / 2)
    .attr("y", height + margin.bottom - 10)
    .style("text-anchor", "middle")
    .text("Poverty");

svg.append("text")  //text label for the y axis
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Obesity");