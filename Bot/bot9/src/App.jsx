import React from 'react';
import ReactDOM from 'react-dom';

import Form from './Form';
import TextInput from './TextInput';

function App() {
  return (
    <div className="App">
      <Form>
        <TextInput
          id="test"
          placeholder="testing"
          validatge="numeric"
          events={{
            onChange: data => console.log(data),
            onFocus: val => console.log('focused!'),
            onBlur: value => console.log('blurred!'),
          }}
        />
      </Form>
    </div>
  );
}
