import { nanoid } from 'nanoid';

import { useState } from 'react';

import { Form, Text, TodoList } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const handleSubmit = text => {
    const newTodo = { id: nanoid(), text };
    setTodos(prev => [...prev, newTodo]);
  };

  const handleDelete = contactId => {
    setTodos(prev => prev.filter(todo => todo.id !== contactId));
  };

  const handleEdit = (id, text) => {
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, text } : todo)),
    );
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <TodoList todos={todos} onDelete={handleDelete} onEdit={handleEdit} />
    </>
  );
};
