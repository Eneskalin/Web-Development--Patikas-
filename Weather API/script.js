const url='https://api.openweathermap.org/data/2.5';
const key='************************************';
const locateurl='https://api.openweathermap.org/geo/1.0/direct';
let longitute;
let latitude;
let cityName;
let temperature;
let weather;
let tempMax;
let tempMin;


const setQuery = (e)=>{
    if(e.keyCode === 13){
        getResult(searchBar.value)

    }
};

const getResult = (cityname)=>{
    const query = `${locateurl}?q=${cityname}&limit=5&appid=${key}`;
    fetch(query)
    .then(response=>{
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(displayResult)
    .catch(err => console.error(err));
}

const searchBar=document.getElementById("searchBar");
searchBar.addEventListener("keypress",setQuery);

const displayResult=(result) =>{
console.log(result);
const firstResult=result[0];
const country=firstResult.country;
cityName=firstResult.name;
latitude=firstResult.lat;
longitute=firstResult.lon;
getWeather(latitude, longitute);
}

const getWeather=(latitude,longitute)=>{
    const query=`${url}/weather?lat=${latitude}&lon=${longitute}&appid=${key}&units=metric&lang=TR`;
    fetch(query)
    .then(response=>{
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(displayWeather)
    .catch(err => console.error(err));
}


const displayWeather = (result) => {
    console.log(result); 
    temperature = result.main.temp; 
    weather = result.weather[0].description; 
    tempMax=result.main.temp_max;
    tempMin=result.main.temp_min;

    
    console.log(`Sıcaklık: ${temperature}K, Durum: ${weather}`);
    printHtml()
};



function printHtml(){
    const city=document.querySelector('.cityname');
    const temp=document.querySelector('.temp');
    const desc=document.querySelector('.desc');
    const maxMin=document.querySelector('.minmax');
    city.textContent=`${cityName}`;
    temp.textContent=`${temperature}°C  `;
    desc.textContent=`${weather}`;
    maxMin.textContent=`<${tempMin}°C / ${tempMax}°C< `
}


