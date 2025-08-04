import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onClickDelete }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          text={todo}
          onClickDelete={() => onClickDelete(index)}
        />
      ))}
    </div>
  );
}
