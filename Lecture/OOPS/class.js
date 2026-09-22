// // class Car{
// //     constructor(name,color,mileage){
// //         this.name = name;
// //         this.color = color;
// //         this.mileage = mileage;
// //     }

// //     start(){
// //         console.log(`${this.name} is starting....`)
// //     }

// //     stop(){
// //         console.log(`${this.name} is stopping....`)
// //     }
// // }


// // let bmw = new Car("BMW","Darkblue",54);
// // let toyota = new Car("Toyota","Silver",24);
// // let bugati = new Car("Bugati","Brown",5);
 


// // console.log(bmw);
// // console.log(toyota);
// // console.log(bugati);





// // FOUR PILAR OF OOPS 

// // 1- Abstraction 

// // class Car {
// //     #fuel = 100;

// //     #burnfuel(){
// //         this.#fuel -= 1;
// //     }


// //     start() {
// //         this.#burnfuel();
// //         console.log("Car is Starting...")
// //     }

// // }


// // let bugati = new Car();
// // bugati.start();
// // console.log(bugati);




// class BankAccount{

//     #balance = 100;

//     constructor(holdersname, balance = 100) {
//         this.holdersname = holdersname;
//         this.#balance = balance;
//     }


//     deposit(){
//         this.#balance += balance;
//     }


//     set Balance(balance){

//         if(isNaN(balance)){
//             console.log("Invalid Balance");
//             return;
//         }
//         console.log("Balance Set Sucessfully");
//         this.#balance = balance;
//     }


//     get balance(){
//         return this.#balance;
//     }

// }

// let hassanaccount = new BankAccount("Hassan", 500);

// // hassanaccount.setBalance(1000);
// // hassanaccount.#balance = 3232; not access because we make it private
// // hassanaccount.deposit(400)
// // console.log(hassanaccount.getbalance());


// 3. Inheritance 


// class Car{
//     constructor(brand,color,battery){
//         this.brand = brand;
//         this.color = color;
//     }


//     start(){
//         console.log(`${this.brand} is starting....`)
//     }
    
//     stop(){
//         console.log(`${this.brand} is stopping....`)
//     }
// }


// class ELectricCar extends Car   {
//     constructor(brand,color,battery){
//         super(brand,color)  // super use kia taake parent class ke constructor ko call kr sake 
//         this.battery = battery;
//     }
//      charging(){
//         console.log(`${this.brand} is charging....`)
//     }
// }ma


// let tesla = new ELectricCar("Tesla", 'Black',99);
// console.log(tesla);





// 4.  Polymorphism --> many forms ---> It allows differnet class to define method with same name but different behaviour.


class MediaPlayer{
    play(){
        console.log("Play Media...")
    }
}

class music extends MediaPlayer{
   play(){
        console.log("Play Music...")
    }
}


class video extends MediaPlayer{
   play(){
        console.log("Play Video...")
    }
}


let o1 = new music();
o1.play();
let o2 = new video();
o2.play();
let o3 = new MediaPlayer();
o3.play();