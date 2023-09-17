/* Inheritance in java script */
class animal {
  constructor(name, age) {
    this.name = name;
    this.age = age; 
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
  sleep() {
    console.log(`${this.name} is sleeping `);
  }
  move() {
    console.log(`${this.name} is moving`);
  }

}
    /* Dog class */
class Dog extends animal {
    bark(){
        console.log(`${this.name} is barking `);
    }
    faithFull(){
        console.log(`${this.name} is faitfull animal`);
    }
}
    /* Cat class */
class Cat extends animal {
    meow (){
        console.log(`${this.name} is meow`);
    }
    toughTongue(){
        console.log(`${this.name} is toughTonge`);
    } 
}
     /*Cow class */
class Cow extends animal {
    mon(){
        `${this.name} is mooning`
    }

}
const dog = new Dog('jacky' ,3) ;
const cat = new Cat('Blacky' ,2) ;
const cow = new Cow('Motu' , 7) ;
/*Dogs methods */

dog.  eat();
dog.sleep();
dog.move() ;
dog.bark() ;
dog.faithFull() ;

/*Cat methods */

cat.  eat();
cat.sleep();
cat.move() ;
cat.meow() ;
cat.toughTongue() ;
/* Cow methods */

cow.eat();
cow.sleep();
cow.move();
cow.mon()





