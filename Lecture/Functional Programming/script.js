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



// Avoid shared staate

