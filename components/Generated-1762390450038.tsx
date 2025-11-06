import React, { useState } from 'react';

interface ButtonProps {
    initialCounter?: number;
}

const Button: React.FC<ButtonProps> = ({ initialCounter = 0 }) => {
    const [counter, setCounter] = useState(initialCounter);

    const handleButtonClick = () => setCounter(counter + 1);

    return (
        <button 
            onClick={handleButtonClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Clicked {counter} times
        </button>
    );
}

export default Button;