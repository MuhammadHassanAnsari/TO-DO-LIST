// let grandparent = document.querySelector("#grandparent")
// let parent = document.querySelector(".parent")
// let child = document.querySelector(".child")

// grandparent.addEventListener("click", function(){
//     alert("grandparent me click howa")
// }, true)

// parent.addEventListener("click", function(){
//     alert("parent me click howa")
// }, true)



// child.addEventListener("click", function(){
//     alert("Child me click howa")
// }, true)


// let parent = document.querySelector(".parent");

// parent.addEventListener("click", function (event) {
//     console.log(event.target);
// });


// let parent = document.querySelector(".parent");

// parent.addEventListener("click", function (event) {
//     console.log(event.currentTarget);
// });


parent.addEventListener("click", () => {
    console.log(this);
});