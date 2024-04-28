//XML-HTTP Request

//Step 1: Creating an XHR object
var req = new XMLHttpRequest();

//Step 2: Opening the request
req.open("GET","https://restcountries.com/v3.1/all");

//Step 3: Kickstarting a request
req.send();

//Step 4: Onload event
req.onload = function(){
    var res = JSON.parse(req.response);
    for(var i=0;i<res.length;i++)
    {
        console.log(res[i].flag,res[i].name.common,res[i].region,res[i].subregion);
    }
}