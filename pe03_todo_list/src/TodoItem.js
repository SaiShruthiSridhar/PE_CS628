import React from 'react';
export default function TodoItem({ text, onClickDelete }) {
  return (
    <div className="todo-item">
      <span>{text}</span>
      <button className="button-delete" onClick={onClickDelete}>Delete</button>
    </div>
  );
}
