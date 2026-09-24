let searchfeild = document.getElementById('search');
let searchfeildbtn = document.querySelector('searchbtn');


async function fetchdata() {

let findloccation = searchfeild.value;
  let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=f1d0de9299164e0983b193025262409&q=${findloccation}&aqi=yes`);

    let data = await response.json();

    console.log(data);
}

searchfeild.addEventListener("click", fetchdata());