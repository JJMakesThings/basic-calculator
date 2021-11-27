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
    let round = 100000
    if(string.includes("/")){
        let splits = string.split("/");
        let top = splits["0"];
        let bottom = splits["1"];
        if (!isNaN(top) && !isNaN(bottom)){
            return Math.round((top/bottom)*round)/round;
        };
    } else if (string.includes("*")){
        let splits = string.split("*");
        let top = splits["0"];
        let bottom = splits["1"];
        if (!isNaN(top) && !isNaN(bottom)){
            return Math.round((top*bottom)*round)/round;
        };
    } else if (string.includes("+")){
        let splits = string.split("+");
        let top = splits["0"];
        let bottom = splits["1"];
        if (!isNaN(top) && !isNaN(bottom)){
            return Math.round((top+bottom)*round)/round;
        };
    } else if (string.includes("-")){
        let splits = string.split("-");
        let top = splits["0"];
        let bottom = splits["1"];
        if (!isNaN(top) && !isNaN(bottom)){
            return Math.round((top-bottom)*round)/round;
        };
    };

};

let numbers = Array.from(document.querySelectorAll(".number"));
numbers.forEach((element)=>{
    if (element.id=="point"){
        element.addEventListener("click", (e)=>{
            if (display.innerText == ""){
                display.innerText = "0.";
            }else if (!display.innerText.includes(".")){
                addToDisplay(e.target.innerText);
            };
        });
    }else{
        element.addEventListener("click", (e)=>{
            addToDisplay(e.target.innerText);
        });
    };
});

document.getElementById("clear").addEventListener("click", ()=>{
    display.innerText = "";
});

document.getElementById("delete").addEventListener("click", ()=>{
    if(display.innerText !== ""){
        display.innerText = display.innerText.slice(0,-1);
    };
});

document.getElementById("neg").addEventListener("click", ()=>{
    if(
        display.innerText.includes("/")||
        display.innerText.includes("*")||
        display.innerText.includes("+")||
        display.innerText.includes("-")){
            display.innerText = evaluate(display.innerText);
        };
    display.innerText = evaluate(`-1*${display.innerText}`);
});

let operators = Array.from(document.querySelectorAll(".operator"));
operators.forEach((element)=>{
    if (element.id == "equal"){
        element.addEventListener("click", ()=>{
            if(
                display.innerText.includes("/")||
                display.innerText.includes("*")||
                display.innerText.includes("+")||
                display.innerText.includes("-")){
                    display.innerText = evaluate(display.innerText);
                };
        });

    } else {
        element.addEventListener("click", (e)=>{
            if(
                display.innerText.includes("/")||
                display.innerText.includes("*")||
                display.innerText.includes("+")||
                display.innerText.includes("-")){
                    display.innerText = evaluate(display.innerText);
                };
            addToDisplay(e.target.dataset.key);
        });
    };
});