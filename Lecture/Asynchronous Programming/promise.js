// // // promise = is an special object in JS that represent a task that will finidh in future. Constructor function hai
// // let p1 = new Promise((resolve, reject)=>{
// //     // console.log('promise')
// //     // resolve("Data fetch Sucessfully")
// //     reject("Data is not fetch")
// // });

// // console.log(p1)


// // let p1 = new Promise((resolve, reject)=>{
// //     console.log("This is a Promise")

// //     // resolve({
// //     //     name: 'Hassan'
// //     // })

// //     reject("Something went wrong..!!")
// // })


// // then  --> data ane ke bad

// // p1.then((data)=>{
// //     console.log(data)

// // })

// // // catch --> error catch krta hai 

// // p1.catch((error)=>{
// //     console.log(error)
// // })



// // Right method 
// //     |
// //     |
// //     |
// //     v

// // p1.then((data)=>{
// //     console.log(data)
// // }).catch((err)=>{
// //     console.log(err)
// // })



// let p1 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         reject  ({
//             namea : "HASSAN ANSARI",
//         })
//     }, 5000);
// })

// // console.log(p1)

// p1.then((data)=>{
//     console.log(data)
// }).catch((err) =>{
//     console.log(err)
// })



function fetchdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "Hassan",

            })
        }, 3000);
    })
}


function fetchdata2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                product: "Samsung s23",

            })
        }, 5000);
    })
}


// let result = fetchdata()
console.log("Fetching Data...")
// console.log(result)

// result.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log("Something Went Wrong!...", err)
// })



fetchdata().then((data) => {
    console.log("data is achieve", data)
    fetchdata2().then((data) => {
        console.log("Data2 is achieve", data)

    })
})
