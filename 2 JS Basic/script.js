/*
var firstName = 'Sergei';
console.log(firstName);

var lastName = 'Lutsev';
var age = 42;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Developer';
console.log(job);
*/

/*************************
* Variable mutation and type corecton
*/
/*
var firstName='Sergei';
var age=42;

//type correction
console.log(firstName+' '+age);

var job, isMarred;
job = 'Developer';
isMarred = true;

console.log(firstName+' is a '+age+' years old '+job+'. Is he marred? '+isMarred);

//variable mutation
age = 'Forty two';
job = 'Web Developer';

alert(firstName+' is a '+age+' years old '+job+'. Is he marred? '+isMarred);

var lastName = prompt('What is his last name?');
console.log(firstName+' '+lastName);
*/

/**************************************
* Basic operators
*/
/*
var year, yerSer, yerVadim, ageSer, ageVadim;
 year=2019;
ageSer=42;
ageVadim=12;


// Math operators
 yerSer=year-ageSer;
 yerVadim=year-ageVadim;
console.log('Sergei was born in '+yerSer);
console.log('Vadim was born in '+yerVadim);

console.log(year+2);
console.log(year*2);
console.log(year/10);

// Logical operators
var sergeiOlder=ageSer>ageVadim;
console.log(sergeiOlder);

//typeof operator
console.log(typeof sergeiOlder);
console.log(typeof ageSer);
console.log(typeof 'Sergei older then Vadim');
var x;
console.log(x);
*/

/***************************
* Operator precedence
*/
/*
var now = 2019;
var yearJhon=1989;
var fulAge=18;

var isFullAge=now - yearJhon >= fulAge;
console.log(isFullAge);

var ageJhon = now - yearJhon;
var ageMark = 35;
var average = (ageJhon + ageMark) / 2;
console.log(average);

var x,y;
x = y = (3 + 5)* 4 - 6;
console.log(x, y);

// more operators
x *= 2;
console.log(x);
x += 10,
console.log(x);

x ++;
console.log(x);
*/
/*
var massMark, heightMark, bmiMark;
var massJonn, heightJonn, bmiJonn;
var isMarkBMIHigher;

    massMark = 110;
    heightMark = 1.79;
    
    massJonn = 90;
    heightJonn =1.78;

    bmiMark = massMark / (heightMark * heightMark);
    bmiJonn = massJonn / (heightJonn * heightJonn);

    isMarkBMIHigher = bmiMark > bmiJonn;
    
    console.log('Mark BMI = '+bmiMark+
                ', Jhon BMI = '+bmiJonn+
                ', Mark BMI is higher then Johon? '+isMarkBMIHigher);

*/

/*********************************************
* if / else statement
*/
/*
var fName='John';
var civilStatus='single';

if (civilStatus === 'marred'){
    console.log(fName+' is marred! ')
}else{
    console.log(fName+' will hopefully marry soon :)');
}

var isMarred = true;

if (isMarred){
    console.log(fName+' is marred! ')
}else{
    console.log(fName+' will hopefully marry soon :)');
}
*/

/**************************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 16;

if(age < 13){
    console.log(firstName + ' is a boy');
}else if(age >=13 && age <20 ){
    console.log(firstName + ' is a teenager');
}else if(age >=20 && age<30) {
    console.log(firstName + ' is a young man');
}else {
     console.log(firstName + ' is a man');
}
*/

/***********************************
* The Ternary Operator and Switch Statement
*/
/*
var fName = 'John';
var age = 26;

// ternary operatopr
age >= 18 ? console.log(fName+' drinks beer.') : console.log(fName+' drinks juice.');

var drink = age >=18 ? 'beer' : 'juice';
console.log(drink);

// Switch statement
var job = 'instructor';

switch (job){
    case 'teacher':
    case 'instructor':
        console.log(fName+' teaches kids how to code');
        break;
    case 'driver':
        console.log(fName+' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(fName+' designs beautiful website');
        break;
    default:
        console.log(fName+' does somrthing else');
}


switch(true){
    case age<13:
        console.log(fName + ' is a boy');
        break;
    case age>=13 && age <20:
        console.log(fName + ' is a teenager');
        break;
    case age>=20 && age<30:
        console.log(fName + ' is a young man');
        break;
    default:
         console.log(fName + ' is a man');
        
}

*/

