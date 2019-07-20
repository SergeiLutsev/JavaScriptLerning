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






