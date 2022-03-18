//const
//let         nume
//var

const nume = "Narcis";
let prenume = "Dan";
console.log("sall");
console.log(nume + " " + prenume);

const varsta = 20;
const sex = true;

const varsta1 = Number("20");
const varsta4 = Number.parseInt("20");
const varsta5 = (20).toString();
console.log(varsta5);
const varsta2 = varsta1.toString();
console.log(varsta2);
console.log(sex.toString());
const fff = Number(sex);
const sex1 = false;
const fff1 = Number(sex1);
console.log(fff);
console.log(fff1);

//conversie de la numar la boolean
const vare = !!varsta;
console.log(vare);

//string gol e false, restul sunt true

//if-uri
let vBool = true;
let vNum = 1;
let vString = "1";

//== valoare
//=== si la tip

if (vBool == vNum) {
  console.log("dada");
}
if (vBool === vNum) {
  console.log("nuunu");
}

console.log(vBool + vNum + vString);

//right value

if (vBool) {
  console.log("e bine");
}

if (vNum) {
  console.log("e bine");
}

if (vString) {
  console.log("e bine");
}

//obiecte
const obj = {};
obj.nume = nume;
const obj1 = { nume: "nume", prenume: "prenume" };
console.log(obj1.nume + " " + obj1.prenume);
console.log(obj1.saul); //undefined

//dpdv bool null == undefined, dar nu si nul === undefined

console.log(obj1);
obj1.prop = undefined;
console.log(obj1);

//in interior pot modifica, dar nu pot modifica referinta obiectului - intreg obiectul

//array
const arr = [];
arr.push(20);
arr.push("20");
arr.push(true);
arr.push(
  true,
  false,
  () => {
    console.log("functie");
  },
  console.log
);

console.log(arr);
console.log(arr[5]());
console.log(arr[6]("da"));

//functii
function functia1() {}

functia1();

//functii altfel

const nume1 = function () {};
const nume2 = () => {};

//intr-o functie definesti o alta functie prin variabila

//for
