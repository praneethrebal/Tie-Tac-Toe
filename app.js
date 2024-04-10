let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContiner=document.querySelector(".msg-continer");
let msg=document.querySelector("#msg");
let turnO=true;
const winPattrens=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGane=() =>{
    turnO=true;
    enaabledBoxes();
    msgContiner.classList.add("hide");

};
Array.from(boxes).forEach(box => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if(turnO)
        {
            box.innerText="O";
            turnO=false
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disabledBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
    const enaabledBoxes=()=>{
        for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
}
const showWinner =(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgContiner.classList.remove("hide");
    disabledBoxes();
}
const checkWinner=()=>{
    for(let pattern of winPattrens){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                showWinner(pos1val);
            }
        }
    }
};
newGameBtn.addEventListener("click",resetGane);
resetBtn.addEventListener("click",resetGane)


