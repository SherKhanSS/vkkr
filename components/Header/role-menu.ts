import { routesPath } from '../../routes-path/routes-path';

const roles = [
  {
    name: 'УЧАСТНИКАМ',
    link: routesPath.participants,
    icon: '/img/participants.png',
  },
  {
    name: 'ЭКСПЕРТАМ',
    link: routesPath.experts,
    icon: '/img/experts.png',
  },
  {
    name: 'РЕГИОНАЛЬНЫМ КООРДИНАТОРАМ',
    link: routesPath.coordinators,
    icon: '/img/coordinators.png',
  },
];

export default roles;
