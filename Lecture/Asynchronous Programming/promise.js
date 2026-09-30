// // promise = is an special object in JS that represent a task that will finidh in future. Constructor function hai
// let p1 = new Promise((resolve, reject)=>{
//     // console.log('promise')
//     // resolve("Data fetch Sucessfully")
//     reject("Data is not fetch")
// });

// console.log(p1)


let p1 = new Promise((resolve, reject)=>{
    console.log("This is a Promise")

    // resolve({
    //     name: 'Hassan'
    // })

    reject("Something went wrong..!!")
})


// then  --> data ane ke bad

// p1.then((data)=>{
//     console.log(data)
    
// })

// // catch --> error catch krta hai 

// p1.catch((error)=>{
//     console.log(error)
// })



// Right method 
//     |
//     |
//     |
//     v

p1.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})