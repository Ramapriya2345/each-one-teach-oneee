// export const Input = ({ ...props }) => {
//     return (
//       <input
//         {...props}
//         className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//       />
//     );
//   };
// components/ui/input.js
import React from 'react';

export const Input = ({ className, ...props }) => {
  return (
    <input
      className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
};
