import React from 'react';

interface SimpleComponentProps {
  title: string;
}

const SimpleComponent: React.FC<SimpleComponentProps> = ({ title }) => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"/>
      </div>
      <div>
        <div className="text-xl font-medium text-black">{title}</div>
        <p className="text-gray-500">You have a new message!</p>
      </div>
    </div>
  );
}

export default SimpleComponent;