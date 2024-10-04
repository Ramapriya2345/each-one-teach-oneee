'use client';

import React from 'react';

export const Switch = ({ id, checked, onCheckedChange }) => {
  return (
    <label htmlFor={id} className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="hidden"
      />
      <div className={`w-10 h-4 rounded-full ${checked ? 'bg-green-500' : 'bg-gray-300'} transition`}>
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${checked ? 'translate-x-6' : 'translate-x-0'}`}
        />
      </div>
    </label>
  );
};
