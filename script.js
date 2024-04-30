let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const disabledBoxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
};
const enabledBoxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWin();
    });
});

const checkWin = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 !="" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                alert("Congragulations you have successfully win the game!");
            } else if (pos1 !== pos2 && pos2 !== pos3 && pos1 !== pos3 && pos3 !== pos1){
                alert("The game is tie");
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congragulations, You are a winner ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);