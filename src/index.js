import './style.css';

let startingCity = "Amsterdam";
let units = "metric";


const containerDiv = document.createElement("div")
containerDiv.classList.add("container")

const leftDiv = document.createElement("div")
leftDiv.classList.add("left")

//leftDiv DOMS
const headerandtimediv = document.createElement("div")
headerandtimediv.classList.add("locationinfodiv")
const newh2 = document.createElement("h2") 
newh2.classList.add("city-country-h2")
const newh5localtime = document.createElement("h5")
newh5localtime.classList.add("localtimeh5")
headerandtimediv.appendChild(newh2)
headerandtimediv.appendChild(newh5localtime)


const infoDiv = document.createElement("div") 
infoDiv.classList.add("infodiv")

const lefth3 = document.createElement("h3")
const hidden_lefth3 = document.createElement("h3")
hidden_lefth3.classList.add("hiddentemp")  

const holderdiv = document.createElement("div")
const iconImg = document.createElement("img")
const spanElement = document.createElement("span")
holderdiv.classList.add("holderdiv1")
holderdiv.appendChild(iconImg)
holderdiv.appendChild(spanElement)

const feel_like = document.createElement("h4")
infoDiv.appendChild(holderdiv)
infoDiv.appendChild(lefth3)
infoDiv.appendChild(hidden_lefth3) 
const hidden_feel_like = document.createElement("h4")
hidden_feel_like.classList.add("hiddentemp")
infoDiv.appendChild(feel_like)
infoDiv.appendChild(hidden_feel_like)


const maxmindiv = document.createElement("div") 
maxmindiv.classList.add("maxminholder")
const newh51 = document.createElement("h5")
const newh52 = document.createElement("h5")
newh52.classList.add("hiddentemp")
const newh53 = document.createElement("h5")
const newh54 = document.createElement("h5")
newh54.classList.add("hiddentemp")
maxmindiv.appendChild(newh51)
maxmindiv.appendChild(newh52)
maxmindiv.appendChild(newh53)
maxmindiv.appendChild(newh54)

const humwindDiv = document.createElement("div")
humwindDiv.classList.add("humwindholder")
const humh4 = document.createElement("h4")
const windh4 = document.createElement("h4")
const switchwindh4 = document.createElement("h4")
switchwindh4.classList.add("hiddentemp")
humwindDiv.appendChild(humh4)
humwindDiv.appendChild(windh4)
humwindDiv.appendChild(switchwindh4)

leftDiv.appendChild(headerandtimediv)
leftDiv.appendChild(infoDiv)
leftDiv.appendChild(maxmindiv)
leftDiv.appendChild(humwindDiv)


//rightDiv DOMS
const rightDiv = document.createElement("div")
rightDiv.classList.add("right")

const newDiv = document.createElement("div")
newDiv.classList.add("top-div")

const searchLocationHeader = document.createElement("h3")
searchLocationHeader.innerText = "Search Location"

const searchInput = document.createElement("input")
searchInput.setAttribute("type", "text")
searchInput.setAttribute("id", "city-input")
searchInput.setAttribute("placeholder", "Search for a city or country")

const newForm = document.createElement("form")
const newButton = document.createElement("button")
newButton.setAttribute("type", "submit")
newButton.innerText = "Search"


newButton.addEventListener("click", (e) => {
e.preventDefault()
let value1 = document.querySelector("#city-input").value
document.querySelector("#city-input").value = "";
getWeather(value1)
})

newForm.appendChild(searchInput)
newForm.appendChild(newButton)

const newh61 = document.createElement("p")
newh61.style.fontSize = "1rem"
newh61.innerText = "Switch between Fahrenheit / Celsius"

newDiv.appendChild(searchLocationHeader)
newDiv.appendChild(newForm)
rightDiv.appendChild(newDiv)

const newLabel222 = document.createElement("label")
newLabel222.classList.add("toggle")
const switchInput = document.createElement("input")
switchInput.setAttribute("type", "checkbox")
const span44 = document.createElement("span")
span44.classList.add("labels")
span44.setAttribute("data-on", "Fahrenheit")
span44.setAttribute("data-off", "Celsius")
span44.addEventListener("click", () => {
  if(document.querySelector(".infodiv").children[1].classList.contains("hiddentemp")){
    document.querySelector(".infodiv").children[2].classList.add("hiddentemp")
    document.querySelector(".infodiv").children[4].classList.add("hiddentemp")
    document.querySelector(".infodiv").children[1].classList.remove("hiddentemp")
    document.querySelector(".infodiv").children[3].classList.remove("hiddentemp")  
    document.querySelector("body > div > div.left > div.maxminholder > h5:nth-child(1)").classList.remove("hiddentemp")
    document.querySelector("body > div > div.left > div.maxminholder > h5:nth-child(3)").classList.remove("hiddentemp")
    document.querySelector("body > div > div.left > div.maxminholder > h5:nth-child(2)").classList.add("hiddentemp")
    document.querySelector("body > div > div.left > div.maxminholder > h5:nth-child(4)").classList.add("hiddentemp")
    document.querySelector(".humwindholder").children[1].classList.remove("hiddentemp")
    document.querySelector(".humwindholder").children[2].classList.add("hiddentemp")
  } else{
    document.querySelector(".infodiv").children[1].classList.add("hiddentemp")
    document.querySelector(".infodiv").children[3].classList.add("hiddentemp")
    document.querySelector(".infodiv").children[2].classList.remove("hiddentemp")
    document.querySelector(".infodiv").children[4].classList.remove("hiddentemp")
    document.querySelector("body > div > div.left > div.maxminholder > h5:nth-child(2)").classList.remove("hiddentemp")
    document.querySelector("body > div > div.left > div.maxminholder > h5:nth-child(4)").classList.remove("hiddentemp")
    document.querySelector("body > div > div.left > div.maxminholder > h5:nth-child(1)").classList.add("hiddentemp")
    document.querySelector("body > div > div.left > div.maxminholder > h5:nth-child(3)").classList.add("hiddentemp")
    document.querySelector(".humwindholder").children[2].classList.remove("hiddentemp")
    document.querySelector(".humwindholder").children[1].classList.add("hiddentemp")
  }
})

