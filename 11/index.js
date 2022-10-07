let password = document.querySelector("#ip");
let submit = document.querySelector("#sub");

 

submit.addEventListener("click" , function(){
    let a = password.value;
    if (a.length<10){
        password.style.backgroundColor="red" ;
    }
    else  {
        password.style.backgroundColor="green" ;
    }




})

