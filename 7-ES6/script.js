//let test = function(){
//    let i=10;
//    for(let k=0; k<=5; k++){
//         i+=k*k;
//        console.log(k,i++)
//    }
//    
//    console.log(" === "+i);
//}
//
//test();
/*
let fName = 'Sergei';
let sName = 'Lutsev';
const yearOfBirth = 1977;

function calcAge(year){
    let currYear = (new Date()).getFullYear();
    return currYear - year;
}

console.log(`This is ${fName} ${sName}, ${calcAge(yearOfBirth)} years of birth`);

const n= `${fName} ${sName}`;

let st = n.startsWith('r',2);
let en = n.endsWith('ev')
let inc = n.includes('i Lut');

console.log(st,en,inc);

console.log(fName.repeat(10));

console.log(' Hi '.repeat(5))
console.log(`${sName} `.repeat(3));

const arr = [1990,1985,1980,1975];

let arrES6 = arr.map(el => 2019 - el);

console.log(arrES6);

let testEs56 = arrES6.map((el, idx) => `Ages ${idx+1} : ${el}`);

console.log(testEs56);

let test2 = arr.map((el, idx) =>{
    let now = new Date();
    let age = now.getFullYear() - el;
    return `(${idx}): ${age}`;
});

console.log(test2);
*/

// ES 5
/*
var box5 = {
    color : 'green',
    position : 1,
    clickMe : function(){
        var self = this;
        document.querySelector('.green').addEventListener('click',function(){
            var str = 'This is the box number ' + self.position+' and it is '+ self.color;
            
            alert(str);
        });
        
    }
}

//box5.clickMe();

// ES 6
var box6 = {
    color : 'green',
    position : 1,
    clickMe : function(){
        var self = this;
        document.querySelector('.green').addEventListener('click',() => {
            var str = 'This is the box number ' + this.position+' and it is '+ this.color;
            
            alert(str);
        });
        
    }
}

box6.clickMe();
*/
/*

function Person(name){
this.name = name;
}

// ES5
Person.prototype.myFrends5 = function(frends) {
   var arr = frends.map(function(cur){
      return  this.name+' is friends with '+cur.name;
    }.bind(this));
               
    console.log(arr);
}

var me = new Person('Sergei')
var f1 =new Person('freand 1');
var f2 =new Person('freand 2');
var f3 =new Person('freand 3');

me.myFrends5([f1,f2,f3]);

Person.prototype.myFrends6 = function(frends) {
   var arr = frends.map(cur =>
      `${this.name} is friends with ${cur.name}`
    );
               
    console.log(arr);
}

new Person('Mike').myFrends6([f1,f2,f3]);

*/

//******//////////////////////
//distracting

// ES 5
/*
var john = ['John',26];
var fName = john[0];
var age = john[1];

// es 6
let [name, old] =['Tim',34];
console.log(name,old);

const obj = {
  firstName : 'Tim',
    lastName : 'Hortons'
};

const {firstName, lastName} = obj;
console.log(firstName,lastName);

const {firstName: a, lastName: b} =obj;

console.log(b,a);
//---------------------------
/////////////////////////////


function calcRetairment(year){
    let age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

let [ages, retairment] = calcRetairment(1977);
console.log(ages,retairment);
*/




//////////////////////////////////////////////////
////////////////////////////////////////////////

//               ES6  ARRAYS
let boxes = document.querySelectorAll('.box');
/*
console.log(boxes);


boxes.forEach(el =>{
    el.style.backgroundColor = 'Yellow';
    console.log(el);
})

let arr = Array.from(boxes);
console.log(arr);
arr.forEach(el =>{
    el.style.backgroundColor = 'Green';
    console.log(el);
})
*/


// es5----------
/*
for(var i = 0; i<boxes.length;i++){
    if(boxes[i].className === 'box blue') continue;
    boxes[i].style.backgroundColor = 'Yellow';
    boxes[i].textContent = 'I change on Yellow'
}*/

//es 6-----------

for(let el of boxes){
    if(el.className.includes('blue')) continue;
    el.style.backgroundColor = 'Gray';
    el.textContent = 'I changed to Gray';
}


// es 5
/*
var ages = [12,34,11,18,42,15];

var full= ages.map(function(cur){
        return cur >= 18 ;
      });
console.log(ages);
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// es 6

let idx = ages.findIndex(e =>  e >= 18);

console.log(idx);

let el = ages.find(e => e >= 18);

console.log(el);
*/

////////////////////////////////////////////
///////////////////////////////////////////
// spread operator

function sumNumbers(a,b,c,d){
    return a+b+c+d;
}
var arr = [18,32,44,55];

//es 5

var sum1 = sumNumbers(18,32,44,55);
console.log('sum1 = '+sum1);

var sum2 = sumNumbers.apply(null,arr);
console.log('sum2 = '+ sum2);

// ES6

var sumES6 = sumNumbers(...arr);
console.log('sumES6 = ' + sumES6);

const famaly_1 = ['Tim','Mike','Bill'];
const famaly_2 = ['Emely','Bridgit','Nikola'];

const bigfamely = [...famaly_1,'Lily','Huan',...famaly_2];
console.log(bigfamely);


let h1 = document.querySelector('h1');
let boxesA = document.querySelectorAll('.box');

let all =[h1,...boxesA];
all.forEach(e => e.style.color ='red');


















