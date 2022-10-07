var person1 ={
    name:"Ram",
power:"2500",
    yuga:"treta",
} ;

var person2 ={
    name:"Krishna",
    power:"2325" ,
    yuga:"Dwapar",
};

 
function check (person1, person2) {
    if (person1.power < person2.power) {
         return  person2;    
        }
 else{
  return person1;    
}
}
let morePower= check (person1, person2)
console.log(morePower.name);