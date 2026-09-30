// // promise = is an special object in JS that represent a task that will finidh in future. Constructor function hai
// let p1 = new Promise((resolve, reject)=>{
//     // console.log('promise')
//     // resolve("Data fetch Sucessfully")
//     reject("Data is not fetch")
// });

// console.log(p1)


let p1 = new Promise((resolve, reject)=>{
    console.log("This is a Promise")
})


// then

p1.then((data)=>{
    console.log(data)
    
})