/****************************************
* Truthy and Falsy values and equality operators
*/

/* Falsy values: undefined
                 null,
                 0,
                 '',
                 NaN
*/

// Truthy values: NOT falsy values;
/*
var height;
height = 0;
if(height || height === 0){
    console.log('Variable is defined');
}else{
    console.log('Variable has Not been defined');
}
*/
/*
var aveJohn=(89+120+103)/3;
var aveMark=(116+94+123)/3;
var aveMary=(97+134+105)/3;
var winer, average;
if(aveJohn>aveMark && aveJohn>aveMary){
    winer='John winner';
    average=aveJohn;
}else if(aveJohn<aveMark && aveMark>aveMary){
    winer='Mark winer';
    average=aveMark;
}else if(aveMary>aveJohn && aveMary>aveMark){
    winer='Mary winer';
    average=aveMark;    
}else{
    winer='Draw';
    average=aveJohn;
}
console.log(winer+' with score: '+average);
*/

/**************************************
* Functions
*/
/*
function calculateAge(birthYear){
    return 2019-birthYear;
}

var ageJohn=calculateAge(1990);
var ageMike=calculateAge(1950);
var ageJane=calculateAge(1977);
console.log(ageJohn,ageMike,ageJane);

function yearsUntilRetaritment(year, fName){
    var age=calculateAge(year);
    var retirement=65-age;
    if(retirement<=0){
        console.log(fName+' already retiared!');
        return;
    }
    console.log(fName+' retires in '+retirement+' years.')
}

yearsUntilRetaritment(1990,'John');
yearsUntilRetaritment(1950,'Mike');
yearsUntilRetaritment(1977,'Jane');
*/

/****************************************
* Function Statements and Expressions
*/


//Function expression
/*
var whatDoYouDo = function(job, fName){
  switch(job){
      case 'teacher':
          return fName+' teaches kids how to code';
      case 'driver':
          return fName+' drives a cab in Ottawa';
      case 'designer':
          return fName+' designed beautiful web site;';
      default:
          return fName+' does something else';
  }   
}

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('designer','Vano'));
console.log(whatDoYouDo('driver','Petro'));
*/

/********************************************************
* Arrays
*/
/*
var names = ['John','Mark','Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names);
console.log(names.length);

names[2]='Ben'
console.log(names[2]);

names[names.length] = 'Mary';
console.log(names);

//different data types

var john=['John','Snith',1990,'teacher',false];
john.push('blue'); // add to end of array
john.unshift('Mr'); // add to start of array
console.log(john);

john.pop(); //remove last element;
console.log(john.pop());
console.log(john);
john.shift(); // remove first element of array
console.log(john);
console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a disigner' : 'John IS a designer';
console.log(isDesigner);
*/
/*
var tips=[];
var bills=[];
function tipCalculator(amount){
     var tip=0;
    if(amount < 50){
        tip=amount*20/100;
    }else if(amount >= 50 && amount<=200){
        tip=amount*15/100;
    }else{
        tip=amount*10/100;
    }
    tips.push(tip);
    bills.push(amount+tip);
}



tipCalculator(124);
tipCalculator(48);
tipCalculator(268);

console.log(tips);
console.log(bills);
*/

/*******************************************************
* Objects and properties
*/

