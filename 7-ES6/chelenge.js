
const sizeClassificatior = new Map();
sizeClassificatior.set('tiny','Tiny');
sizeClassificatior.set('small', 'Small');
sizeClassificatior.set('normal','Normal');
sizeClassificatior.set('big','Big');
sizeClassificatior.set('huge','Huge');

class Unit{
    constructor(name,buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Unit {
    constructor(name, buildYear,treeNumber =0, area = 0){
        super(name, buildYear);
        this.treeNumber = treeNumber;
        this.area = area;
    }
    
    treeDensity(){
        return this.area === 0 ? 0 : (this.treeNumber/this.area);
    }
    
    printRep(){
        console.log(`${this.name} has a tree density of ${this.treeDensity().toFixed(3)} trees per squer km`);
    }
}

class Street extends Unit {
    constructor(name, buildYear, length = 0, sizeClass = sizeClassificatior.get('normal')){
        super(name, buildYear);
        this.length = length;
        this.sizeClass =sizeClass;
    }
    printRep(){
    console.log(`${this.name}, build in ${this.buildYear}, is a ${this.sizeClass} stret`);
    }
}


// create parks
let parks = [];
parks[0] = new Park('Green Park', 1965, 8000, 15);
parks[1] = new Park('National Park', 1990, 10000, 80);
parks[2] = new Park('Oak Park', 1985, 35000, 150);

const currentYear = new Date().getFullYear();
let parkAgeAve = 0;
const checkMaxTree = 15000;
let parkAges = 0;
parks.forEach(pk => {
  parkAges+= currentYear - pk.buildYear;
});

parkAgeAve = parkAges/parks.length;

console.log('--------- PARK REPORT --------');
console.log(`Our ${parks.length} parks have an average age of ${parkAgeAve} years`);

for(const pk of parks){
    pk.printRep();
}

parks.forEach(pk => {
    if(pk.treeNumber > checkMaxTree)
        console.log(`${pk.name} has more then ${checkMaxTree} trees`);
});


// create street 

let streets = [];

streets[0] = new Street('Ocean Avenue',1999,15,sizeClassificatior.get('big'));
streets[1] = new Street('Evergreen Street',2008,4,sizeClassificatior.get('small'));
streets[2] = new Street('4th Street',2015,10);
streets[3] = new Street('Sunset Boulevard',1982,45,sizeClassificatior.get('huge'));

console.log('--------- STREET REPORT --------');
let totalLength = 0;
for(let st of streets){
    totalLength += st.length;
}
let stAve = totalLength/streets.length;

console.log(`Our ${streets.length} have a total ${totalLength} km, with an average of ${stAve} km`);

streets.forEach(st => st.printRep());











































