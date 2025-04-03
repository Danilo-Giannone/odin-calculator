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
            }else if(keyboardText[i][j] == "+" ||
                keyboardText[i][j] == "-"||
                keyboardText[i][j] == "*"||
                keyboardText[i][j] == "/"||
                keyboardText[i][j] == "%"
            ){
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
let equalFlag = false;
let firstNumber = "";
let secondNumber = "";
let totalNumber="";
let operatorText="";
let digits = document.querySelectorAll(".digit");
digits.forEach(digit => {
    digit.addEventListener("click", (e)=>{
        if(!operatorFlag){
            if(firstNumber.includes(".") && !dotFlag){
                display.textContent = "Error! Too many after the dot!";
            }else{
                firstNumber += (e.target.textContent);
                checkNumber(firstNumber); 
                dotFlag =false;
                equalFlag = false;  
            }
        }else{
            if(secondNumber.includes(".") && !dotFlag){
                display.textContent = "Error! Too many after the dot!";    
            }else{
                secondNumber += (e.target.textContent);
                checkNumber(secondNumber); 
                dotFlag =false;
                equalFlag = false;
            }                
        }
        
    })
});

let operators = document.querySelectorAll(".operator");
operators.forEach(operator => {
    operator.addEventListener("click", (e)=>{
        operatorText=e.target.textContent;
        operatorFlag= true; 
        dotFlag = false;
        if(equalFlag){
            firstNumber = totalNumber;
            equalFlag = false;
        }
    })
});

let equal = document.querySelector(".equal");
equal.addEventListener("click", (e)=>{
    totalNumber = calculate(parseFloat(firstNumber),parseFloat(secondNumber),operatorText);   
    display.textContent = totalNumber;
    console.log(totalNumber);
    equalFlag = true;
    firstNumber = "";
    secondNumber = "";
    operatorText = "";
    operatorFlag = false
});    
 
let dot = document.querySelector(".dot");
dot.addEventListener("click", (e)=>{
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
});
        
        
        
function calculate(num1,num2,op){
    console.log(op);
    
    switch (op) {
        case "%":
            return num1%num2;
            break;
        case "+":
            return num1+num2;
            break;
        case "-":
            return num1-num2;
            break;
        case "*":
            return num1*num2;
            break;
        case "/":
            return num1/num2;
            break;
        default:
            console.log("default");
            
    }
}       
        
function checkNumber(num){
    if(num.length <= 21){
        display.textContent = num;
    }else{
        display.textContent = "Error! Too many digits!"
    }
};