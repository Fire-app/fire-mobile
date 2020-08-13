const routes = {
  onboardingStack: 'ONBOARDING',
  onboarding: {
    language: 'ONBOARDING_LANGUAGE',
    welcome: 'ONBOARDING_WELCOME',
    intro: 'ONBOARDING_INTRO',
    toolkitIntro: 'ONBOARDING_TOOLKIT_INTRO',
    hotline: 'ONBOARDING_HOTLINE',
    attorney: 'ONBOARDING_ATTORNEY',
    complete: 'ONBOARDING_COMPLETE',
  },

  mainTabs: 'MAIN_TABS',
  main: {
    resources: 'TAB_RESOURCES',
    rights: 'TAB_RIGHTS',
    settings: 'TAB_SETTINGS',
    emergency: 'TAB_EMERGENCY',
  },

  settingsStack: 'SETTINGS_STACK',
  settings: {
    overview: 'SETTINGS_OVERVIEW',
    language: 'SETTINGS_LANGUAGE',
    toolkit: 'SETTINGS_TOOLKIT',
    hotline: 'SETTINGS_HOTLINE',
    rights_card: 'SETTINGS_RIGHTS_CARD',
    about: 'SETTINGS_ABOUT',
    privacy_policy: 'SETTINGS_PRIVACY_POLICY',
    terms_of_service: 'SETTINGS_TERMS_OF_SERVICE',
    acknowledgements: 'SETTINGS_ACKNOWLEDGEMENTS',
    partners: 'SETTINGS_PARTNERS',
  },

  rightsStack: 'RIGHTS_STACK',
  rights: {
    overviewList: 'RIGHTS_LIST',
  },
  videos: {
    overviewList: 'VIDEOS_LIST',
    cases: {},
  },

  scenarios: {
    overviewList: 'SCENARIOS_LIST',
    homeOverview: 'SCENARIOS_HOME',
    cases: {
      insideHome: 'SCENARIOS__INSIDE_HOME',
      outsideHome: 'SCENARIOS__OUTSIDE_HOME',
      homeArrest: 'SCENARIOS__HOME_ARREST',
      driving: 'SCENARIOS__DRIVING',
      publicTransport: 'SCENARIOS__PUBLIC_TRANSPORT',
      street: 'SCENARIOS_STREET',
      work: 'SCENARIOS__WORK',
    },
  },

  resourcesStack: 'RESOURCES_STACK',
  resources: {
    overviewList: 'RESOURCES_LIST',
    details: 'RESOURCES_DETAILS',
  },

  emergencyModal: 'EMERGENCY_MODAL',
};

export default routes;
