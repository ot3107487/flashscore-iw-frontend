const function1 = require('./ex2.js');
console.log(function1.addFive(5));

const fs = require('fs');

const variabila = new Promise((resolve,reject) => {
    fs.readFile('./ex2.js',(err,data) => {
        if(err) reject(err)
        else resolve(data.toString());
    })
});

variabila.then(console.log).catch(console.error);

(async () => {
   const cont = await variabila;
   console.log(cont+1);
})();

(async () => {
    const content2 = (await new Promise((res,rej) => {
        fs.readFile('./ex2.js',(err,data) => {
            err && rej(err);
            !err && res(data+2);
        });
    }));
    console.log(content2.toString());
})();

// data+7
function doStuffAsPromise(date){
        return new Promise((res,rej) => {
                setTimeout( () => {
                console.log('DONE');
                res(date+7)
            },200);
        });
    }


(async () => {
    const constanta = await doStuffAsPromise(100);
    console.log( constanta);
})();

async function doStuffAsPromise2(date){
    return date+7;
}

(async () => {
    const constanta2 = await doStuffAsPromise2(100);
    console.log( constanta2);
})();

//

function doStuffAsPromise3(date){
    return new Promise((res,rej) => {
            const i = setInterval( () => {
            console.log('DONE');
            res(date+7)
        },5000);
        clearInterval(i);
    });
}

(async () => {
    const constanta = await doStuffAsPromise3(100);
    console.log( constanta);
})();

(async () => {
const constanta = await doStuffAsPromise(100);
console.log( constanta);
})();

// function x2(){
//     const x = setTimeout(()=> console.log(1),1);
//     for(;;);
// }
// x2();

const p = new Promise((res, rej) => {
    res(1);
  })
  
  async function asyncReturn() {
    return p;
  }
  
  function basicReturn() {
    return Promise.resolve(p);
  }
  
  console.log(p === basicReturn()); // true
  console.log(p === asyncReturn()); // false

//Top-level code, up to and including the first await expression (if there is one), is run synchronously
//An async function without an await expression will run synchronously. 
//If there is an await expression inside the function body, however, the async function will always complete asynchronously.

async function foo() {
    console.log(1);   // synchronously
    console.log(await 1);   // synchronously
    console.log(await 2);   //asynchronously
 }
console.log(foo());

// function foo() {
//     return Promise.resolve(1).then(() => undefined);
//  }
//  const rez = foo();
// console.log(rez);