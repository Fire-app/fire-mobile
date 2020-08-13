import routes from '../js/navigation/routes';
import { FEATHER, IONICONS } from './fontFamilies';

const caseRoutes = routes.scenarios.cases;

export const HOME_SCENARIOS = [
  {
    title: 'Agent_Outside_Home',
    route: caseRoutes.outsideHome,
  },
  {
    title: 'Agent_Inside_Home',
    route: caseRoutes.insideHome,
  },
  {
    title: 'Agent_Arrests_Me',
    route: caseRoutes.homeArrest,
  },
];

export const SCENARIOS = [
  {
    title: 'Home',
    route: routes.scenarios.homeOverview,
    icon: {
      name: 'home',
      family: FEATHER,
    },
  },
  {
    title: 'Work',
    route: caseRoutes.work,
    icon: {
      name: 'briefcase',
      family: FEATHER,
    },
  },
  {
    title: 'Street',
    route: caseRoutes.street,
    icon: {
      name: 'ios-walk',
      family: IONICONS,
    },
  },
  {
    title: 'Driving',
    route: caseRoutes.driving,
    icon: {
      name: 'md-car',
      family: IONICONS,
    },
  },
  {
    title: 'Public_Transit',
    route: caseRoutes.publicTransport,
    icon: {
      name: 'ios-subway',
      family: IONICONS,
    },
  },
];
