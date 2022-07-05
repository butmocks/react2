import React from 'react';
import classNames from 'classnames';
import * as fs from 'fs-extra';
// /home/butmocks/Projects/react2/Bot/bot8/node_modules/fs

// const Task = ({ id, done, text, onChange, onDelete }) => {
//   // const listItemClasses = classNames( 'list-item', { 'list-item_done' : done })
//   return (
//       <span className="list-item__text"></span>
//   );
// };

// export default Task;


import { open, close } from 'fs';
const Read = () => {
open('./testFiles/hello.txt', 'wx', (err, fd) => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.error('myfile already exists');
      return;
    }

    throw err;
  }

  try {
    writeMyData(fd);
  } finally {
    close(fd, err => {
      if (err) throw err;
    });
  }
});
}

export default Read
// const Task = ({ id, done, text, onChange, onDelete }) => {
//   // const listItemClasses = classNames( 'list-item', { 'list-item_done' : done })
//   return (
//     <li className={classNames('list-item', { 'list-item_done': done })}>
//       {/* <input
//         type="checkbox"
//         className="list-item__checkbox"
//         defaultChecked={done}
//         onChange={() => onChange(id)}
//       /> */}
//       <span className="list-item__text">{text}</span>
//       <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
//     </li>
//   );
// };

// export default Task;
