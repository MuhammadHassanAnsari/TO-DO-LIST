let container = document.querySelector(".container");
let boxes = document.querySelector(".box");


// container.childNodes.forEach((element) => {
//     element.addEventListener("click", ()=>{
//         console.log(element.innerText)
//     })
// });


container.addEventListener("click", (event)=>{
    // console.log(container.innerText);
    let targetelement = event.target;
    if(targetelement.className === 'box'){
        console.log(event.target.textContent)
    }
    
});


