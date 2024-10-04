// export function Card({ children }) {
//     return <div className="bg-white shadow-md rounded-md">{children}</div>;
//   }
  
//   export function CardHeader({ children }) {
//     return <div className="p-4 border-b">{children}</div>;
//   }
  
//   export function CardTitle({ children }) {
//     return <h2 className="text-xl font-bold">{children}</h2>;
//   }
  
//   export function CardDescription({ children }) {
//     return <p className="text-sm text-gray-600">{children}</p>;
//   }
  
//   export function CardContent({ children }) {
//     return <div className="p-4">{children}</div>;
//   }
// components/ui/card.js
import React from 'react';

export const Card = ({ children, className, ...props }) => {
  return (
    <div className={`border border-gray-200 rounded-lg shadow-md p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

export const CardTitle = ({ children }) => {
  return <h2 className="text-lg font-bold mb-2">{children}</h2>;
};

export const CardDescription = ({ children }) => {
  return <p className="text-gray-600 mb-4">{children}</p>;
};

export const CardContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
