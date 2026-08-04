let boxes = document.querySelectorAll(".box");

let currentPlayer = "X";
let gameOver = false;
let winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 3, 8]
];

boxes.forEach((boxitem) => {
    boxitem.addEventListener("click", () => {
        if (gameOver) {
            return;
        }
        if (boxitem.innerText === "") {
            boxitem.innerText = currentPlayer;
        }

        if (currentPlayer == "X") {
            currentPlayer = "O";
        }

        else {
            currentPlayer = "X";
        }

        let firstBox;
        let secondBox;
        let thirdBox;

        winningCombination.forEach((win) => {


            firstBox = boxes[win[0]].innerText;
            secondBox = boxes[win[1]].innerText;
            thirdBox = boxes[win[2]].innerText;

            if (firstBox == secondBox && secondBox == thirdBox && firstBox != "") {
                alert("Winner is " + firstBox);
                gameOver = true;
            }
        });

    })


});








