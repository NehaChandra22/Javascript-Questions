let input = document.querySelector("#ip");
let plus = document.querySelector(".inc");
let minus = document.querySelector(".dec");
let result = document.querySelector(".result");

let font = 10;


function increase() {
    result.innerHTML = input.value;
    result.style.fontSize = font + font + "px";
    font++;


}

function decrease() {
    result.innerHTML = input.value;
    result.style.fontSize = font + font + "px";
    font--;
}


plus.addEventListener("click", increase);
minus.addEventListener("click", decrease);
