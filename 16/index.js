var person1 ={
    name:"Ram",
    power:"2500",
    yuga:"treta",
} ;

var person2 ={
    name:"Krishna",
    power:"2325",
    yuga:"Dwapar",
};

 
function Power (person1, person2) {
    if (person1.power < person2.power) {
         return  person2;    
        }
 else{
  return person1;    
}
}
let morePower= Power  (person1, person2)
console.log(morePower.name);

function checkChar(person1, person2) {
    if (person1.name.length < person2.name.length) {
         return  person2;    
        }
 else{
  return person1;    
}
}
let moreChar= checkChar (person1, person2);
console.log(moreChar.name);

function checkBoth(person1, person2) {
    if (morePower&&moreChar=== person1) {
         return  person1;    
        }
 else{
  return person2;    
}
}

let moreBoth= checkChar (person1, person2);
console.log(moreBoth.name);