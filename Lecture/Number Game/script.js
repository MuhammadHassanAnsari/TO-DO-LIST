let container = document.querySelector('.numbercontainer');
let timerValue = document.querySelector('.timervalue');
let tarval = document.querySelector('.targetvalue')
let scoreval = document.querySelector('.scorevalue')
let numberofcircle = 84;
let timer = 5;
let targetnumber;

timerreset();
generatetarget();
generatenumber();
starttimer();


function restartgame() {
    timerreset();
    generatetarget();
    generatenumber();

    scoreval.innerText = 0;
}

function timerreset() {
    timer = 5;
    timerValue.innerText = timer;
}

function starttimer() {
    setInterval(() => {
        if (timer <= 0) {

            container.innerHTML = `
        <div> Game Over </div>
        <button onclick=restartgame()>Reset Game</button>
        `;
            return;
        }
        timer--;
        timerValue.innerText = timer;

    }, 1000);
}



function generatetarget() {
    targetnumber = Math.ceil(Math.random() * 10);
    tarval.innerText = targetnumber;
    // console.log(targetnumber)
}


function generatenumber() {
    container.innerHTML = ``;
    for (let i = 0; i <= numberofcircle; i++) {
        // <div class="numberbox">2</div>

        let divElem = document.createElement('div');
        divElem.className = 'numberbox';
        let ranNum = Math.ceil(Math.random() * 10)
        divElem.innerText = ranNum;
        // console.log(divElem)

        container.append(divElem)
    }
}



container.addEventListener("click", function (event) {
    if (event.target.className === "numberbox") {
        let number = Number(event.target.innerText)
        if (targetnumber === number) {
            let sv = Number(scoreval.innerText)
            sv += 10;
            scoreval.innerText = sv;
        }
        generatetarget();
    }
})


