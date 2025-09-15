// Object Oriented Prgramming


// Encapsulation
class User {
  #age; //abstaction
  constructor(name, age, address) {
    (this.name = name), (this.#age = age), (this.address = address);
  }

  // methods
  login() {
    console.log(`${this.name} has logged in`);
  }
}

// Instances
const user = new User("Hammed", 56, "London");
const user2 = new User("Kenny", 32, "Oyo");
const user3 = new User("Jojo", 67, "Abia");
const user4 = new User("Alade", 23, "Lekki");

// console.log(user);
console.log(user2);
// console.log(user3);
// console.log(user4);
// user2.login()

// Inhertance
class Admin extends User {
  constructor(name, age, address, token, adminKey) {
    super(name, age, address), (this.token = token), (this.adminKey = adminKey);
  }

  deleteUser(username) {
    console.log(`${this.name} has deleted ${username}`);
  }

  login() {
    console.log(`${this.name} has logged in as an admin`);
    //Polymorphism
  }
}

const admin = new Admin("leks", 22, "onireke", "2778282882", 89992);
console.log(admin);

admin.deleteUser(user.name);
admin.login()
// console.log(0);
