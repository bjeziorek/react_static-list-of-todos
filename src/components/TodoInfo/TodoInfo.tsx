import { FC } from 'react';
import { Todo } from '../../types/Todo';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo';

interface Props {
  todo:Todo;
}

export const TodoInfo: FC<Props> = (props) => {
  const { completed, title, user }
  = props.todo;

  return (
    <article className={`TodoInfo ${completed
      ? 'TodoInfo--completed'
      : ''}`}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {user && (<UserInfo user={user} />)}
    </article>
  );
};
