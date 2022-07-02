// import React from 'react';
// import Search from './Search.jsx';
// import Diamond from './Diamond.jsx'
// const App = () => {
//   return (
//     <div className='find'>
//       <Search />
//     </div>
//   );
// };

// export default App;
// Let's make <Card text='Write the docs' /> draggable!

import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './Constants'

/**
 * Your Component
 */
export default function Card({ isDragging, text }) {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { text },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    []
  )
  return (
    <div ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  )
}