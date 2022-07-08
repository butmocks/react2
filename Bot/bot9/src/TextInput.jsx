import React, { useContext, useEffect } from 'react';
import { FormCtx } from './Form';

const TextInput = props => {
  const { setFields, addField } = useContext(FormCtx);
  const { id, value, classes, onChange, validate, placeholder, label = '' } = props;
  const { contClass, fieldClass, errorClass } = classes;

  useEffect(() => {
    addField({
      field: props,
      value,
    });
  }, []);

  return (
    <div class={contClass}>
      {label}
      <input
        id={id}
        type="text"
        value={value}
        class={fieldClass}
        onChange={onChange}
        validatge={validate}
        placeholder={placeholder}
      />
      <p class={errorClass}>// place for errors</p>
    </div>
  );
};

export default TextInput;
