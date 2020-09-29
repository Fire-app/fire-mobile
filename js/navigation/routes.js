const routes = {
  emergencyModal: 'EMERGENCY_MODAL',
  main: {
    emergency: 'TAB_EMERGENCY',
    resources: 'TAB_RESOURCES',
    rights: 'TAB_RIGHTS',
    settings: 'TAB_SETTINGS',
  },

  mainTabs: 'MAIN_TABS',
  onboarding: {
    complete: 'ONBOARDING_COMPLETE',
    hotline: 'ONBOARDING_HOTLINE',
    info: 'ONBOARDING_INFO',
    language: 'ONBOARDING_LANGUAGE',
    welcome: 'ONBOARDING_WELCOME',
  },

  onboardingStack: 'ONBOARDING',
  resources: {
    details: 'RESOURCES_DETAILS',
    overviewList: 'RESOURCES_LIST',
  },

  resourcesStack: 'RESOURCES_STACK',
  rights: {
    overviewList: 'RIGHTS_LIST',
  },
  rightsStack: 'RIGHTS_STACK',

  scenarios: {
    cases: {
      driving: 'SCENARIOS__DRIVING',
      homeArrest: 'SCENARIOS__HOME_ARREST',
      insideHome: 'SCENARIOS__INSIDE_HOME',
      outsideHome: 'SCENARIOS__OUTSIDE_HOME',
      publicTransport: 'SCENARIOS__PUBLIC_TRANSPORT',
      street: 'SCENARIOS_STREET',
      work: 'SCENARIOS__WORK',
    },
    homeOverview: 'SCENARIOS_HOME',
    overviewList: 'SCENARIOS_LIST',
  },

  settings: {
    about: 'SETTINGS_ABOUT',
    acknowledgements: 'SETTINGS_ACKNOWLEDGEMENTS',
    hotline: 'SETTINGS_HOTLINE',
    language: 'SETTINGS_LANGUAGE',
    overview: 'SETTINGS_OVERVIEW',
    partners: 'SETTINGS_PARTNERS',
    privacy_policy: 'SETTINGS_PRIVACY_POLICY',
    terms_of_service: 'SETTINGS_TERMS_OF_SERVICE',
  },
  settingsStack: 'SETTINGS_STACK',

  videos: {
    cases: {},
    overviewList: 'VIDEOS_LIST',
  },
};

export default routes;
