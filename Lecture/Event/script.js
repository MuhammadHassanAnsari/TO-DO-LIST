let grandparent = document.querySelector("#grandparent")
let parent = document.querySelector(".parent")
let child = document.querySelector(".child")

// grandparent.addEventListener("click", function(){
//     alert("grandparent me click howa")
// }, true)


// parent.addEventListener("click", function(){
//     alert("parent me click howa")
// }, true)



// child.addEventListener("click", function(){
//     alert("Child me click howa")
// }, true)


// // let parent = document.querySelector(".parent");

// // parent.addEventListener("click", function (event) {
// //     console.log(event.target);
// // });


// let parent = document.querySelector(".parent");

// parent.addEventListener("click", function (event) {
//     console.log(event);
// });






// grandparent.addEventListener("click", function(event){
//     console.log("Grandparent")
//     console.log(event.target)
//     console.log(event.currentTarget)
// })


// parent.addEventListener("click", function(event){
//     console.log("parent")
//     console.log(event.target)
//     console.log(event.currentTarget)

// })
    


// child.addEventListener("click", function(event){
//     console.log("child")
//     console.log(event.target)
//     console.log(event.currentTarget)

// })


// this parent ko show krta he aagr function () likha he tu event.target ki taeah kamm krega


// parent.addEventListener("click", function(event){
//     console.log("parent")
//     console.log(event.target)
//     console.log(event.currentTarget)
//     console.log(this)

// })


// Event Propagation


grandparent.addEventListener("click", function(event){
    console.log("Grandparent")
    console.log(event.target)
    console.log(event.currentTarget)

})


parent.addEventListener("click", function(event){
    console.log("parent")
    console.log(event.target)
    console.log(event.currentTarget)
    event.stopImmediatePropagation();

})


// stopImmediatePropagation & stopropagation 

// stopPropagation = Event ko next element tak mat jaane do.
// stopImmediatePropagation = Event ko aage bhi mat jaane do aur isi element ke baaki listeners ko bhi mat chalne do.




child.addEventListener("click", function(event){
    console.log("child")
    console.log(event.target)
    console.log(event.currentTarget)

})