//the order is the order of apparition row by row
const keyboardText=[["ac","del","+/-","/"],
                 ["7","8","9","*"],
                 ["4","5","6","-"],
                 ["1","2","3","+"],
                 ["0",".","=","%"]];

let container = document.querySelector("#container");
let keyboard = document.querySelector(".keyboard");
for (let i = 0; i < keyboardText.length; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    keyboard.appendChild(row);
    for (let j = 0; j < keyboardText[i].length; j++) {
        let button = document.createElement("button");
        button.classList.add("btn");
        button.textContent = keyboardText[i][j];
        row.appendChild(button);  
    }
    
}
window.onload = refresh();
window.addEventListener('resize', function(event){
    refresh();
  });
function refresh(){
    if(window.innerWidth > window.innerHeight){
        container.setAttribute("style", "height:70vh; width: 50vh")
    }else{
        container.setAttribute("style", "height:70vw; width: 50vw")
    }
};