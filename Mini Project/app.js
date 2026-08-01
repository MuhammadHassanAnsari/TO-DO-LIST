const inputareas = document.getElementById("inputarea");
const addbtn = document.getElementById("add");
const removelaststudent = document.getElementById("removelast");
const removefirststudent = document.getElementById("removefirst");
const addfirststudent = document.getElementById("addfirst");
const replacestudent = document.getElementById("replace");
const search = document.getElementById("studentsearch");
const studentlists = document.getElementById("studentlist");
const delbtn = document.getElementById("delete");

let students = ["Ali", "Ahmed", "Hassan", "Usman", "Bilal"];


function showstudent() {

    studentlists.innerHTML = "";

    students.forEach((students) => {
        let list = document.createElement("li");
        list.classList.add("student-item");
        list.textContent = "👤 " + students;
        studentlists.appendChild(list);
    });
};


showstudent();


function addstudentbtn() {
    addbtn.addEventListener("click", () => {
        let value = inputareas.value;

        if (inputareas.value === "") {
            return;
        } else {
            students.push(value);
        }

        showstudent();

        inputareas.value = "";
    });
};

addstudentbtn();

function removelaststudentbtn() {
    removelaststudent.addEventListener("click", () => {
        students.pop();
        showstudent();
    });
};

removelaststudentbtn();

function removefirststudentbtn() {
    removefirststudent.addEventListener("click", () => {
        students.shift();
        showstudent();
    });
};

removefirststudentbtn();


function addfirststudentbtn() {
    addfirststudent.addEventListener("click", () => {
        let checkvalue = inputareas.value;

        if (inputareas.value === "") {
            return;
        } else {
            students.unshift(checkvalue);
        }

        showstudent();

        inputareas.value = "";
    });
};

addfirststudentbtn();


function replacestudentbtn() {
    replacestudent.addEventListener("click", () => {
        let checkvalue1 = inputareas.value;

        if (inputareas.value === "") {
            return;
        } else {
            students.splice(1, 1, checkvalue1);
        }

        showstudent();
        inputareas.value = "";
    })
}

replacestudentbtn();

function studentsearchbtn() {
    search.addEventListener("click", () => {
        let checkvalue2 = inputareas.value;

        let user = students.find((students) => {
            return students === checkvalue2;
        })

        if (user === checkvalue2) {
            alert("Find");
        } else {
            alert("Not Found");
        };
    });
};

studentsearchbtn();


function deletebtn() {
    delbtn.addEventListener("click", () => {
        let checkvalue4 = inputareas.value;

        let user1 = students.findIndex((students) => {
            return students === checkvalue4;
        })

        if(user1 !== -1){
            students.splice(user1, 1);
        }

        showstudent();
    })
};

deletebtn();