import { nanoid } from 'nanoid';

import { useState } from 'react';

import { Form, Text, TodoList, EditForm } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const openEditForm = () => {
    setIsEditing(true);
  };

  const closeEditForm = () => {
    setIsEditing(false);
  };

  const handleSubmit = text => {
    const newTodo = { id: nanoid(), text };
    setTodos(prev => [...prev, newTodo]);
  };

  const handleDelete = contactId => {
    setTodos(prev => prev.filter(todo => todo.id !== contactId));
  };

  const saveCurrentTodo = (id, text) => {
    setCurrentTodo({ id, text });
  };

  const hadleEdit = ({ id, text }) => {
    setTodos(prev =>
      prev.map(todo => (todo.id === currentTodo.id ? currentTodo : todo)),
    );
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          onEdit={hadleEdit}
          onClose={closeEditForm}
        />
      ) : (
        <Form onSubmit={handleSubmit} />
      )}
      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onEdit={saveCurrentTodo}
        openEditForm={openEditForm}
      />
    </>
  );
};
