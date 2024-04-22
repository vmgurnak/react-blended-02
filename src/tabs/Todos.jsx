import { nanoid } from 'nanoid';

import { useState } from 'react';

import { Form, Text, TodoList } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const handleSubmit = text => {
    const newTodo = { id: nanoid(), text };
    setTodos(prev => [...prev, newTodo]);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <TodoList />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};
