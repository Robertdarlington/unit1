function initialize(){
  jsAjax();


};

//demo of AJAX using plain javascript
function jsAjax(){
  //instatiate on ajax request object
  var ajaxRequest = new XMLHttpRequest();

  //create an event handler for the request
  ajaxRequest.onreadystatechange = function(){
    if (ajaxRequest.readyState == 4){
      //call a callback function and pass the data to it
      jsCallback(ajaxRequest.response);
    }


};

//open ajax request
ajaxRequest.open('Get', 'data/MegaCities.geojson', true);

//set data type
ajaxRequest.responseType = 'json';

//send the call
ajaxRequest.send();

};

function jsCallback(data){
  console.log(data);
  var htmlString = "<h3>javascript Ajax response text:</h3>";
  htmlString += JSON.stringify(data);
  var p = document.createElement("p");
  p.innerHTML = htmlString;
  document.getElementById("mydiv").appendChild(p);

}

//ajax using jQuery
function jQueryAjax(){
  $.ajax("data/MegaCities.geojson", {
    datatype: "json",
    success: jQueryCallback
  });
};

function jQueryCallback(data){
    Console.log(data);
    var htmlString = "<h3>jQuery AJAX response text</h3>";
    htmlString += JSON.stringify(data);
    $("#mydiv").append("<p>"+htmlString+"<p/>");
};


};


window.onload = initialize
