/// Pure Function

// function sum(a, b){
//     let sum =  a + b;
//     console.log(sum)
// }

// sum(1,5)



// // impure function

// let total = 0;


// function increment() {
//     total++;
// }


// increment();



/// Imputability
// do not modify existing data

// let str = "mansfd";
// let xeroindex = str[0];
// console.log(xeroindex);
// console.log(str);


// let arr =   [1,2,3,4,5];
// arr[0] = 100;
// console.log(arr)



// let obj = {
//     age : 21,
//     name : "Ali"
// }


// function replacename(name){
//     // obj.name = name;
//     let newobj = {...obj, name} ;
//     return newobj;
// }

// let replacedobj =  replacename("Hassan");

// console.log(replacedobj)




// const list = ["Milk", "Bread"]

// function additem(item) {
//     const newlist = { ...list, item };
//     return newlist;
// }

// let newlist = additem("Meat");
// // console.log(list)
// console.log(newlist)

// let list = ["Milk", "Bread","Meat"]


// function removelastitem(list){
//     let newlist = list.slice(0,-1);
//     return newlist;
// }


// let newitem = removelastitem(list);
// console.log(newitem)
// console.log(list)



// Avoid shared state ---> Ca lead to bug
// let total = 0;

// function addamount(amount) {
//     total += 100;
// }


// addamount(100)
// console.log(total)



// Side state
// function capitalizeFirstletter(str) {
//   let newStr = str.CharAt(0).toUpperCase() + str.slice(1);
//     return newStr;
// }
// let newStr = capitalizeFirstletter("hello");
// console.log(newStr);



// resuse and compose logic


// let name = "Hassan Ansari";


// let tolower = str => {
//     return str.toLowerCase()
// }


// let removespace = str => {
//     return str.replaceAll(' ', "");
// }


// let addAttherate = str => {
//     return "@" + str;
// }

// function createusername(str) {

//     // return tolower(str);
//     // return removespace(tolower(str));
//     return addAttherate(removespace(str));


// }

// let result = createusername(name);
// console.log(result);



// Dont Iterate

// let arr = [1, 2, 5, 10, 8, 12, 13, 11];
// let even = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         even.push(arr[i]);
//     }
// }


// // Most easy and right method
// let evenarr = arr.filter(elem => {
//     return elem % 2 === 0;

// })
// console.log(even)
// console.log(evenarr)





// loose cupling  means how dependent one piece of code is on another

// more dependent = tight coupling
// less dependent = losse coupling


// function fetchdata(fn){
//     let endpoint = "https://www.google.com";
//     fn(endpoint);
// }


// function getuser(endpoint) {
//     fetch(`${endpoint}/user`)
// }


// function getProduct(endpoint) {
//     fetch(`${endpoint/product}`)
// }

// fetchdata(getProduct);




// Notification System 
let user = {
    name: "Hassan",
    Email: "hassan@gmail.com",
    Phone: 0345678932,
}



// function sendEmail(user){
//     console.log("Email send", user.Email)
// }


// function sendSms(user){
//     console.log("SMS send", user.Phone)
// }


// function whatsSMS(user){
//     console.log("Msg send to whatsapp", user.Phone)
// }
// sendEmail(user);
// sendSms(user);
// whatsSMS(user)


// function sendmessage(msg, sendto) {
//     console.log(`${msg} ${sendto}`)
// }


// sendmessage("Email send to", user.Email);
// sendmessage("SMS send to", user.Phone);
// sendmessage("Whatsapp send to", user.Phone);




// function sendEmail(user, notifyfn) {
//     console.log("Email send", user.Email)
// }


// function sendSms(user) {
//     console.log("SMS send", user.Phone)
// }


// function whatsSMS(user) {
//     console.log("Msg send to whatsapp", user.Phone)
// }



// function sendmessage(user, notifyfn) {
//     console.log("Since, You are Authoried");
//     notifyfn(user);
// }

// let user1 = {
//     name: "Ali",
//     Email: "ali21@gmail.com",
//     Phone: 4356784333,
// }


// let user2 = {
//     name: "Bilal",
//     Email: "bilal211@gmail.com",
//     Phone: 4356784333,
// }


// sendmessage(user1, sendEmail);
// sendmessage(user2, sendSms);


// first-class & higher order function 


function greethello() {
    return "Hello"
}


function greetewithname(fn, name) {
    return fn() + " " + name;
}


let result = greetewithname(greethello, "Hassan")
console.log(result);
