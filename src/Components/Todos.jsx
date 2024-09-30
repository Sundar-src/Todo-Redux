import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../redux/counter/TodoSlice';
import './Todos.css'; 

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="todos-container">
        <h2 className="todos-title">Your Todos</h2>
        <ul className="todos-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span className="todo-text">{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="remove-button"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todos;

