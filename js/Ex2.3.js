//execute function once window is loaded
function initialize(){
    cities();
};

function cities(){
    var citiesObj = {
        'Madison': 233209,
        'Milwaukee': 594833,
        'Green Bay': 104057,
        'Superior': 27244
    };

    $('#mydiv').append('<table>')


    //array to define city names
    // var cities = [
    //     'Madison',
    //     'Milwaukee',
    //     'Green Bay',
    //     'Superior'
    // ];
    //
    // var population = [
    //     //array to define city population
    //     233209,
    //     594833,
    //     104057,
    //     27244
    // ];
    //create html table emelent
    // var table = document.createElement("table");
    // //create html row element
    // var headerRow = document.createElement("tr");
    // // create html header cell element
    // var cityHeader = document.createElement("th");
    // cityHeader.innerHTML = "City"; //<th>city</td>
    // headerRow.appendChild(cityHeader);
    // //create header cell for population string
    // var popHeader = document.createElement("th");
    // popHeader.innerHTML = "Population";
    // headerRow.appendChild(popHeader);
    // //add header row to table
    // table.appendChild(headerRow);


    for (var cityKey in citiesObj){
    //     //create table row
    //     var tr = document.createElement("tr");
    //     //create table cell
    //     var city = document.createElement("td");
    //     city.innerHTML = cityKey[i];
    //     tr.appendChild(city);
    //
    //     //create table cell for population
    //     var pop = document.createElement("td");
    //     pop.innerHTML = citiesObj[cityKey];
    //     tr.appendChild(pop);
    //
    //     //add whole row to table
    //     table.appendChild(tr);
    // };

    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
};


//when window is loaded, start script
window.onload = initialize();
