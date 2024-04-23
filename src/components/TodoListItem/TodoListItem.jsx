import style from './TodoListItem.module.css';

import { Text } from '..';
import { RiDeleteBinLine } from 'react-icons/ri';

export const TodoListItem = ({ text, index }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{index + 1}
      </Text>
      <Text>{text}</Text>
      <button className={style.deleteButton} type="button">
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
