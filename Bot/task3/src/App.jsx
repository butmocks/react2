import React from 'react';
// import UserForm from './UserForm.jsx';
import Diamond from './Diamond.py'



let urlFile = /Diamond.py

class App extends React.Component {
  createUser = userData => {
    console.log(userData);
  };
  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
