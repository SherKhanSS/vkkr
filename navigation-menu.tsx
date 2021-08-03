import CupIcon from './components/Icons/CupIcon';
import FolderIcon from './components/Icons/FolderIcon';
import NewsIcon from './components/Icons/NewsIcon';
import UserIcon from './components/Icons/UserIcon';
import { routesPath } from './routes-path/routes-path';

const navigation = [
  {
    name: 'Конкурс',
    link: null,
    icon: <CupIcon />,
    subMenu: [
      {
        name: 'О конкурсе',
        link: routesPath.about,
      },
      {
        name: 'Тематические направления',
        link: routesPath.thematicDirections,
      },
      {
        name: 'Календарь',
        link: routesPath.calendar,
      },
    ],
  },
  {
    name: 'Документы',
    link: routesPath.documents,
    icon: <FolderIcon />,
  },
  {
    name: 'Новости',
    link: routesPath.news,
    icon: <NewsIcon />,
  },
  {
    name: 'Войти',
    link: '/',
    icon: <UserIcon />,
  },
];

export default navigation;
