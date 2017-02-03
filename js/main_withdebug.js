//initialize function called when the script loads
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");

	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");

	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    addColumns(cityPop);
    addEvents();
};
//creates a colums defined as citySize
function addColumns(citySize){
//for each row do the following function
    $('tr').each(function(i){
//sets i equal to 0
    	if (i == 0){
//sets the title of the coloumn as City Size
    		$(this).append('<th>City Size</th>');
//moves to rest of rows
    	} else {
//sets the varible as cityPop
    		var cityPop;
				//console.log(citySize[i-1]);
				//console.log(i-1);
				//console.log(typeof citySize);
//if the city's pop is less than 100000 it is labeled small
    		if (citySize[i-1].population < 100000){
    			cityPop = 'Small';
//if the city's pop is over 100000 but less than 500000 it is labeled Medium
		} else if (citySize[i-1].population < 500000){
    			cityPop = 'Medium';
//everything else is labeled as large if it didnt meet the past two requriments
    		} else {
    			cityPop = 'Large';
    		}
//places the varible into the table for display
    		$(this).append('<td>' + cityPop + '</td>');
    	}
    });
};

function addEvents(){
//creates a function for when you mouse over the table
	$("table").mouseover(function(){
//set the varible color
		var color = "rgb("
//loops through the following block of code 3 times, i will increase 0 to 2 through each loop
		for (var i=0; i<3; i++){
			//console.log(i)
//makes a varible named random that makes a random number between 0 & 1 to be multiplied by 255 to repersent a rgb color number
			var random = Math.round(Math.random() * 255);
			console.log(random)
//adds the var color and random together ex. is rgb(213)
			color += random;
// if i is less than 2, a comma is added for another color
			if (i<2){
				color += ",";
//if i is 2 or more than the rgb vale is ended with a closing )
			} else {
				color += ")";
		};
//sets a css property for the color
		$(this).css('color', color);

	};
});
//creates a function for when it is clicked
	function clickme(){
//asigns what is displayed when clicked
		alert('Hey, you clicked me!');
	};
//assigned the table as the area to be clicked
	$('table').on('click', clickme);


}
//call the initialize function when the document has loaded
$(document).ready(initialize);
