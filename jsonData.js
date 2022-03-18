const filePath = './data.json';
const {readFileSync, writeFileSync} = require('fs');
let data = [];
try{
    data = JSON.parse(readFileSync(filePath).toString());
}catch(err){

}
function add(args){
    for(let i=0;i<args.length;i=i+3){
        const person = {lastName: args[i], firstName:args[i+1], age: args[i+2]};
        data.push(person);
    }
    writeFileSync(filePath, JSON.stringify(data))
}
function read(){
    return data;
}
module.exports={add, read};