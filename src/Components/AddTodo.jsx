import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/counter/TodoSlice';
import './AddTodo.css';


const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <>
        <h1 className='heading'>Todo App</h1>
      <form onSubmit={addTodoHandler} className="todo-form">
        <input
          type="text"
          className="todo-input"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="todo-button">Add</button>
      </form>
    </>
  );
};

export default AddTodo;

