// Module 2

console.log('start');

window.onload = function runD3code() {

//bar chart

	var w =300;
	var h = 120;
	var padding = 2;
	var dataset = [5, 10, 15, 20, 25, 11, 25, 22, 18, 7];
	var svg = d3.select("#demo1")
				.append("svg")
				.attr("width",w)
				.attr("height",h);

	function colorPicker(v) {
		if (v<=20) {
			return "#666666";
		}
		else if (v>20) {
			return "#FF0033";
		}
	}

	svg.selectAll("rect")
		.data(dataset)
		.enter()
		.append("rect")
			.attr({
				x: function(d, i){return i * (w / dataset.length);},
				y: function(d){return h - (d*4);},
				width: w / dataset.length - padding,
				height: function(d){return d*4;},
				fill: function(d){return colorPicker(d);}
			});
	svg.selectAll("text")
		.data(dataset)
		.enter()
		.append("text")
		.text(function (d) { return d;})
	.attr({
		"text-anchor": "middle",
		x: function(d, i) {return i * (w / dataset.length) + (w / dataset.length - padding) / 2;},
		y: function(d) {return h - (d*4)+14; },
		"font-family": "sans-serif",
		"font-size": 12,
		"fill": "#ffffff"
	});

	//line chart

	var h =350;
	var w = 400;

	monthlySales = [
		{"month":10, "sales":100},
		{"month":20, "sales":130},
		{"month":30, "sales":250},
		{"month":40, "sales":300},
		{"month":50, "sales":265},
		{"month":60, "sales":225},
		{"month":70, "sales":180},
		{"month":80, "sales":120},
		{"month":90, "sales":145},
		{"month":100, "sales":130}
	];

	var lineFun = d3.svg.line()
	.x(function(d) { return d.month*3; })
	.y(function(d) { return h-d.sales; })
	.interpolate("linear");

	var svg =
		d3.select("#demo2").append("svg").attr({
			width:w, height:h
		});

	var viz = svg.append("path")
		.attr({
			d: lineFun(monthlySales),
			"stroke": "purple",
			"stroke-width": 2,
			"fill": "none"
		});

	var lables = svg.selectAll("text")
		.data(monthlySales)
		.enter()
		.append("text")
		.text(function(d){ return d.sales; })
			.attr({
				x: function(d) { return d.month*3-25; },
				y: function(d) { return h-d.sales; },
				"font-size":12,
				"font-family":"sans-serif",
				"fill":"#666666",
				"text-anchor": "start",
				"dy": ".35em",
				"font-weight": function(d,i){
					if (i===0 || i==(monthlySales.length-1)) {
						return "bold";
					}
					else{
						return "normal";
					}
				}
			});


	//scatter plot
	
	var h =350;
	var w = 400;

	monthlySales = [
		{"month":10, "sales":100},
		{"month":20, "sales":130},
		{"month":30, "sales":250},
		{"month":40, "sales":300},
		{"month":50, "sales":265},
		{"month":60, "sales":225},
		{"month":70, "sales":180},
		{"month":80, "sales":120},
		{"month":90, "sales":145},
		{"month":100, "sales":130}
	];

	//KPI - Key Performance Indicator
	function salesKPI(d){
		if (d>=250) {return "#33CC66"; } else
		if (d<250) {return "#666666"; }
	}

	//KPI Lables
	function showMinMax(ds, col, val, type){
		var max= d3.max(ds, function(d){
			return d[col];
		});
		var min= d3.min(ds, function(d){
			return d[col];
		});

		if (type == 'minmax' && (val == max || val == min)){
			return val;
		} else {
			if (type=='all') {
				return val;
			}
		}
	}

	//create svg
	var svg = d3.select("#demo3")
	.append("svg")
		.attr({
			width:w,
			height:h
		});

	var dots = svg.selectAll("circle")
		.data(monthlySales)
		.enter()
		.append("circle")
			.attr({
				cx: function(d){ return d.month*3; },
				cy: function(d){ return h-d.sales; },
				r: 5,
				"fill": function(d) {return salesKPI(d.sales);}
			});

}
		

console.log('end');