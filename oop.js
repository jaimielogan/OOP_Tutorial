//Abstraction - see big picture by creating Dog
//Inheritance - create mutual keys & objects that would be true for all dogs
//Dog Class Constuctor
var Dog = function(name){
  //Name, legs, and breed are properties
  this.name = name;
  this.legs = 4;
  this.breed = 'unknown';
};

//Method is a function within the Dog Class
Dog.prototype.bark = function(){
  return "Woof!";
};

//Create a specific dog based on the superclass dog
//Bud is an instance of Dog
var bud = new Dog('bud');

//Polymorphism - Change properties of a specific dog
bud.breed = 'lab';

console.log(bud.legs);
console.log(bud.name);
// When calling the method bark, you must invoke the function!
console.log(bud.bark());

//-----------------------//

var newPerson = function(name){
  this.name = name;
  this.stateResidence = 'CO';
  this.cohort = 'g31';
};

newPerson.prototype.id = function(){
    return this.name + this.stateResidence + this.cohort;
  };

var jaimie = new newPerson('jaimie');

console.log(jaimie.id());


//-----------------------//
var newPantry = function(){
  this.cerealBoxes = 0;
  this.fruit = 0;
  this.milkJugs = 0;
};

newPantry.prototype.groceryShopping = function(){
  this.cerealBoxes += 2;
  this.fruit += 10;
  this.milkJugs += 1;
};

var mypantry = new newPantry();
console.log('My pantry is empty! I have', mypantry.cerealBoxes, 'boxes of cereal');

mypantry.groceryShopping();

console.log('Now that I went to the store, I have', mypantry.cerealBoxes, 'boxes of cereal');
