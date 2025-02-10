// console.log('Welcome to node.js');

const { addToCart, changeQty, name, address, fullAddress} = require("./cartModule");



// console.log(10+747);

const len = [10,55,86,99,67,65];


len.forEach((value, index)=>{
    console.log(value, index);
})


console.log(addToCart());
console.log(changeQty());
console.log(name);
console.log(address);
console.log(fullAddress());


//core module, local module, third party module








