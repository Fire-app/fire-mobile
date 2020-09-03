import { FEATHER, IONICONS } from './fontFamilies';
import routes from '../js/navigation/routes';

const caseRoutes = routes.scenarios.cases;

export const HOME_SCENARIOS = [
  {
    route: caseRoutes.outsideHome,
    title: 'Agent_Outside_Home',
  },
  {
    route: caseRoutes.insideHome,
    title: 'Agent_Inside_Home',
  },
  {
    route: caseRoutes.homeArrest,
    title: 'Agent_Arrests_Me',
  },
];

export const SCENARIOS = [
  {
    icon: {
      family: FEATHER,
      name: 'home',
    },
    route: routes.scenarios.homeOverview,
    title: 'Home',
  },
  {
    icon: {
      family: FEATHER,
      name: 'briefcase',
    },
    route: caseRoutes.work,
    title: 'Work',
  },
  {
    icon: {
      family: IONICONS,
      name: 'ios-walk',
    },
    route: caseRoutes.street,
    title: 'Street',
  },
  {
    icon: {
      family: IONICONS,
      name: 'md-car',
    },
    route: caseRoutes.driving,
    title: 'Driving',
  },
  {
    icon: {
      family: IONICONS,
      name: 'ios-subway',
    },
    route: caseRoutes.publicTransport,
    title: 'Public_Transit',
  },
];
