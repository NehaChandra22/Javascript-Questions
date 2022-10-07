let input1= document.querySelector("#ip1");
let input2= document.querySelector("#ip2");
let add= document.querySelector(".add");
let sub= document.querySelector(".sub");
let multiply= document.querySelector(".multi");
let divide= document.querySelector(".div");
let result= document.querySelector(".result");
let c=0;
  result.innerHTML = `<b>${c} </b> `
function _add (){
    c =   Number(input1.value) + Number(input2.value);
    result.innerHTML =  `<b> ${c} </b>`;
}
function _sub (){
    c =   Number(input1.value) -Number(input2.value);
    result.innerHTML =  `<b> ${c} </b>`;
}
function _multiply(){
    c =   Number(input1.value) * Number(input2.value);
    result.innerHTML =  `<b> ${c} </b>`;
}
function _divide (){
    c =   Number(input1.value) / Number(input2.value);
    result.innerHTML =  `<b> ${c} </b>`;
}

add.addEventListener("click",_add) ;
sub.addEventListener("click",  _sub) ;
multiply.addEventListener("click",  _multiply) ;
divide.addEventListener("click", _divide) ;



