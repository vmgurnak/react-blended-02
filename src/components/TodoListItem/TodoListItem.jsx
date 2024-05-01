import style from './TodoListItem.module.css';

import { Text } from '..';
import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri';

export const TodoListItem = ({ text, index, onDelete, onEdit, id }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{index + 1}
      </Text>
      <Text>{text}</Text>
      <button
        onClick={() => onEdit(id, text)}
        className={style.deleteButton}
        type="button"
      >
        <RiEditLine size={24} />
      </button>
      <button onClick={onDelete} className={style.deleteButton} type="button">
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
