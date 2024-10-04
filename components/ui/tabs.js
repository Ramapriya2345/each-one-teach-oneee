// components/ui/tabs.js
import React, { useState } from 'react';

export const Tabs = ({ defaultValue, children, className }) => {
  const [selectedTab, setSelectedTab] = useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (child.type === TabsList) {
          return React.cloneElement(child, { selectedTab, setSelectedTab });
        }
        return React.cloneElement(child, { selectedTab });
      })}
    </div>
  );
};

export const TabsList = ({ children, selectedTab, setSelectedTab }) => {
  return (
    <div className="flex border-b border-gray-300 mb-4">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { selectedTab, setSelectedTab })
      )}
    </div>
  );
};

export const TabsTrigger = ({ value, children, selectedTab, setSelectedTab }) => {
  const active = selectedTab === value ? 'border-b-2 border-blue-500' : '';
  return (
    <button
      className={`px-4 py-2 ${active}`}
      onClick={() => setSelectedTab(value)}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, selectedTab, children }) => {
  return selectedTab === value ? <div>{children}</div> : null;
};
