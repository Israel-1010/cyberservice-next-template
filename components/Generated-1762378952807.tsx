import React from 'react';

const SimpleComponent: React.FC = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <svg className="h-12 w-12" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
              <stop stopColor="#2397B3" offset="0%"/>
              <stop stopColor="#13547A" offset="100%"/>
            </linearGradient>
          </defs>
          <circle fill="url(#a)" cx="20" cy="20" r="20"/>
        </svg>
      </div>
      <div>
        <div className="text-xl font-medium text-black">Simple Component</div>
        <p className="text-gray-500">You have a new message!</p>
      </div>
    </div>
  );
}

export default SimpleComponent;