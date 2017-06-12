class Person {
  constructor (name = 'Nobody', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting () {
    return `Hi, my name is ${this.name}.`;
  }
  getDescription () {
    return `${this.name} is ${this.age} year(s) old.`
  }
  toString () {
    return this.getGreeting();
//    JSON.stringify(this.name)
  }
}


class Child extends Person {
  constructor (name, age, likes) {
    super(name, age);
    this.likes = likes;
  }
  getGreeting () {
    return`Hiiiii My namez ${this.name} and I like ${this.likes}.`
  }
}

class Baby extends Person {

    getGreeting () {
      return "Wahhhh!";
  }
}
//baby getGreeting Wahhh


//print getDescription --

var me = new Person('Rent', 53);
var you = new Baby('Andrew', 25);
var anonymous = new Child('Boris', 60, 'Lavoris');

//console.log(you.toString())


console.log(you.getGreeting())
console.log(me.getDescription());
console.log(anonymous.getGreeting());
