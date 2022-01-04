var temp,
maxtemp,
mintemp,
desc,
wind,
hum,
main,
day,night;

var x=["clear sky","few clouds","scattered clouds","tornado","shower rain","mist","thunderstrom","rain","snow","haze","broken clouds","drizzle"];
 function weather(input){
    var city= input;
    var myurl="http://api.openweathermap.org/data/2.5/weather?";
    var key="0cfd0ef2eae651bc05d578b56ab26ffe";
    var url=myurl+"appid="+key+"&units=metric&q="+city;
    fetch(url)
    .then(function(response){
    console.log(response);
    return response.json();
   })
  .then(function(data) {
   console.log(data);
   temp=data.main.temp;
   document.querySelector("#deg").innerHTML=Math.round(temp)+"&deg;C";
   mintemp=data.main.temp_min;
   document.querySelector("#min").innerHTML=Math.round(mintemp)+"&deg;C";
   maxtemp=data.main.temp_max;
   document.querySelector("#max").innerHTML="/"+Math.round(maxtemp)+"&deg;C";
   wind=data.wind.speed;
   document.querySelector("#wind").innerHTML=Math.round(wind)+"mph";
   hum=data.main.humidity;
   document.querySelector("#humidity").innerHTML=hum+"%";
   desc=data.weather[0].description;
   document.querySelector("#description").innerHTML=desc;
   var dt = new Date();
   document.getElementById('date-time').innerHTML=dt;
    })
  .catch(err=>document.write(err));
 }
   function con(detector){
    if(detector=="fahrenheit"){
     var far=(temp*9/5)+32;
     document.querySelector("#deg").innerHTML=Math.round(far)+"&deg;F";
     var farmin=(mintemp*9/5)+32;
     document.querySelector("#min").innerHTML=Math.round(farmin)+"&deg;F";    
     var farmax=(maxtemp*9/5)+32;
     document.querySelector("#max").innerHTML="/"+Math.round(farmax)+"&deg;F";
  }
   else{
     document.querySelector("#deg").innerHTML=Math.round(temp)+"&deg;C";
     document.querySelector("#min").innerHTML=Math.round(mintemp)+"&deg;C";
     document.querySelector("#max").innerHTML="/"+Math.round(maxtemp)+"&deg;C";
}
 }