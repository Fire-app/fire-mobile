import routes from '../js/navigation/routes';
import { ICON_NAMES } from '../js/components/FireIcon';

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
    iconName: ICON_NAMES.HOME,
    route: routes.scenarios.homeOverview,
    title: 'Home',
  },
  {
    iconName: ICON_NAMES.BRIEFCASE,
    route: caseRoutes.work,
    title: 'Work',
  },
  {
    iconName: ICON_NAMES.WALK,
    route: caseRoutes.street,
    title: 'Street',
  },
  {
    iconName: ICON_NAMES.CAR,
    route: caseRoutes.driving,
    title: 'Driving',
  },
  {
    iconName: ICON_NAMES.SUBWAY,
    route: caseRoutes.publicTransport,
    title: 'Public_Transit',
  },
];
