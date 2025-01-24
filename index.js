let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset")
let newgamebtn = document.querySelector("#new-btn")
let msgcon = document.querySelector(".msg-container")
let msgte = document.querySelector("#msg")
let turnO = true;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText ="O"
            turnO=false;
        } else {
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
    });
    
});
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcon.classList.add("hide");
};


const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner= (winner) => {
    msgte.innerText=`Congratulations, Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(let p of winPatterns) {
        let pos1 = boxes[p[0]].innerText;
        let pos2 = boxes[p[1]].innerText;
        let pos3 = boxes[p[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner", pos1)
                showWinner(pos1);
            }
        }
    }
};

newgamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame );

