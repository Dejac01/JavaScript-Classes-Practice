/* example of encapsulating data (attributes/properties) & behavior (methods):*/
const cohort = {
  id: 'SEIR Flex Madeline',
  students: ['Diana', 'Julio', 'Cory'],
  instructors: ['Arthur', 'Nando', 'Teo', 'Sean'],
  addStudent: function(name) {
    name = name[0].toUpperCase() + name.substr(1).toLowerCase();
    this.students.push(name);
  },
  pickRandomStudent: function() {
    const rndIdx = Math.floor(Math.random() * this.students.length);
    return this.students[rndIdx];
  }
};
console.log(this);
console.log(cohort);
//this refers to the object we are calling which is cohort


//when writing a class it should always start with uppercase
class Vehicle {
 // Code to define the class's properties and methods goes here
}
const v1 = new Vehicle();
console.log(v1);

//When a class is being instantiated, the special constructormethod in the class will automatically be called:

class Vehicle {
	constructor(vin, make) {
		this.vin = vin;
		this.make = make;
	// return is not needed
	// because the new object is returned by default
	}
}

//const plane = new Vehicle('X123Y', 'Boeing');*/

//const car = new Vehicle('C6532', 'BMW', 'i8';
//console.log

class Person { 
  constructor (first , last, haircolor, height)
}