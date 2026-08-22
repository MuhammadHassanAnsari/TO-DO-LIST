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

let obj = {
    age : 21,
    name : 'MKL',
}

let getobjectlenght = (object) =>{
    return Object.keys(object).length;
} 

let lenght = getobjectlenght(obj);
console.log(lenght)
