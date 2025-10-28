const fs =  require('fs'); //built in module

const contents = fs.readFileSync('notes.txt', 'utf-8');
console.log(contents);
