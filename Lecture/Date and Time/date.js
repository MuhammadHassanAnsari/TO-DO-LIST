// let date = new Date('2025/12/04 06:34:31');
// console.log(date);


// let date1 = new Date("Dec 25, 2026 06:21:43");
// console.log(date1);


// // ISO STANDARD
// let date2 = new Date("2026-05-14T12:23:43Z");
// console.log(date2);




// let date3 = new Date(2026, 4, 12, 0, 0);
// console.log(date3);



// DATE PROPERTIES 

// let date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTimezoneOffset() / 60);   // UTC - local is leye - me arha hai or minute mai deta hai dicide by 60 krne sai hours mai deta hai

// date.setFullYear('2023');
// date.setMonth(0);
// date.setDate(12);

// console.log(date);


// let date = new Date();
// console.log(date.getTime() / 1000 / 60 / 60 / 24 / 365);


// let timestamp = Date.now()
// console.log(timestamp)


// Time Stamp Calculation

// console.log(Date.now());

// let date = new Date(1787251264109);


// console.log(date.toLocaleString());

// mili sec --> sec 


// let currentime = Date.now(); 
// let tenmin = 1000 * 60 * 10; 

// let updatetime = currentime + tenmin; 
// console.log(updatetime); 

// let date = new Date(updatetime);    
// console.log(date.toLocaleString());



// Difference b/w dates 

// METHOD 1

let date1 = new Date("2025-01-20T00:00:00")
let date2 = new Date("2023-01-20T00:00:00")

// let datedifference = date1.getFullYear() - date2.getFullYear();
// console.log(datedifference);

let dateinmilisec = date1.getTime() - date2.getTime();
// console.log(dateinmilisec)

console.log(dateinmilisec / 1000);               //  sec change
console.log(dateinmilisec / 1000 / 60);           //  min change
console.log(dateinmilisec / 1000 / 60 / 60);         //  hr change
console.log(dateinmilisec / 1000 / 60 / 60 / 24);      //  day change
console.log(Math.floor(dateinmilisec / 1000 / 60 / 60 / 365));     //  year change



// Human readable

let milisec = 34623;

let min = Math.round(milisec/(1000/60));
console.log(min)

let remainingsec = ((milisec % 6000) / 1000);
console.log(Math.floor(remainingsec));
