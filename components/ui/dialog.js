// src/components/ui/Dialog.js

import React from 'react';

export const Dialog = ({ open, onOpenChange, children }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${open ? '' : 'hidden'}`}>
      <div className="bg-black opacity-50 fixed inset-0" onClick={() => onOpenChange(false)} />
      <div className="bg-white rounded-lg p-4 z-10">{children}</div>
    </div>
  );
};

export const DialogTrigger = ({ children, asChild }) => {
  return <span>{React.cloneElement(children, { onClick: () => children.props.onOpenChange(true) })}</span>;
};

export const DialogContent = ({ children }) => {
  return <div>{children}</div>;
};

export const DialogHeader = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

export const DialogTitle = ({ children }) => {
  return <h3 className="text-lg font-semibold">{children}</h3>;
};
