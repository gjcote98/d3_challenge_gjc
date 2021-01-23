d3.json("samples.json").then(function(data) {
    console.log("this works");
  });
  
//plot example
var trace1 = 
{
  labels: [sample values],
  values: [sample values],
  type: "bar"
};

var data1 = [trace1];

var layout1 = 
{
  title: "Title",
  xaxis: {title: ""},
  yaxis: {title: ""}
};

Plotly.newPlot("plot1", data1, layout1);

//f1 filter&drop down - init(){}
//f2 create summary stats - build()
//f3 bar/bubble - buildplots()
//f4 read changes and change f1 f2 f3 - optionChanged

