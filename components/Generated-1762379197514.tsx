import React from 'react';

const SimpleComponent: React.FC = () => {
  return (
    <div className="text-center py-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click me
      </button>
    </div>
  );
}

export default SimpleComponent;