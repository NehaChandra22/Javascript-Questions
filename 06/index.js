let text = document.querySelector(".p") ;
let btn = document.querySelector(".load") ;



btn.addEventListener("click",function(){
    if(text.style.display != 'none'){
        text.style.display = 'none';
        }
        else{
        text.style.display = 'block';
        }


}) ;
