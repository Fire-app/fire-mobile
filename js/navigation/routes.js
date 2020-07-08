const routes = {
  onboardingStack: 'ONBOARDING',
  onboarding: {
    start: 'ONBOARDING_START',
  },

  mainTabs: 'MAIN_TABS',
  main: {
    resources: 'TAB_RESOURCES',
    rights: 'TAB_RIGHTS',
    settings: 'TAB_SETTINGS', // TODO: Move elsewhere (not a tab eventually)
  },

  settingsStack: 'SETTINGS_STACK',
  settings: {
    overview: 'SETTINGS_OVERVIEW',
    language: 'SETTINGS_LANGUAGE',
  },

  rightsStack: 'RIGHTS',
  rights: {
    overviewList: 'RIGHTS_LIST',
  },

  videos: {
    overviewList: 'VIDEOS_LIST',
    cases: {},
  },

  scenarios: {
    overviewList: 'SCENARIOS_LIST',
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
};

export default routes;
