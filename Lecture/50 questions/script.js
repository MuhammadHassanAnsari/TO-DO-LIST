// // q1 
// let lastelearray = [32,6,43,4,76,23]

// function getlastelement (localarr){
//         return localarr[localarr.length - 1];
//         // return localarr.pop();  se original array change hota hai
// }

// let lastarray = getlastelement(lastelearray)
// console.log(lastarray);

// // q2

// let arr1 = [2,3,4,5,6]
// let arr2 = [21,31,443,54,65]


// // method 1

// let cominaationarr = arr1.concat(arr2)
// console.log(cominaationarr)

// // method 2 

// let comiarr= [...arr1, ...arr2];
// console.log(comiarr)

// // q3

// let randomnum = Math.floor(Math.random() * 19);
// console.log(randomnum)


// // q4

// let arr = [1,3,45,56,"a","b",56];

// let resultarr = arr.filter((element) =>{
//         // if(typeof element === "string"){
//         //     return true;
//         // } else{
//         //     return false;
//         // }


//         return typeof element === "string";
// })
// console.log(resultarr);



// q5

// find max number 

// let arrr = [2,34,5,7,7,89,90] 


// q6

// let obj = {
//     age : 21,
//     name : 'MKL',
// }

// let getobjectlenght = (object) =>{
//     return Object.keys(object).length;
// } 

// let lenght = getobjectlenght(obj);
// console.log(lenght)



// q7


// let arr = [
//     {
//         name: "Ali",
//         gender: "male",
//     },

//     {
//         name: "Muskan",
//         gender: "female"
//     },

//     {
//         name: "Hassan",
//         gender: "male",
//     },
// ]


// let resultarr = arr.filter(obj => {
//     return (obj.gender === "male");
// })

// console.log(resultarr)




//  q8

// let arr = ["h","sd","we","sd"];

// let resultarr = arr.map(elem =>{
//     return(elem.toUpperCase());
// })

// console.log(resultarr)



// q9

// let obj = {

// }

// let keysarray = Object.keys(obj);

// let emptyarr = keysarray.length < 1;
// console.log(emptyarr)


// q10


// let arr= [23,2,12,43];

// let finalarr = arr.map(arr =>{
//     return arr * 2;
// })

// console.log(finalarr)




// q11

// arr to string into single sepreate comma    

// let arr = [1,23,43,"mks",'sd'];

// let string = arr.join();

// console.log(arr)




// q12


// let arr=  [1,23,4,5, ['a','v','c'], 1,2];

// // arr.splice(4,1, ...arr[4])

// // console.log(arr)

// console.log(arr.flat(1))


// q13

// let arr = [2, 3, 4, 5, 'a', 'd', 7, 3]

// function checknumberrr(localarr) {
//     // let isnumber = false;
//     // arr.forEach(element => {
//     //     if (typeof element !== 'number') {
//     //         isnumber = false;
//     //     }
//     // });

//     // return isnumber;


//     // method 2

//     let isnumber = localarr.every(elem => typeof elem === 'number')
//     return(isnumber)

// }



// let isallnumber = checknumberrr(arr);
// console.log(isallnumber)



// q14



    // function isPrime(num){

    //     if(num === 0 || num === 1){
    //         return false;
    //     }

    //     for(let i = 2; i <= Math.sqrt(num); i++) {
    //         if(num % i === 0){
    //             return false;
    //         }
    //     }

    //     return true;
    // }


    // console.log(isPrime(5));


// q15

function removeduplicate(arr) {
//    let set = new Set(arr);
//    return[...set]

 let resultantarr =  arr.filter((elem, index) =>{
        return arr.indexOf(elem) === index ;  
    })

    return resultantarr;
}

// Set me duplicate value hat jati hai 



let resultarr = removeduplicate([1,2,3,4,4,5,6,6,7])
console.log(resultarr)