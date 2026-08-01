const inputarea = document.getElementById("input");
const button = document.getElementById("btn");
const emptdiv = document.querySelector("div");
const counter = document.getElementById("counter");

let count = 0;

button.addEventListener("click", () => {

    if (inputarea.value === "") {
        alert("Please Enter a Task");
        return;
    }


    const p = document.createElement("p");
    p.innerText = inputarea.value;

    emptdiv.append(p);
    count++;
    counter.textContent = "Tasks: " + count;
    inputarea.value = "";



    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    p.append(deleteBtn);

    deleteBtn.addEventListener("click", () => {
        p.remove();
        count--;
        counter.textContent = "Tasks: " + count;
    });



    const completebutton = document.createElement("button");
    completebutton.textContent = "Complete";
    p.append(completebutton);

    completebutton.addEventListener("click", () => {
        p.classList.toggle("completebutton");
    });
});
