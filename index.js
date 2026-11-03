/* 
** var let and const
 */
//  var has function scope and can be redeclared and updated. and also its has global variable
// console.log("Var let and const in JavaScript");

var name = "John";

console.log(name);

{
    var name = "Yasir"
    console.log(name)
}
console.log(name)

// let has block scope and can be updated but not redeclared. and also its has block scope variable
// let name = "John";

console.log(name);

{
    let name = "Yasir"
    console.log(name)
}
console.log(name)

// const has block scope and cannot be updated or redeclared. and also its has block scope variable
const name1 = "John";

console.log(name1);

