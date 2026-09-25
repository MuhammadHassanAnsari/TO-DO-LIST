// // console.log("hello")
// // //  console.log("Hello ")
// // //  console.log("world")

// // //  for(let i = 0; i <= 400000; i++){
// // //     console.log("task", i)
// // //  }

// // //  console.log("Task 3")
// // //  console.log("Task 4")



// // setTimeout(() => {
// //     console.log("Asyn task");
// // }, 4000);


// // console.log("Second Task")


// setTimeout(() => {
//     console.log("Hello")
// }, 7000); // 1s - 2000ms



// setTimeout(() => {
//     console.log("World")
// }, 6000); 



// setTimeout(() => {
//     console.log("hello world")
// }, 4000); 


// synchronous programming run line by line hr aik operation phele khatam hoga phir dosra hoga start.
// asyncronous programming jisme time-taking task ka wait kiye bina JavaScript baaki code ko execute karta hai and doesnot block the flow.

// console.log("Hey guys do you want coffee");
// console.log("Hassan Serve Coffee")



// setTimeout(()=>{
//     for(let i = 0; i <= 40000; i++){
//     console.log('person', i )
// }

// }, 100)


// console.log("Hassan Learn JS")




// Question
// WHy do we get a promise instead of data??
// Ans : fetching data takes time
// JS dont want stop everything, so instead it give promise “I'll give you the data later, once it arrives.”

console.log("Hello")

async function fetchdata(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
console.log(await response.json()) 
}


fetchdata()


// API call are asynchronus in nature and not block other remaining tasks. 