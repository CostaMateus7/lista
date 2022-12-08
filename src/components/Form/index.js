import React from 'react';
import { BsPlusSquare } from 'react-icons/bs';
import PropTypes from 'prop-types';

export default function Form({
  handleChange, todoTitle, todoUpdate, setTodo,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1>Lista de Tarefas</h1>
      <div className="miniContainer">
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => setTodo({
            id: Math.random(),
            title: e.target.value,
            isComplete: false,
            update: todoUpdate,
          })}
        />
        <button
          type="submit"
          className="plus"
          onClick={handleChange}
        >
          <BsPlusSquare className="svg" />
        </button>

      </div>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  todoTitle: PropTypes.string.isRequired,
  setTodo: PropTypes.func.isRequired,
  todoUpdate: PropTypes.number.isRequired,
};
