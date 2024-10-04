
// export function Button({ children, className, ...props }) {
//     return (
//       <button className={`bg-blue-600 text-white py-2 px-4 rounded ${className}`} {...props}>
//         {children}
//       </button>
//     );
//   }
  // components/ui/button.js
import React from 'react';

export const Button = ({ children, className, ...props }) => {
  return (
    <button className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${className}`} {...props}>
      {children}
    </button>
  );
};
