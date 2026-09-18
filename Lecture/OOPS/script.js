// // let date = new Date();
// // // console.log(date.toLocaleString());

// BASIC OF OOPS


// OBJECT LITERAL --> SIRF AIK OBJECT HI BANA SKTE MULTIPLE NHI KR SKTE

// let Student = {
//     myName : "Hassan",
//     age : "21",
//     passion : "Student",  // property jo value define kr rhe hai
//     introduceMySelf : introduce // Method obj ke andr ho function assign kr rhe hai
//         // this represent student  means Object

// }


// let Student0 = {
//     myName : "Hassan",
//     age : "21",
//     passion : "Student",  // property jo value define kr rhe hai
// introduceMySelf : function(){
//     console.log(`${this.name}, ${this.age}, ${this.passion}`)
// } // Method obj ke andr ho function assign kr rhe hai
//         // this represent student  means Object

// }


// let Student2 = {
//     myName : "Rafay",
//     age : "21",
//     passion : "Student",  // property jo value define kr rhe hai
//     introduceMySelf : introduce  // Method obj ke andr ho function assign kr rhe hai
//         // this represent student  means Object

// }


// let Student3 = {
//     myName : "Ali",
//     age : "11",
//     passion : "Student",  // property jo value define kr rhe hai
//     introduceMySelf : introduce // Method obj ke andr ho function assign kr rhe hai
//         // this represent student  means Object

// }


// function introduce(){
//         console.log(`My Name is ${this.myName}, my age is ${this.age}, my passion is ${this.passion}`)

// }

// Student.introduceMySelf()
// Student2.introduceMySelf()
// Student3.introduceMySelf()



// FACTORY FUNCTION



// function Student(name, age, passion) {
//     return {

//         myName: name,
//         age: age,
//         passion: passion,
//         introduceMySelf: function () {
//             console.log(`${this.myName}, ${this.age}, ${this.passion}`)

//         }
//     }
// }


// let s1 = Student("Ali", "11", "Cooking");
// let s2 = Student("Rafay", "21", "Cricket");
// s1.introduceMySelf();
// s1.introduceMySelf();



// Constructor Function 


// function Student(name,age,passion){
//        this.name = name
//        this.age = age
//        this.passion = passion

//        return this;
// }

// // new --> define make new memory allocation krta hai & new object banata hai then return krta hai 

// let s1 = new Student("Hassan",23,Student);
// console.log(s1)


// let s2 = new Student("Ali",32,Student);
// console.log(s2)


// Class Syntax (es6)

// class Student{
//     name = "Hassan";
//     age = 33;
//     passsion = "Student";


//     // bulit-in constructor function hai jis main value assign kr skte hain.

//     constructor(name, age, passsion){
//         this.name = name,
//         this.age = age,
//         this.passsion = passsion
//     }
// }


// let s1 = new Student("Hassan", 21, "Student");
// let s2 = new Student();


// console.log(s1)