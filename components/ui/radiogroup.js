// src/components/ui/RadioGroup.js

import React from 'react';

export const RadioGroup = ({ value, onValueChange, children }) => {
  return (
    <div className="flex flex-col space-y-2">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { checked: child.props.value === value, onChange: onValueChange });
      })}
    </div>
  );
};

export const RadioGroupItem = ({ value, id, checked, onChange }) => {
  return (
    <div>
      <input
        type="radio"
        value={value}
        id={id}
        checked={checked}
        onChange={() => onChange(value)}
        className="mr-2"
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};