// object literal
/*
var john={
    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1990,
    famaly : ['Mark','Emely','Bob'],
    isMarred : false
};

console.log(john);
console.log(john.firstName,john['birthYear']);

john.lastName = 'Clinton';
john['isMarred'] = true;
console.log(john);

// new object declaration

var car = new Object();
car.manufactory = 'Toyota';
car.model = 'Matrix';
car.dataMade = 2004;
car['color'] = 'blue';
car.drivers = john;

console.log(car);
*/
/*
var john={
    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1990,
    famaly : ['Mark','Emely','Bob'],
    isMarred : false,
    fullName : function(){
        return this.firstName+' '+this.lastName;
    },
    calcAge : function(currentYear){
        this.age = currentYear-this.birthYear;
    }
};


console.log(john.fullName());
john.calcAge(2019);
console.log(john);
*/

/*
var mark = {
    firstName : 'Mark',
    lastName : 'Bush',
    mass : 110,
    height : 1.79,
    fullName : function(){return this.firstName+' '+this.lastName},
    calcBMI : function(){
        this.BMI = this.mass/(this.height*this.height);
        return this.BMI;    
    }
    
};


var john = new Object()
john.firsName = 'John';
john.lastName ='Smith'
john.mass=110;
john.height=1.79;
john.fullName = function(){return this.firsName+' '+this.lastName;};
john.calcBMI = function(){this.BMI = this.mass/(this.height*this.height);
        return this.BMI;};


var markBMI = mark.calcBMI();
var johnBMI =john.calcBMI();

console.log(markBMI,johnBMI);

if(markBMI > johnBMI){
    console.log(mark.fullName()+'\'s BMI heirer then '+john.fullName());
}else if(markBMI<johnBMI){
    console.log(john.fullName()+'\'s BMI heirer then '+mark.fullName());
}else{
    console.log(john.fullName()+'\'s BMI the same as '+mark.fullName());
}


*/

/*******************************************
* loops and iterators
*/
/*
for(var i=0; i<10; i++){
    console.log(i);   
}


var john=['John','Snith',1990,'teacher',false];

for(var i=0; i<john.length; i++){
    console.log(john[i]);
}



for(var st in john){
    console.log('-----'+john[st]);
}

*/
/*
var john=['John','Snith',1990,'teacher',false];

for(var i=0; i<john.length; i++){
    if(typeof john[i] !== 'string'){
        continue;
    }
        console.log(john[i]);
}


for(var i=john.length-1;i>=0;i--)
    console.log(john[i]);
*/

var john ={
    bills: [124, 48, 268, 180, 42],
    tips : [],
    billsTips : [],
    calcTip: function(bill){
        var proc=0;
        if(bill<50){
            proc = 20;
        }else if(bill>=50 && bill<=200){
            proc = 15;         
        }else{
            proc = 10;
        }
        return bill*proc/100;
    },
    calculateTips: function(){
        for(var i=0; i<this.bills.length;i++){
            var tp=this.calcTip(this.bills[i]);
            this.tips.push(tp);
            this.billsTips.push(tp+this.bills[i]);
        }
    }
};

var mark ={
    bills: [77, 375, 110, 45],
    tips : [],
    billsTips : [],
    calcTip: function(bill){
        var proc=0;
        if(bill<100){
            proc = 20;
        }else if(bill>=100 && bill<=300){
            proc = 10;         
        }else{
            proc = 25;
        }
        return bill*proc/100;
    },
    calculateTips: function(){
        for(var i=0; i<this.bills.length;i++){
            var tp=this.calcTip(this.bills[i]);
            this.tips.push(tp);
            this.billsTips.push(tp+this.bills[i]);
        }
    }
};

var average = function(arr){
    if(arr.length === 0) return 0;
    var i;
    var sum=0;
    for(i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;    
}

john.calculateTips();
console.log(john.bills,john.tips,john.billsTips);

mark.calculateTips();
console.log(mark.bills,mark.tips,mark.billsTips);

console.log('John\'s average tips '+average(john.tips));
console.log('Mark\'s average tips '+average(mark.tips));



