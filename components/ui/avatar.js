// // components/ui/Avatar.js
// export const Avatar = ({ src, alt }) => (
//     <div className="avatar">
//       <img src={src} alt={alt} className="avatar-image" />
//     </div>
//   );
  
//   export const AvatarFallback = ({ children }) => (
//     <div className="avatar-fallback">
//       {children}
//     </div>
//   );
  
//   export const AvatarImage = ({ src, alt }) => (
//     <img src={src} alt={alt} className="avatar-image" />
//   );
// components/ui/avatar.js
import React from 'react';

export const Avatar = ({ children, className, ...props }) => {
  return (
    <div className={`rounded-full overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  );
};

export const AvatarImage = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
};

export const AvatarFallback = ({ children }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-700">
      {children}
    </div>
  );
};
