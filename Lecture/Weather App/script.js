let searchinput = document.querySelector("#search-city");
let searchbtn = document.querySelector(".search-btn");
let tempreaturetext = document.querySelector(".tempreature");


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
        
        let tempreaturevalue = data1.current.temperature_2m;
        // console.log(tempreaturevalue);

        tempreaturetext.textContent = tempreaturevalue;
        console.log(tempreaturetext.textContent)



    }


})