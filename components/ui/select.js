'use client';

import React, { useState } from 'react';

export const Select = ({ children, name, required, onChange }) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelect = (value) => {
    setSelectedValue(value);
    setOpen(false);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        className={`border p-2 rounded w-full text-left ${open ? 'text-black' : ''}`}
        onClick={() => setOpen(!open)}
      >
        {selectedValue || 'Select'}
      </button>
      {open && (
        <div className="absolute z-10 mt-1 border bg-white rounded shadow-lg w-full">
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              onClick: () => handleSelect(child.props.value),
            });
          })}
        </div>
      )}
    </div>
  );
};

export const SelectTrigger = ({ children }) => children;

export const SelectContent = ({ children }) => <>{children}</>;

export const SelectItem = ({ value, children, onClick }) => (
  <div
    className="p-2 hover:bg-gray-200 cursor-pointer"
    onClick={onClick}
  >
    {children}
  </div>
);

export const SelectValue = ({ placeholder }) => <span>{placeholder}</span>;
