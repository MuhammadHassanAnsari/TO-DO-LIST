// console.log(parseInt('10'))
// console.log(Number('12343px'))


// q 17


// console.log(0.1 + 0.2 !== 0.3);
// due to floating point issue


// q 18

// Handle precision

// let sum = Number((0.1 + 0.2).toFixed(2));

// console.log(sum !==0.3)
// const Decimal = require('decimal.js');

// let num1 = new Decimal(0.1);
// let num2 = new Decimal(0.2);

// let sum = num1.plus(num2);

// console.log(sum.toString());


// q 19


// slice string aur array dono ke sath kamm krta hai lekin splice sirf array ke sath kr skta hai

// let string = 'mansds';
// let arr = ['a','m','s','d','w']
// // console.log(string.slice(1, 2 + 1));
// let test = arr.splice(1,2, 'z','y')  // return delete value and change original array
// console.log(test)
// console.log(arr)



// q21

// reverse wording


// let sentence = "I am Hassan";

// let finalresult = sentence.split(' ').map(word =>{
//    let reverse =  word.split('').reverse().join('');
//     return  (reverse)
// }).join(' ')


// console.log(finalresult)



// q22


// let arr = [2, 4, 5, 6, 'sd', 'ds', 4, 'vre'];
// let sum = 0;


// arr.forEach(item => {
//     if (typeof item === 'number') {
//         sum += item;
//     }
// });

// console.log(sum)



// q23

// let num = 1243;

// console.log(Number.isInteger(num))
// console.log(num % 1 === 0)


// q24 


function reversenumber(num) {
    return Number(num.toString().split('').reverse().join(''));

}


let reverse = reversenumber(1234567)
console.log(reverse)