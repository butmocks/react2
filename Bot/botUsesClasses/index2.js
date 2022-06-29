class User {

  constructor(id, name, sessionId) {
    Object.defineProperty(this, 'id', { value: id, writable: false });
    this._name = name;
    this._sessionId = sessionId;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }


}

class UserRepository {

  constructor(users) {
    this.users = Object.freeze(this.users);
  }

  get users() {
    return this.users;
  }

  getUserNames() {
    return this.users
      .map(user => user.name);

  }

  getUserIds() {
    return this.users
      .map(user => user.id);
  }

  getUserNameById(id) {
    const user = this.users
      .find(user => user.id === id);

    return user ? user.name : null;
    // return user && user.name;
    // return user?.name;
  }
}




// examples
const user = new User('1', 'Tom', 'session-id');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

// const users = [
//   { name: 'Taras', id: '1' },
//   { name: 'Ivan', id: '2'},
//   { name: 'Vova', id: '3'}
// ];

// function getUserNames(users) {
//   const arr = [];

//   for (const user of users) {
//     arr.push(user.name);
//   }

//   return arr;
// }

// function getUserIds(users) {
//   const arr = [];

//   for (const user of users) {
//     arr.push(user.id);
//   }

//   return arr;
// }

// function getUserNameById() {
//   const arr = [...users];
// arr.find(id => {
//     users.id = id;
//     return users.name;
//   });

//   return arr
// }

// console.log(getUserNames(users));
// console.log(getUserIds(users));
// console.log(getUserNameById(users));