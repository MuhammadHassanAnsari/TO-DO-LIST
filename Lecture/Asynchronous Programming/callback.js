// // // callback hamesha function hota hai 
// // // jo bhi function as a argument pass krte hain wo callback function hota hai 
// // // esa function jo apne aandr aik fuction le as a argument = Higher Order function 

// // function hod(name, callback){
// //     callback(name);
// // }

// // function printname(name){
// //     console.log("Hello ", name)
// // }

// // hod("Hassan", printname);


// // // higherorderfunction(callback)


// // Example 2

// // function calculate(a, b, callback){
// //     callback(a,b)
// // }

// // function sum(a,b){
// //     console.log(a + b);
// // }



// // function sub(a,b){
// //     console.log(a - b);
// // }


// // function mult(a,b){
// //     console.log(a * b);
// // }


// // calculate(5, 3, sum);
// // calculate(5, 3, sub);
// // calculate(5, 3, mult);




// console.log("Fetching Data")

// function fetchdata(processdata) {
//     setTimeout(() => {
//         console.log("Fetching Data sucessfully");
//         processdata()

//     }, 3000)
// }

// function processdata(){
//     console.log("Processing with data...")
// }

// fetchdata(processdata)


// console.log("Some other Tasks...")





// example

// async exaple

// function getdata(data, callback){
//     setTimeout(() => {
//         console.log(data)
//         if(callback){
//             callback()
//         }
   
//     }, 3000);
// }


// console.log("Fetching first data")

// getdata('1st Data', function(){

//     console.log('fetching second data')

//     getdata('2nd Data', ()=>{
//     console.log('fetching third data')

//         getdata('3rd data', ()=>{

//         })
//     })
// })

// getdata('2nd Data')
// getdata('3rd Data')