newLabel222.appendChild(switchInput)
newLabel222.appendChild(span44)
rightDiv.appendChild(newLabel222)
rightDiv.appendChild(newh61)



//------Append right and left div------
containerDiv.appendChild(leftDiv)
containerDiv.appendChild(rightDiv)
document.body.append(containerDiv)




//------Utility Functions------

function convertCountryCode(country){
  let regionNames = new Intl.DisplayNames(["en"], {type: "region"});
  return regionNames.of(country)
}

function convertToFahrenheit(temp){
  return ((temp*9/5) + 32).toFixed(2)
}


function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  return splitStr.join(' '); 
}

function getLocalTime(data) {
  let date = new Date();
  let time = date.getTime();
  let localOffset = date.getTimezoneOffset() * 60000;
  let utc = time + localOffset;
  let localTime = utc + 1000 * data;
  let localTimeDate = new Date(localTime);
  return localTimeDate.toLocaleString();
}

function speedConverterkphtomph(valNum) {
  return (valNum/1.609344).toFixed(2);
}


//------Fetch Data------
async function getWeather(city){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68bab1b38fa2d33c4a202dd867c83df2&units=${units}`
 
  try {
  const response = await fetch(url)
  if(!response.ok){
    throw new Error(response.statusText)
}
const data = await response.json()
const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
if((data.weather[0].icon).slice(-1) == "d"){
  document.querySelector(".localtimeh5").innerText = `Local Time: ${getLocalTime(data.timezone)} (Day)`
} else {
  document.querySelector(".localtimeh5").innerText = `Local Time: ${getLocalTime(data.timezone)} (Night)`
}
document.querySelector(".city-country-h2").innerText = `${data.name}, ${convertCountryCode(data.sys.country)}`


document.querySelector(".infodiv").children[0].children[0].src = icon
document.querySelector(".infodiv").children[0].children[1].innerText = titleCase(data.weather[0].description)
document.querySelector(".infodiv").children[1].innerText = `${data.main.temp.toFixed(2)} ${units === "imperial" ? "°F": "°C"}`
document.querySelector(".infodiv").children[2].innerText = `${convertToFahrenheit(data.main.temp.toFixed(2))} ${units === "imperial" ? "°C": "°F"}`
document.querySelector(".infodiv").children[3].innerText = `(Feels Like:  ${data.main.feels_like.toFixed(2)} ${units === "imperial" ? "°F": "°C"})`
document.querySelector(".infodiv").children[4].innerText = `(Feels Like:  ${convertToFahrenheit(data.main.feels_like.toFixed(2))} ${units === "imperial" ? "°C": "°F"})`


if(data.weather[0].description == "few clouds"){
  document.querySelector(".container").style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../src/images/few-clouds.jpg")'
} else if(data.weather[0].description == "clear sky"){
  document.querySelector(".container").style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../src/images/clear-sky.jpg")'
} else if(data.weather[0].description == "light rain" || data.weather[0].description == "moderate rain"){
  document.querySelector(".container").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../src/images/lightrain.jpg')"
} else if(data.weather[0].description == "heavy rain"){
  document.querySelector(".container").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../src/images/heavy-raincity.jpg')"
} else if(data.weather[0].description.includes("snow")){  
  document.querySelector(".container").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../src/images/snow day.jpg')"
} else if(data.weather[0].description == "broken clouds" || data.weather[0].description == "scattered clouds"){
  document.querySelector(".container").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../src/images/broken-cloud.jpg')"
} else if(data.weather[0].description == "overcast clouds"){
  document.querySelector(".container").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../src/images/overcast-clouds.jpg')"
} else if(data.weather[0].description == "thunderstorm"){
  document.querySelector(".container").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../src/images/thunderstorm.jpg')"
} else if(data.weather[0].description == "mist" || data.weather[0].description == "fog" || data.weather[0].description == "haze"){
  document.querySelector(".container").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../src/images/mist.jpeg')"
} else {
  document.body.style.backgroundColor = "dodgerblue"
} 

document.querySelector(".maxminholder").children[0].innerText = `Min : ${data.main.temp_min.toFixed(2)} ${units === "imperial" ? "°F": "°C"}`
document.querySelector(".maxminholder").children[1].innerText = `Max : ${convertToFahrenheit(data.main.temp_min.toFixed(2))} ${units === "imperial" ? "°C": "°F"}`
document.querySelector(".maxminholder").children[2].innerText = `Min : ${data.main.temp_max.toFixed(2)} ${units === "imperial" ? "°F": "°C"}`
document.querySelector(".maxminholder").children[3].innerText = `Max : ${convertToFahrenheit(data.main.temp_max.toFixed(2))} ${units === "imperial" ? "°C": "°F"}`


document.querySelector(".humwindholder").children[0].innerText = "Humidity: " + data.main.humidity + "%"
document.querySelector(".humwindholder").children[1].innerText = `Wind: ${data.wind.speed} ${units === "imperial" ? "mph": "kph"}`
document.querySelector(".humwindholder").children[2].innerText = `Wind: ${speedConverterkphtomph(data.wind.speed)} ${units === "imperial" ? "kph": "mph"}`
} catch (error) {
  alert(error.message)
  console.log(error.message)
}
}
  

document.body.addEventListener('load', getWeather(startingCity))







