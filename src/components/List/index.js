import React from 'react';
import { BsPen } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import PropTypes from 'prop-types';

export default function List({
  handleCheckTodo, handleDeleteTodo, handleUpdate, list,
}) {
  return (
    <ul>
      {list?.map((li, index) => (

        <li key={li.id}>
          <div>
            <input
              type="checkbox"
              onClick={() => handleCheckTodo(index)}
              defaultChecked={li.isComplete === true ? 'checked' : ''}
            />

            <span>{li.isComplete === false ? li.title : <s>{li.title}</s>}</span>
          </div>
          <div>
            <BsPen onClick={() => handleUpdate(index)} />
            <AiOutlineDelete onClick={() => handleDeleteTodo(index)} />
          </div>
        </li>

      ))}
    </ul>
  );
}
List.propTypes = {
  handleCheckTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  list: PropTypes.instanceOf(Array).isRequired,
};
