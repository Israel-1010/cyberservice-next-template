import React from 'react';

const SimpleComponent: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src="https://icon-library.com/images/react-icon/react-icon-29.jpg" alt="React Logo"/>
        </div>
        <div>
          <div className="text-xl font-medium text-black">Hello from React Component</div>
          <p className="text-gray-500">You are running this application in <span className="font-bold text-pink-600">development</span> mode.</p>
        </div>
      </div>
    </div>
  )
}

export default SimpleComponent;