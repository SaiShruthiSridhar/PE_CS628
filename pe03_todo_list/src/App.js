import React, { useState } from 'react';
import TodoList from './TodoList';

export default function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const deleteTask = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="app">
      <h1>ToDo List App</h1>
      <input
        type="text"
        placeholder="Enter task description"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="button-add" onClick={addTask}>Add Task</button>

      <TodoList todos={todos} onClickDelete={deleteTask} />
    </div>
  );
}
