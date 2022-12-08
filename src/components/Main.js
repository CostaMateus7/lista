import React, { useEffect, useState } from 'react';
import { BsPlusSquare, BsPen } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';

export default function Main() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState({
    title: '',
    isComplete: false,
    update: -1,
  });
  useEffect(() => {
    const listLocalStorage = localStorage.getItem('list');
    if (listLocalStorage) {
      setList(JSON.parse(listLocalStorage));
    }
  }, []);

  const handleDeleteTodo = (index) => {
    const copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
    localStorage.removeItem('list');
    if (copyList !== []) {
      localStorage.setItem('list', JSON.stringify(copyList));
    }
  };

  const handleChange = async () => {
    if ((todo.title).trim() === '') {
      return;
    }
    if ((todo.update) === -1) {
      const copy = [...list, todo];
      setList(copy);
      setTodo({
        title: '',
        isComplete: false,
        update: -1,
      });
      localStorage.setItem('list', JSON.stringify(copy));
    } else {
      const copyList = [...list];
      const index = todo.update;
      copyList[index] = todo;
      setList(copyList);
      setTodo({
        title: '',
        isComplete: false,
        update: -1,
      });
      localStorage.setItem('list', JSON.stringify(copyList));
    }
  };

  const handleCheckTodo = (index) => {
    const copyList = [...list];
    copyList[index].isComplete = !copyList[index].isComplete;
    setList(copyList);
    localStorage.setItem('list', JSON.stringify(list));
  };

  const handleUpdate = (index) => {
    const copyList = [...list];
    setTodo({
      title: copyList[index].title,
      isComplete: false,
      update: index,
    });
  };

  return (

    <form onSubmit={(e) => e.preventDefault()} className="container">
      <h1>Lista de Tarefas</h1>
      <div className="miniContainer">
        <input
          type="text"
          value={todo.title}
          onChange={(e) => setTodo({
            title: e.target.value,
            isComplete: false,
            update: todo.update,
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
      <ul>
        {list?.map((li, index) => (

          <li key={li}>
            <div>
              <input
                type="checkbox"
                onClick={() => handleCheckTodo(index)}
                checked={li.isComplete === true ? 'checked' : ''}
              />
              {li.isComplete === false ? li.title : <s>{li.title}</s>}
            </div>
            <div>
              <BsPen onClick={() => handleUpdate(index)} />
              <AiOutlineDelete onClick={() => handleDeleteTodo(index)} />
            </div>
          </li>

        ))}
      </ul>
    </form>
  );
}
