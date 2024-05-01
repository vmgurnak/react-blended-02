import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <Grid>
      {todos.map(({ id, text }, index) => (
        <GridItem key={id}>
          <TodoListItem
            text={text}
            index={index}
            onDelete={() => onDelete(id)}
            onEdit={onEdit}
            id={id}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
