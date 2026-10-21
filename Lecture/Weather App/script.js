let searchinput = document.querySelector("#search-city");
let searchbtn = document.querySelector(".search-btn");
let tempreaturetext = document.querySelector(".tempreature");
let humditytext = document.querySelector(".humidity");
let windtext = document.querySelector(".wind");
let feeltemptext = document.querySelector(".feel-temp");
let cityname = document.querySelector(".showcity");


searchbtn.addEventListener("click", function () {
    // console.log("Search Btn Clicked");
    let searchinputvalue = searchinput.value;
    // console.log(searchinputvalue);
    if (searchinputvalue === "") {
        console.log("Enter City Name");
    } else {
        console.log(searchinputvalue);
    }


    async function fetchdata() {

        // logitude and latitiude api 

        let response = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${searchinputvalue}&count=10&language=en&format=json`
        );

        let data = await response.json();
        console.log(data);
        if (!data.results[0]) {
            console.log("City Not Found");
        } else {
            // console.log(data.results[0].latitude);
            // console.log(data.results[0].longitude);
            forecastweather(data.results[0].latitude, data.results[0].longitude);
            
            // city name
            let cityvalue = data.results[0].name + ", " + data.results[0].country;

            cityname.textContent = cityvalue;
            console.log(cityvalue);

        }

    }

    fetchdata();


    async function forecastweather(latitude, longitude) {
        let response1 = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&utm_source=chatgpt.com`
        );

        let data1 = await response1.json();
        console.log(data1);

        // tempreature

        let tempreaturevalue = data1.current.temperature_2m + "°C";
        // console.log(tempreaturevalue);

        tempreaturetext.textContent = tempreaturevalue;
        console.log(tempreaturetext.textContent)


        // humdity
        let humdityvalue = data1.current.relative_humidity_2m;
        // console.log(humdityvalue)

        humditytext.textContent = humdityvalue + "%";
        console.log(humditytext.textContent);

        // wind speed 
        let windvalue = data1.current.wind_speed_10m;
        // console.log(windvalue);
        windtext.textContent = windvalue + " km/h";
        console.log(windtext.textContent);


        // feel like tempreature
        let feelvalue = data1.current.apparent_temperature + "°C";

        feeltemptext.textContent = feelvalue;
        console.log(feeltemptext);



    }


})