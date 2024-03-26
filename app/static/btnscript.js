let container;

function loadEvents(){
    container = document.getElementById("container");


    let btns = document.getElementsByClassName("btn");
    for (const btn of btns) {
        console.log("Button clicked:", btn.value);
        btn.addEventListener("click", () => {
            if (btn.innerText == "-"){
                decreaseSize();
            }else if (btn.innerText === "+") {
                increaseSize();
            }else if (btn.innerText == "="){
                resetSize();
            }
            console.log("Font size changed to", btn.value + "px");
        });
    }
}

function decreaseSize(currentSize, newSize){
    currentSize = parseInt(container.style.fontSize || "20px");
    newSize = Math.max(currentSize - 5, 10);
    container.style.fontSize = `${newSize}px`;
    console.log("Changing font size to:", `${newSize}px`);
}

function increaseSize(currentSize, newSize){
    currentSize = parseInt(container.style.fontSize || "20px");
    newSize = currentSize + 5;
    container.style.fontSize = `${newSize}px`;
    console.log("Changing font size to:", `${newSize}px`);
}

function resetSize(currentSize){
    console.log("Changing font size to:", `${currentSize}px`);
    container.style.fontSize = "20px";
}

// loads events after loading DOM elements
document.addEventListener("DOMContentLoaded", loadEvents);