const routes = {
  onboardingStack: 'ONBOARDING',
  onboarding: {
    welcome: 'ONBOARDING_WELCOME',
    language: 'ONBOARDING_LANGUAGE',
    hotline: 'ONBOARDING_HOTLINE',
    attorney: 'ONBOARDING_ATTORNEY',
    complete: 'ONBOARDING_COMPLETE',
  },

  mainTabs: 'MAIN_TABS',
  main: {
    resources: 'TAB_RESOURCES',
    rights: 'TAB_RIGHTS',
    alerts: 'TAB_ALERTS',
    settings: 'TAB_SETTINGS',
  },

  settingsStack: 'SETTINGS_STACK',
  settings: {
    overview: 'SETTINGS_OVERVIEW',
    language: 'SETTINGS_LANGUAGE',
  },

  rightsStack: 'RIGHTS',
  rights: {
    overviewList: 'RIGHTS_LIST',
    cases: {
      insideHome: 'RIGHTS__INSIDE_HOME',
      outsideHome: 'RIGHTS__OUTSIDE_HOME',
      homeArrest: 'RIGHTS__HOME_ARREST',
      driving: 'RIGHTS__DRIVING',
      publicTransport: 'RIGHTS__PUBLIC_TRANSPORT',
      street: 'RIGHTS_STREET',
      work: 'RIGHTS__WORK',
    },
  },
};

export default routes;
