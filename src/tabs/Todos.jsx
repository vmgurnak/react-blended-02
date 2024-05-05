import { nanoid } from 'nanoid';

import { useState } from 'react';

import { Form, Text, TodoList, EditForm } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  // function open edit form
  const openEditForm = () => {
    setIsEditing(true);
  };

  // function close edit form
  const closeEditForm = () => {
    setIsEditing(false);
  };

  // function add new todo
  const handleSubmit = text => {
    const newTodo = { id: nanoid(), text };
    setTodos(prev => [...prev, newTodo]);
  };

  // function delete todo
  const handleDelete = contactId => {
    setTodos(prev => prev.filter(todo => todo.id !== contactId));
  };

  // function save current todo
  const saveCurrentTodo = (id, text) => {
    setCurrentTodo({ id, text });
  };

  // function edit todo
  const hadleEdit = ({ id, text }) => {
    const result = todos.map(todo => {
      return todo.id === id ? { id, text } : todo;
    });
    setTodos(result);
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          onEdit={hadleEdit}
          closeEditForm={closeEditForm}
          setCurrentTodo={setCurrentTodo}
        />
      ) : (
        <Form onSubmit={handleSubmit} />
      )}
      {/* <Form onSubmit={handleSubmit} /> */}
      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onCurrent={saveCurrentTodo}
        openEditForm={openEditForm}
      />
    </>
  );
};
