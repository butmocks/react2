class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty(user1) {
    user1.name = "";
    user1.age = null;
    return user1;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(value) {
    if (value < 0) {
      return false;
    }
    this.age = value;
    if (this.age >= 25) {
      this.requestNewPhoto();
    }
    return value;
  }
}

const user1 = new User("Taras", 17);
const user2 = new User("Ivan", 30);

console.log(User.createEmpty(user1));