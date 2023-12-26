const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "1b736cbd847eb8ce607704dbb9f3a0a2"
const searchbox = document.getElementById("input");
const searchbtn = document.getElementById("btn");
async function checkweather (city){
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
console.log(response);
var data = await response.json();
console.log(data);
document.getElementById("city").innerHTML=data.name;
document.getElementById("temp").innerHTML=data.main.temp+"°C";
document.getElementById("humidity").innerHTML=data.main.humidity +"%";
document.getElementById("wind").innerHTML=data.wind.speed +"km/h";
}
searchbtn.addEventListener("click", ()=>{
    checkweather (searchbox.value);
    
})



