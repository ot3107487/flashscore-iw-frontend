const MamitiamPromis = new Promise(resolve => {
    setTimeout(() => {
        resolve('resolved');
    }, 2000);
});

console.log(MamitiamPromis);

// MamitiamPromis.then(console.log);

(async () => {
    constContent = await MamitiamPromis;
    console.log(constContent);
})();

// console.log("Started request...");

/**
 * 
 *Started request...
   resolved
 */

async function f1() {
    return 1                      //returneaza un promise
}

function f2() {
    return Promise.resolve(1)
}

function f3() {
    return new Promise(resolve => {
        resolve(1)
    })
};

(async () => {
    constContent = await f1();
    console.log(constContent);
})();

(async () => {
    constContent = await f2();
    console.log(constContent);
})();

(async () => {
    constContent = await f3();
    console.log(constContent);
})();

const p = new Promise((res, rej) => {
    res(1);
  })
  
  async function asyncf() {   
    return p;        //face alta referinta
  }
  
  function fsimplu() {
    return Promise.resolve(p);   //pastreaza referinta pentru ca p e promise 
  }
  
  console.log(p === fsimplu()); // true
  console.log(p === asyncf()); // false

  async function foo() {
    const result1 = await new Promise((resolve) => setTimeout(() => resolve('1'),1000));
    console.log(result1);
    const result2 = await new Promise((resolve) => setTimeout(() => resolve('2'),2000));
    console.log(result2);
 }
 foo();
 async function foo2() {
    const result1 = await new Promise((resolve) => setTimeout(() => resolve('1'),1000)); //incep amandoua in acelasi timp 
    const result2 = await new Promise((resolve) => setTimeout(() => resolve('2'),2000));
    console.log(result1);
    console.log(result2);
 }
 foo2();
 console.log('salut');

 async function f4() {
    const p1 = new Promise((resolve) => setTimeout(() => resolve('1'),1000));   ///1 2
    const p2 = new Promise((resolve) => setTimeout(() => resolve('2'),2000));
    const results = Promise.all([ p1, p2]).then((messages) => {   //e gata cand toate sunt gata si intra in then in ordine
        console.log(messages[0])
        console.log(messages[1])
      });//.then(console.log); //['1','2']
 }
 f4();
 console.log('salut');
 console.log('salut');

 async function parallel() {   //incep amandoua in acelasi timp si cand e gata fiecare o si rezolva nu asteapta sa fie toate gata
    await Promise.all([
        (async()=>console.log(await new Promise((resolve) => setTimeout(() => resolve('2'),2000))))(),
        (async()=>console.log(await new Promise((resolve) => setTimeout(() => resolve('1'),1000))))()
    ])
  }

  parallel();