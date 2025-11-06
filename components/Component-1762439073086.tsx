import React, { useState } from 'react';

interface TodoItemProps {
    text: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ text }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleToggle = () => {
        setIsCompleted(!isCompleted);
    };

    return (
        <div className="flex items-center justify-between p-2 m-2 bg-gray-200 rounded">
            <span className={`flex-1 text-lg ${isCompleted ? 'line-through' : ''}`}>{text}</span>
            <button
                onClick={handleToggle}
                className={`px-2 py-1 ml-2 text-white bg-${isCompleted ? 'green' : 'red'}-500 rounded`}
            >
                {isCompleted ? 'Undone' : 'Done'}
            </button>
        </div>
    );
};

export default TodoItem;