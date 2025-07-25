const api = {
    endpoint:"https://api.openweathermap.org/data/2.5/",
    key:"5a67b2a0856b77f33da2a3f3dfb5ffe4"
}


const input = document.querySelector("#input");
input.addEventListener("keypress", enter);

function enter(e){
    if(e.keyCode === 13){
        getInfo(input.value);
    }    
}

async function getInfo(data){
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`)
    const result = await res.json()
    displayResult(result);
}

function displayResult(result){
    let city = document.querySelector("#city");
    city.textContent = `${result.name}, ${result.sys.country}`;

    getOurDate();

    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let condition = document.querySelector("#condition");
    condition.textContent = `${result.weather[0].main}`;

    }

function getOurDate(){
    const myDate = new Date;
    const days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
   
    let day = days[myDate.getDay()];

    let todayDate = myDate.getDate();

    let month = months[myDate.getMonth()];

    let year = myDate.getFullYear();

    let showDate = document.querySelector("#date");
    showDate.textContent = `${day}` + " " + `${todayDate}` + " " + `${month}` + " " + `${year}` 
}



