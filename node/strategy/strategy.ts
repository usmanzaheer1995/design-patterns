/**
 * 1. When you want to define a class that will have one behavior that is
 *    similar to other behaviors in a list.
 * 
 * 2. I want the class object to be able to choose from:
 *      - Not flying
 *      - Fly with wings
 *      - Fly super fast
 * 
 * 3. When you need to use one of several behaviors dynamically
 * 
 * Pros:
 *  a. Often reduces long lists of conditionals
 *  b. Avoids duplicate code
 *  c. Keeps class changes from forcing other class changes
 *  d. Can hide complicated/secret code from user
 * 
 * Cons:
 *  a. Increased number of objects/classse
 */

interface Flys {
  fly(): string;
}

class ItFlys implements Flys {
  fly(): string {
    return "Flying high";
  }
}

class CantFly implements Flys {
  fly(): string {
    return "I can't fly";
  }
}

class Animal {

  public flyingType: Flys;

  public tryToFly(): string {
    return this.flyingType.fly();
  }

  public setFlyingAbility(newFlyType: Flys) {
    this.flyingType = newFlyType;
  }
}

class Dog extends Animal {
  constructor() {
    super();

    this.flyingType = new CantFly();
  }
}

class Bird extends Animal {
  constructor() {
    super();

    this.flyingType = new ItFlys();
  }
}

const sparky: Animal = new Dog();
const tweety: Animal = new Bird();

console.log("Dog: ", sparky.tryToFly());
console.log("Bird: ", tweety.tryToFly());

sparky.setFlyingAbility(new ItFlys());
console.log("Dog: ", sparky.tryToFly());
