let popbutton = document.querySelector("#popbtn");
let popupcontainer = document.querySelector(".popup");
let container = document.querySelector(".container");
let crossBtn = document.querySelector(".cross");
let okBtn = document.querySelector(".ok");




popbutton.addEventListener("click", ()=>{
      popupcontainer.style.display = "block";
      popbutton.style.display = "none";
})


crossBtn.addEventListener("click", () =>{
    popupcontainer.style.display = "none";
      popbutton.style.display = "block";

})

okBtn.addEventListener("click", () =>{
    popupcontainer.style.display = "none";
      popbutton.style.display = "block";
    
})

container.addEventListener("click", ()=>{
    popupcontainer.style.display = "none";
      popbutton.style.display = "block";

})

popupcontainer.addEventListener("click", (event) => {
    event.stopPropagation();
});