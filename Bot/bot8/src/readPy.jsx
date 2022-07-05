import * as fs from 'fs';
import { unlink } from 'fs';

// const Unlinked = ('./testFiles.hello.txt' ) = > 
  unlink(fs, err => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});

unlink()


// export const fetchTasksList = () =>
//   fetch(baseUrl).then(res => {
//     if (res.ok) {
//       return res.json();
//     }
//   });




// import React, { Component } from 'react';

// class CreateTaskInput extends Component {
//   state = {
//     value: '',
//   };

//   handleChange = event => {
//     this.setState({
//       value: event.target.value,
//     });
//   };

//   handleTaskCreate = () => {
//     this.props.onCreate(this.state.value);
//     this.setState({ value: '' });
//   };

//   render() {
//     return (
//       <div className="create-task">
//         <input
//           type="text"
//           value={this.state.value}
//           className="create-task__input"
//           onChange={this.handleChange}
//         />
//         <button className="btn create-task__btn" onClick={this.handleTaskCreate}>
//           Create
//         </button>
//       </div>
//     );
//   }
// }

// export default CreateTaskInput;