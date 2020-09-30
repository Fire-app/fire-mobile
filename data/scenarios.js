import { ICON_NAMES } from '../js/components/FireIcon/iconNames';

export const SCENARIO_MAP = {
  SCENARIO_DRIVING: {
    tips: [
      'do_not_open_car',
      'tell_agent_that_you_want_to_remain_silent',
      'call_your_attorney_while_in_car',
      'do_not_present_your_license',
      'do_not_sign_or_answer_wo_lawyer',
    ],
    title: 'scenario_driving',
    warning: {
      subtitle: 'stay_calm_do_not_open_car',
      title: 'do_not_drive_away',
    },
  },
  SCENARIO_HOME_ARREST: {
    tips: [
      'do_not_resist_arrest',
      'do_not_provide_information',
      'do_not_sign_anything',
    ],
    title: 'scenario_home_arrest',
    warning: {
      subtitle: 'remain_silent_wait_to_speak',
      title: 'do_not_sign_anything_wo_lawyer',
    },
  },
  SCENARIO_HOME_INSIDE: {
    scenarioItems: [
      {
        bullets: [
          'children_are_present',
          'you_are_ill',
          'need_to_arrange_care',
        ],
        title: 'tell_agents_if',
      },
      {
        subtitle: 'say_you_deny_search',
        title: 'agent_no_warrant?',
      },
    ],
    tips: ['do_not_resist_arrest', 'do_not_give_false_documents', 'do_not_lie'],
    title: 'scenario_home_inside',
    warning: {
      subtitle: 'you_have_right_to_silence',
      title: 'present_card_remain_silent',
    },
  },
  SCENARIO_HOME_OUTSIDE: {
    scenarioItems: [
      {
        subtitle: 'call_your_attorney',
        title: "agent_won't_leave?",
      },
      {
        subtitle: 'do_not_provide_information',
        title: 'agent_looking_for_someone',
      },
    ],
    tips: ['do_not_open_door', 'do_not_lie', 'do_not_provide_information'],
    title: 'scenario_home_outside',
    warning: {
      subtitle: 'talk_through_door',
      title: 'do_not_open_door',
    },
  },
  SCENARIO_PUBLIC_TRANSIT: {
    tips: ['present_card', 'do_not_sign_anything', 'do_not_lie'],
    title: 'scenario_public_transit',
    warning: {
      subtitle: 'remember_to_remain_silent',
      title: 'do_not_run_speak',
    },
  },
  SCENARIO_STREET: {
    tips: ['present_card', 'do_not_sign_anything', 'do_not_lie'],
    title: 'scenario_street',
    warning: {
      subtitle: 'remember_to_remain_silent',
      title: 'do_not_run_speak',
    },
  },
  SCENARIO_WORK: {
    tips: ['present_card', 'do_not_sign_anything', 'do_not_lie'],
    title: 'scenario_work',
    warning: {
      subtitle: 'remember_to_remain_silent',
      title: 'do_not_run_speak',
    },
  },
};

export const SCENARIOS_LIST = [
  {
    iconName: ICON_NAMES.HOME,
    scenarios: [
      'SCENARIO_HOME_OUTSIDE',
      'SCENARIO_HOME_INSIDE',
      'SCENARIO_HOME_ARREST',
    ],
    title: 'scenario_home',
  },
  {
    iconName: ICON_NAMES.BRIEFCASE,
    scenarios: ['SCENARIO_WORK'],
    title: 'scenario_work',
  },
  {
    iconName: ICON_NAMES.WALK,
    scenarios: ['SCENARIO_STREET'],
    title: 'scenario_street',
  },
  {
    iconName: ICON_NAMES.CAR,
    scenarios: ['SCENARIO_DRIVING'],
    title: 'scenario_driving',
  },
  {
    iconName: ICON_NAMES.SUBWAY,
    scenarios: ['SCENARIO_PUBLIC_TRANSIT'],
    title: 'scenario_public_transit',
  },
];
