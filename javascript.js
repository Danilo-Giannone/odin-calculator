//the order is the order of apparition row by row
const keyboardText=[["ac","del","+/-","/"],
                 ["7","8","9","*"],
                 ["4","5","6","-"],
                 ["1","2","3","+"],
                 ["0",".","=","%"]];

let container = document.querySelector("#container");
let keyboard = document.querySelector(".keyboard");
let display = document.querySelector(".display");
for (let i = 0; i < keyboardText.length; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    keyboard.appendChild(row);
    for (let j = 0; j < keyboardText[i].length; j++) {
        let button = document.createElement("button");
        button.classList.add("btn");
        button.textContent = keyboardText[i][j];
        for (let z = 0; z < 10; z++) {
            if(keyboardText[i][j] == z.toString()){
               button.classList.add("digit");              
            }else if(keyboardText[i][j] =="ac"){
                button.classList.add("ac");
            }else if(keyboardText[i][j] =="del"){
                button.classList.add("del");
            }else if(keyboardText[i][j] =="="){
                button.classList.add("equal");
            }else if(keyboardText[i][j] == "."){
                button.classList.add("dot");
            }else{
                button.classList.add("operator");
            }  
        }
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
let operatorFlag = false;
let dotFlag = false;
let firstNumber = "";
let SecondNumber = "";
let TotalNumber="";
let operator="";
let buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", (e)=>{
        if(e.target.classList.contains("digit")){
            if(!operatorFlag){
                if(firstNumber.includes(".") && !dotFlag){
                    display.textContent = "Error! Too many after the dot!";
                }else{
                    firstNumber += (e.target.textContent);
                    checkNumber(firstNumber); 
                    dotFlag =false;  
                }
            }else{
                if(firstNumber.includes(".") && !dotFlag){
                    display.textContent = "Error! Too many after the dot!";    
                }else{secondNumber += (e.target.textContent);
                    checkNumber(secondNumber); 
                    dotFlag =false;
                }                
            }
        }else if(e.target.classList.contains("dot")){
            if(!operatorFlag){
                if(firstNumber.includes(".")){
                    display.textContent = "Error! Too many dots!";
                }else{
                    firstNumber += (e.target.textContent);
                    checkNumber(firstNumber); 
                    dotFlag = true;
                }   
            }else{
                if(secondNumber.includes(".")){
                    display.textContent = "Error! Too many dots!";   
                }else{
                    secondNumber += (e.target.textContent);
                    checkNumber(secondNumber);
                    dotFlag = true;
                }         
            }
        }
    })
});
function checkNumber(num){
    if(num.length <= 21){
        display.textContent = num;
    }else{
        display.textContent = "Error! Too many digits!"
    }
}