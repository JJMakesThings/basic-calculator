let display = document.getElementById("calculator__screen");

// document.addEventListener("keydown", (key)=>{
//     console.log(key);
// });

let input = {
    top: null,
    operator: null,
    bottom: null,
};

function addToDisplay(char){
    if(display.innerText == null){
        display.innerText=char;
    }else if(display.innerText.length<31){
        display.innerText+=char;
    };
};

function evaluate(string){
    
};

let numbers = Array.from(document.querySelectorAll(".number"));
numbers.forEach((element)=>{
    element.addEventListener("click", (e)=>{
        addToDisplay(e.target.innerText);
    });
});

document.getElementById("clear").addEventListener("click", (e)=>{
    display.innerText = null;
});

document.getElementById("delete").addEventListener("click", (e)=>{
    if(display.innerText !== null){
        display.innerText = display.innerText.slice(0,-1);
    };
});

let operators = Array.from(document.querySelectorAll(".operator"));
operators.forEach((element)=>{
    element.addEventListener("click", (e)=>{
        if(
        display.innerText.includes("/")||
        display.innerText.includes("*")||
        display.innerText.includes("+")||
        display.innerText.includes("-")){
            display.innerText = evaluate(display.innerText);
        }
        addToDisplay(e.target.dataset.key);
    });
});