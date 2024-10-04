// import React from 'react';

// export const Badge = ({ children }) => {
//   return (
//     <span className="inline-block bg-blue-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
//       {children}
//     </span>
//   );
// };
// components/ui/badge.js
import React from 'react';

export const Badge = ({ children, className, ...props }) => {
  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded ${className}`} {...props}>
      {children}
    </span>
  );
};
