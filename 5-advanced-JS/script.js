//function constractor
/*
var Person = function(fName, yearOfBirth, job){
    this.fName=fName;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    this.calcAge = function(){
        var age = 2019 - this.yearOfBirth;
        return age;
    }
    
}

Person.prototype.lName = 'Lutsev';
Person.prototype.nameNumber = function(){
    var sum=0;
    for(var i=0; i<this.fName.length;i++){
        sum+=this.fName.charCodeAt(i);
    }
    return sum;
}

var sergei = new Person('Sergei',1977,'Java developer');
var vadim = new Person('Vadim',2007,'SchoolBoy');
vadim.lName='Stolyga';
console.log(sergei,sergei.calcAge(),sergei.lName);
console.log(vadim,vadim.calcAge(),vadim.lName);

console.log(sergei.nameNumber());
console.log(vadim.nameNumber());
*/

// Object.create
/*
var Person = {
    id : 0,
    fName :'',
    lName : '',
    yearOfBirth: 1900,
    calcAge : function(){
        return 2019-this.yearOfBirth;
    }
}

var student = Object.create(Person);
student.id = 15478;
student.fName ='Sergei';
student.lName = 'Lutsev';
student.yearOfBirth = 1977;
student.specialization = 'Software applications specialist';


var emploee = Object.create(Person,{
    job : {value: 'teacher'}
});
*/

/*
var years = [1954,1952,1977,1981];

function calcAge(year){
    var d = new Date();
    return d.getFullYear() - year;
}

function fullAges(age){
    return age>=50;
}

function arrCalc(arrYear,fn){
    var ages = [];
    for(var i = 0; i < arrYear.length; i++)
        ages.push(fn(arrYear[i]));
    return ages;
}

function maxHeartRate(age){
    if(age<18 || age >81){
        return -1;
    }   
    
    return Math.round(206.9 - (0.67*age));
    
}

var ags = arrCalc(years,calcAge);
console.log(ags);

var boolArr = arrCalc(ags,fullAges);
console.log(boolArr);

var heartArr = arrCalc(ags,maxHeartRate);
console.log(heartArr);
*/

/*
var interviewQuestions = function(job){
    
    switch (job){
        case 'teacher':
            return function(name){
                console.log('What are you teaching, '+name+'?');
            }
        case 'designer':
            return function(name){
                console.log(name+', what do you know above UX gesigne?');
            }                    
        default:
            return function(name){
                console.log('What are you doing, '+name+'?');
            }
    }
    
}

var designerQue=interviewQuestions('designer');
designerQue('Mark');

interviewQuestions('teacher')('Sergei');
*/

/*
(function (name){
    console.log('Hello',name,'!!!');
})('Sergei');
*/

//////////////////////////////
//// closure
/*
function retairment(ageRet,country){
    var a = ' years left until retiretment.'
    
    return function(yearBirh){
        var d=new Date();
        var rest = ageRet - (d.getFullYear()-yearBirh);
        console.log(country,rest,a);
    }
    
}

var retUSA = retairment(66,'USA');
var retRus = retairment(67,'Russia');
var retGermany = retairment(65,'Germany');


retUSA(1977);
retUSA(1981);

retRus(1977);
retGermany(1977);
*/
/*

function interviewQuestions(job){
    var que ='';
    switch (job){
        case 'teacher':
            que = 'What subject do you teach?';
            break;
        case 'designer':
            que = 'What do you now about UX designe?';
            break;
        case 'programmer':
            que = 'What do you know about agile?';
            break;
        default:
            que = 'What doyou doing?';
    }
    
    return function(name){
        var hi = 'Hello, '+name+'!!!';
        console.log(hi,que);
    }
}


var teacherInt = interviewQuestions('teacher');
var designerInt = interviewQuestions('designer');
var programmerInt = interviewQuestions('programmer');
var driverInt = interviewQuestions('driver');

teacherInt('Mark');
teacherInt('John');

designerInt('Guimplen');

programmerInt('Bill');
programmerInt('Sergei');


driverInt('Konstantin');

*/

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good '+timeOfDay+', Ladies and Gentlemen! I\'m '+this.job+' and I\'m '+this.age+' years old.');
        }else if(style === 'friendly'){
            console.log('Hey! What\'s up? I\'m '+this.job+' and I\'m '+this.age+' years old. Have nice '+timeOfDay+'.');
        }
    }
};

var emely= {
  name: 'Emely',
    age: 35,
    job: 'designer'
};

john.presentation('formal','morning');


emely.presentation=john.presentation;
emely.presentation('friendly','evning');

//call method

john.presentation.call(emely,'friendly','afternoon');

/// BIND

var johnFriandly = john.presentation.bind(john,'friendly');
johnFriandly('morning');
johnFriandly('night');

var emelyFormal = john.presentation.bind(emely,'formal');
emelyFormal('morning');


//----------------------

var years = [1954,1952,1977,1981];

function calcAge(year){
    var d = new Date();
    return d.getFullYear() - year;
}

function fullAges(fl,age){
    return age>=fl;
}

function arrCalc(arrYear,fn){
    var ages = [];
    for(var i = 0; i < arrYear.length; i++)
        ages.push(fn(arrYear[i]));
    return ages;
}


var ages = arrCalc(years,calcAge);
console.log(ages);


var flAgess = arrCalc(ages,fullAges.bind(this,50));
console.log(flAgess);