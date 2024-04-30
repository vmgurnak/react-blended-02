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

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <TodoList todos={todos} onDelete={handleDelete} />
    </>
  );
};
