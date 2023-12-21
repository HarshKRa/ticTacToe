let gameboxes = document.querySelectorAll(".gamebox");
let restBtn = document.querySelector("#restBtn");
let newGame = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".mas-container");
let msg = document.querySelector("#msg")

let turn0 = true;

let winningPatter = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]

const resetGame = ()=>{
    turn0 = true;
    enabelboxes();
    msgContainer.classList.add("hide")
}

gameboxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        // console.log("box Was click")
        // box.innerText = "A"

        if(turn0){
            box.innerText = "O" ;
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const disabelboxes = ()=>{
    for(let box of gameboxes){
        box.disabled = true;
    }
}

const enabelboxes = ()=>{
    for(let box of gameboxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner)=>{
    msg.innerHTML = `Congratualtions, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabelboxes();
}


const checkWinner = ()=>{
    for(let pattern of winningPatter){
        // console.log(pattern);
        // console.log(pattern[0],pattern[1],pattern[2]);
         // console.log(gameboxes[pattern[0]],gameboxes[pattern[1]],gameboxes[pattern[2]]);
        // console.log(gameboxes[pattern[0]].innerText,gameboxes[pattern[1]].innerText,gameboxes[pattern[2]].innerText);
       let pos1Val = gameboxes[pattern[0]].innerText;
       let pos2Val = gameboxes[pattern[1]].innerText;
       let pos3Val = gameboxes[pattern[2]].innerText;
    //    console.log(pos1Val,pos2Val,pos3Val)

       if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("Winner");
            showWinner(pos1Val);
        }
       }
    }
}

newGame.addEventListener("click",resetGame)
restBtn.addEventListener("click",resetGame)
