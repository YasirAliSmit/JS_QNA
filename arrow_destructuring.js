const arr = [1, 2, 3, 4, 5];

// Destructuring the array
const [first, second, rest] = arr;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]


let userData = {
    name: 'Yasir',
    surname:'Ali'
}
const { name, surname } = userData;
console.log(name); // Output: Yasir
console.log(surname); // Output: Ali

// spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

const sum = (a,b,c)=>a+b+c;
console.log(sum(...arr1)); // Output: 6