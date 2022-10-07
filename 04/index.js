let input = document.querySelector("#ip") ;
let red = document.querySelector(".red") ;
let green =  document.querySelector(".green") ;
let blue =  document.querySelector(".blue") ;
let result=  document.querySelector(".result") ;

function Red(){
result.innerHTML =input.value ;
result.style.color="red";




}
function Green(){result.innerHTML =input.value ;
    result.style.color="green";
    
    
}
function Blue(){
    result.innerHTML =input.value ;
result.style.color="blue";

}








red.addEventListener("click",Red) ;
green.addEventListener("click",Green) ;
blue.addEventListener("click",Blue) ;