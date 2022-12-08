import React, { useEffect, useState } from 'react';
import Form from '../Form';
import List from '../List';

export default function Main() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState({
    id: Math.random(),
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
        id: Math.random(),
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
        id: Math.random(),
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
      id: todo.id,
      title: copyList[index].title,
      isComplete: false,
      update: index,
    });
  };

  return (
    <div className="container">
      <Form
        handleChange={handleChange}
        todoTitle={todo.title}
        todoUpdate={todo.update}
        setTodo={setTodo}
      />
      <List
        handleCheckTodo={handleCheckTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdate={handleUpdate}
        list={list}
      />
    </div>

  );
}
