import { FC } from 'react';
import {
  Wrap,
  UiDate,
  List,
  Item,
  Stage,
  Description,
  SubItem,
} from './styled';

const calendar = [
  { stage: 'РЕГИОНАЛЬНЫЙ ЭТАП', date: '1 АПРЕЛЯ – 31 АВГУСТА', subStage: null },
  {
    stage: 'ФЕДЕРАЛЬНЫЙ ЭТАП',
    date: '1 СЕНТЯБРЯ – 10 ДЕКАБРЯ',
    subStage: [
      {
        date: '1 СЕНТЯБРЯ – 20 СЕНТЯБРЯ',
        description:
          'Организационно-техническая подготовка федерального этапа Оператором Конкурса, формирование списков участников и состава жюри.',
      },
      {
        date: '21 СЕНТЯБРЯ – 15 ОКТЯБРЯ',
        description:
          'Регистрация Оператором Конкурса участников федерального этапа и размещение участниками конкурсных материалов на официальном сайте Конкурса. Организационное сопровождение размещения конкурсных материалов участников осуществляет региональный координатор.',
      },
      {
        date: '16 ОКТЯБРЯ – 30 НОЯБРЯ',
        description:
          'Экспертиза конкурсных материалов федерального этапа, включающая техническую проверку и содержательное оценивание. Формирование рейтингового списка участников Конкурса по итогам независимой профессиональной оценки членами жюри.',
      },
      {
        date: '1 ДЕКАБРЯ – 10 ДЕКАБРЯ',
        description:
          'Подведение итогов Конкурса, утверждение результатов Учредителем Конкурса.',
      },
    ],
  },
];

export const CalendarPage: FC = () => {
  return (
    <Wrap>
      <List>
        {calendar.map((it, i) => {
          return (
            <Item key={i}>
              <Stage>{it.stage}</Stage>
              <UiDate>{it.date}</UiDate>
              {it.subStage && (
                <ul>
                  {it.subStage.map((it, i) => {
                    return (
                      <SubItem key={i}>
                        <UiDate>{it.date}</UiDate>
                        <Description>{it.description}</Description>
                      </SubItem>
                    );
                  })}
                </ul>
              )}
            </Item>
          );
        })}
      </List>
    </Wrap>
  );
};