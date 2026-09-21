// function Student (name, age){
//     this.name = name;
//     this.age = age;
//     // this.introduceMySelf = function(){
//     //     console.log(`My name is ${this.name}, age is ${this.age}`);
//     // }
// }

// Student.prototype.introduceMyself = function(){
//        console.log(`My name is ${this.name}, age is ${this.age}`);
//      }

// console.log(Student.prototype)
// let s1 = new Student("Hassan", 21);
// let s2 = new Student("Ali", 22);
// console.log(s1);

// // s1.introduceMySelf();

// console.log(s2);
// // s2.introduceMySelf();

// function BankAccout(holdername, balance = 0) {
//     this.holdername = holdername;
//     this.balance = balance;

//     this.deposit = function(balance) {
//             // this.balance += balance;
//             console.log("deposit ", balance)
//     }


//     //  this.withdraw = function(balance) {
//     //         this.balance -= balance;
//     // }
// }


// // BankAccout.prototype.deposit = function (balance) {
// //     this.balance += balance;

// // }


// // BankAccout.prototype.withdraw = function (balance) {
// //     this.balance -= balance;
// // }


// console.log(BankAccout.prototype)

// let hassanaccount = new BankAccout('Hassan', 200);
// // let rafayaccount = new BankAccout('Rafay', 1200);
// // let ayanaccount = new BankAccout('Ayan', 2000);


// console.log(hassanaccount);
// // console.log(rafayaccount);
// // console.log(ayanaccount);



class Student {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduceMyself(){
        console.log(`My name is ${this.name}, age us ${this.age}`);
    }
}


let s1 = new Student("Ali", 21);
console.log(s1)