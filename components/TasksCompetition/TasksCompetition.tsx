import { FC } from 'react';
import { About } from '../../generated/graphql';
import { Item, List, Title, Wrap } from './styled';

type TasksCompetitionPropsType = {
  about: About;
};

export const TasksCompetition: FC<TasksCompetitionPropsType> = ({ about }) => {
  return (
    <Wrap>
      <Title>{about?.tasksTitle}</Title>
      <List>
        {about.tasks &&
          about?.tasks.map((it) => {
            return <Item key={it && it.id}>{it && it.value}</Item>;
          })}
      </List>
    </Wrap>
  );
};
