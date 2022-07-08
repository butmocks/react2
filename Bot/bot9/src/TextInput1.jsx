import React, { useContext, useEffect } from 'react';
import { FormCtx } from './Form';

const TextInput = props => {
  const { id } = props;
  const { setFields, addField, fields } = useContext(FormCtx);
  const field = fields[id] || {};
  const { value, classes, validate, placeholder, label = '', events = {} } = field;
  const { onChange, ...restEvents } = events;
  const { contClass, fieldClass, errorClass } = classes;

  const handleChange = event => {
    setFields(event, field);

    if (typeof onChange === 'function') {
      onChange({
        ...field,
        value: event.target.value,
      });
    }
  };

  useEffect(() => {
    addField({
      field: props,
      value,
    });
  }, []);

  return (
    <div className={contClass}>
      {label}
      <input
        {...restEvents}
        id={id}
        type="text"
        value={value}
        className={fieldClass}
        validate={validate}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <p className={errorClass}>// place for errors</p>
    </div>
  );
};

export default TextInput;
