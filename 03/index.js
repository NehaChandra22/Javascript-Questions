let input = document.querySelector("#ip");
let h1 = document.querySelector(".h1");
let h2 = document.querySelector(".h2");
let h3 = document.querySelector(".h3");
let result = document.querySelector(".result");





function forh1(){
    result.innerHTML= input.value ;
    result.innerHTML= "<h1>" +   result.innerHTML + "</h1>";

}
function forh2(){
    result.innerHTML= input.value ;
    result.innerHTML= "<h2>" +   result.innerHTML + "</h2>";

}
function forh3(){
    result.innerHTML= input.value ;
    result.innerHTML= "<h3>" +   result.innerHTML + "</h3>";

}








h1.addEventListener("click", forh1);
h2.addEventListener("click", forh2);
h3.addEventListener("click", forh3);
