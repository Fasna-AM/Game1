button = document.querySelectorAll(".optn")
message = document.querySelector(".message")
newBtn = document.getElementById("new-btn")
restart = document.getElementById("restart")
msg = document.getElementById("msg")
//  winning pattern
winningPattern  = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8], 
    [3,4,5],
    [6,7,8],
]

// player 'x' plays first
xTurn = true
count = 0

//Display X/O  o click
button.forEach((element)=>{
    
    element.addEventListener("click", ()=>{
        if(xTurn){
            xTurn= false
            //Display X
            element.innerText = "X"
            element.disabled = true
        }else{
            xTurn = true
            // Display O
            element.innerText = "O"
            element.disabled = true
        }
        //incrment count on each click

        count++
        if(count == 9){
            drawFunction()
        }
        winCheck();
    })
})
const winCheck = () =>{
    // Loop through all win patterns
    for(let i of winningPattern){
        let [item1,item2,item3] = [
            button[i[0]].innerText,
            button[i[1]].innerText,
            button[i[2]].innerText
        ]
        if(item1 != "" && item2 != "" && item3 != "" ){
            if(item1==item2 && item2==item3){
                winFunction(item1)
            }
        }
    }
}

const winFunction =(item)=>{
    disableButtons()
    if(item=="X"){
        msg.innerHTML = "&#x1F389 <br> 'X' wins"
    }else{
        msg.innerHTML = `&#x1F389 <br> 'O' wins`

    }

}
const disableButtons = ()=>{
    button.forEach((item)=>item.disabled = true)
    //Enable message
    message.classList.remove("hide")
}
// Enable all button for new game
const enableButtons = ()=>{

    button.forEach((item)=>{
        item.innerText= ""
        item.disabled = false
    })
    //Enable message
    message.classList.add("hide")
}
// New Game
newBtn.addEventListener("click", () =>{
    count = 0
    enableButtons()
})
restart.addEventListener("click", ()=>{
    count = 0
    enableButtons()
})
//Draw funtion
const drawFunction = () => {
    disableButtons()
    msg.innerHTML = "&#x1F60E; <br> It's Draw"

}