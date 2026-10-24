// let username = sessionStorage.setItem("name", "Hassan");
// // sessionStorage.setItem("city", "Karachi");
// // console.log(sessionStorage.getItem("city"));
// // sessionStorage.setItem("city", "Islamabad");
// // console.log(sessionStorage.setItem("city"));


// // console.log(localStorage.removeItem("name"));
// // localStorage.clear(username)


// // localStorage.setItem("city", "karachi");
// // console.log(localStorage.getItem("city"));


// localStorage.setItem("city", "Lahore");
let user = {
    name: "Hassan",
    city: "Lahore"
};

localStorage.setItem("userdata", JSON.stringify(user));
let a = JSON.parse(localStorage.getItem("userdata"));
a.city = "Lahore";


console.log(a.name);
console.log(a.city);

