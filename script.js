let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-btn");
let smgContainer = document.querySelector(".smg-container");
let smg = document.querySelector("#smg")


let turnO = true; //player a/player b;

const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 6],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    smgContainer.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.innerText = "X";
        if(turnO){
            box.innerText = "0";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
    
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = () => {
    smg.innerText = `Congratulations, Winner is $(winner)`;
    smgContainer.classList.remove("hide");

    disableBoxes();

};

const checkWinner = () =>{
    for(let pattern of winPatterns) {
        //console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val != "" && pos3Val != "" ){
            if( pos1Val === pos2Val && pos2Val=== pos3Val){
                console.log ("Winner");
                showWinner(pos1Val);
            }
        }

                                                          
      
    }  
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);