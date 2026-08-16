let container = document.querySelector(".container");
let paragraph = document.querySelector(".para");


container.addEventListener("click", (event) =>{
    if(event.target.classList.contains("para")){
        event.target.style.textDecoration = "line-through";
    }
})