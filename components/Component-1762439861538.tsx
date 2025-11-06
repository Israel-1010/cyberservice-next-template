import React, { useState } from 'react';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [task, setTask] = useState<string>('');

  const handleAddTodo = () => {
    const newTodo = {
      id: todos.length,
      task: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTask('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="p-8">
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 rounded"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded ml-4"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
      <div>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`p-2 mb-2 rounded ${todo.completed ? 'bg-green-500' : 'bg-red-500'} text-white`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.task}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;