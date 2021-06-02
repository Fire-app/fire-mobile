const AAAJ_LOGO = require('../assets/logos/aaajLogo.png');
const CARECEN_LOGO = require('../assets/logos/carecenLogoSquare.jpeg');
const CHIRLA_LOGO = require('../assets/logos/chirlaLogo.png');
const IMMDEF_LOGO = require('../assets/logos/immDefLogoSquare.jpeg');
const KRC_LOGO = require('../assets/logos/krcLogoSquare.jpeg');
const USC_LOGO = require('../assets/logos/uscLogoSquare.jpeg');

import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

export const RESOURCES_MAP = {
  AAAJ: {
    description: 'resources_description__aaaj',
    facebookUrl: 'https://www.facebook.com/AdvancingJusticeLA',
    fullName: 'Asian Americans Advancing Justice',
    instagramUrl: null,
    languages:
      '中文, English, 日本語, ភាសាខ្មែរ, 한국어, Tagalog, ภาษาไทย, Tiếng Việt',
    legalServices: [
      'services_legal__adjustment_of_status',
      'services_legal__daca',
      'services_legal__family_petitions',
      'services_legal__naturalization_citizenship',
      'services_legal__removal_hearings',
      'services_legal__t_visa',
      'services_legal__u_visa',
      'services_legal__vawa',
    ],
    nonlegalServices: [
      'services_nonlegal__citizenship_civics_classes',
      'services_nonlegal__esl',
      'services_nonlegal__referrals_to_other_services',
    ],
    phone: 'tel://8883499695',
    shortName: 'AAAJ',
    twitterUrl: 'https://www.twitter.com/AAAJ_LA',
    website: 'https://www.advancingjustice-la.org/',
    youtubeUrl: null,
  },
  CARECEN: {
    description: 'resources_description__carecen',
    facebookUrl: 'https://www.facebook.com/Carecen.LA/',
    fullName: 'Central American Resource Center',
    instagramUrl: 'https://www.instagram.com/carecen_la/',
    languages:
      'English, Español, Interpreting legalServices for Maya/indigenous speakers',
    legalServices: [
      'services_legal__adjustment_of_status',
      'services_legal__asylum',
      'services_legal__consular_processing',
      'services_legal__daca',
      'services_legal__employment',
      'services_legal__family_petitions',
      'services_legal__nacara',
      'services_legal__naturalization_citizenship',
      'services_legal__removal_hearings',
      'services_legal__special_immigrant_juvenile_status',
      'services_legal__t_visa',
      'services_legal__tps',
      'services_legal__u_visa',
      'services_legal__vawa',
    ],
    nonlegalServices: [
      'services_nonlegal__afterschool_program',
      'services_nonlegal__citizenship_civics_classes',
      'services_nonlegal__college_application_assistance',
      'services_nonlegal__esl',
      'services_nonlegal__know_your_rights_presentations',
      'services_nonlegal__language_services',
      'services_nonlegal__legal_orientation_programs',
      'services_nonlegal__organizing',
    ],
    phone: 'tel://2133857800',
    shortName: 'CARECEN',
    twitterUrl: 'https://www.twitter.com/Carecen_LA',
    website: 'https://www.carecen-la.org/',
    youtubeUrl: null,
  },
  CHIRLA: {
    description: 'resources_description__chirla',
    facebookUrl: 'https://www.facebook.com/chirlausa/',
    fullName: 'Coalition for Humane Immigrant Rights of Los Angeles',
    instagramUrl: 'https://www.instagram.com/chirla_org/',
    languages: 'English, Español',
    legalServices: [
      'services_legal__adjustment_of_status',
      'services_legal__asylum',
      'services_legal__consular_processing',
      'services_legal__daca',
      'services_legal__employment',
      'services_legal__family_petitions',
      'services_legal__nacara',
      'services_legal__naturalization_citizenship',
      'services_legal__removal_hearings',
      'services_legal__special_immigrant_juvenile_status',
      'services_legal__t_visa',
      'services_legal__tps',
      'services_legal__u_visa',
      'services_legal__vawa',
    ],
    nonlegalServices: [
      'services_nonlegal__administrative_advocacy',
      'services_nonlegal__citizenship_civics_classes',
      'services_nonlegal__housing_referrals',
      'services_nonlegal__know_your_rights_presentations',
      'services_nonlegal__language_services',
      'services_nonlegal__legal_orientation_programs',
      'services_nonlegal__legislative_advocacy',
      'services_nonlegal__referrals_to_other_services',
    ],
    phone: 'tel://8886244752',
    shortName: 'CHIRLA',
    twitterUrl: 'https://www.twitter.com/CHIRLA',
    website: 'https://chirla.org/',
    youtubeUrl: 'https://www.youtube.com/channel/UCkpuw8C5tb4RL8IwI-liMsA',
  },
  ImmDef: {
    description: 'resources_description__immdef',
    facebookUrl: 'https://www.facebook.com/ImmDef/',
    fullName: 'Immigrant Defender Law Center',
    instagramUrl: 'https://www.instagram.com/immdef_lawcenter/',
    languages: 'English, Español',
    legalServices: [
      'services_legal__adjustment_of_status',
      'services_legal__asylum',
      'services_legal__family_petitions',
      'services_legal__removal_hearings',
      'services_legal__special_immigrant_juvenile_status',
      'services_legal__t_visa',
      'services_legal__u_visa',
    ],
    nonlegalServices: [
      'services_nonlegal__know_your_rights_presentations',
      'services_nonlegal__legal_orientation_programs',
      'services_nonlegal__referrals_to_other_services',
      'services_nonlegal__social_services',
    ],
    phone: 'tel://2136340999',
    shortName: 'ImmDef',
    twitterUrl: 'https://www.twitter.com/immdef',
    website: 'http://www.immdef.org',
    youtubeUrl: null,
  },
  KRC: {
    description: 'resources_description__krc',
    facebookUrl: 'https://www.facebook.com/krcla/',
    fullName: 'Korean Resource Center',
    instagramUrl: 'https://www.instagram.com/krclaorg/',
    languages: 'English, 한국어, Español',
    legalServices: [
      'services_legal__daca',
      'services_legal__naturalization_citizenship',
      'services_legal__t_visa',
      'services_legal__u_visa',
      'services_legal__vawa',
    ],
    nonlegalServices: [
      'services_nonlegal__health_services',
      'services_nonlegal__housing_services',
      'services_nonlegal__language_services',
      'services_nonlegal__social_services',
    ],
    phone: 'tel://3239373718',
    shortName: 'KRC',
    twitterUrl: 'https://www.twitter.com/krcla',
    website: 'http://www.krcla.org',
    youtubeUrl: 'https://www.youtube.com/user/krclaorg',
  },
  USC: {
    description: 'resources_description__usc',
    facebookUrl: 'https://www.facebook.com/USCGouldImmClinic/',
    fullName: 'Gould School of Law Immigration Legal Assistance Clinic',
    instagramUrl: 'https://www.instagram.com/uscimmclinic',
    languages: 'English, Español',
    legalServices: [
      'services_legal__asylum',
      'services_legal__naturalization_citizenship',
      'services_legal__removal_hearings',
    ],
    nonlegalServices: ['services_nonlegal__referrals_to_other_services'],
    phone: 'tel://2138219627',
    shortName: 'USC',
    twitterUrl: 'https://www.twitter.com/usc_immclinic',
    website:
      'https://uscimmigrationclinic.org/ilac-and-citizenship-initiative/immigrant-legal-assistance-center/',
    youtubeUrl: null,
  },
};

export const RESOURCES_LIST = [
  {
    fullName: 'Asian Americans Advancing Justice',
    image: AAAJ_LOGO,
    shortName: 'AAAJ',
  },
  {
    fullName: 'Central American Resource Center',
    image: CARECEN_LOGO,
    shortName: 'CARECEN',
  },
  {
    fullName: 'Coalition for Humane Immigrant Rights',
    image: CHIRLA_LOGO,
    shortName: 'CHIRLA',
  },
  {
    fullName: 'Immigrant Defender Law Center',
    image: IMMDEF_LOGO,
    shortName: 'ImmDef',
  },
  {
    fullName: 'Korean Resource Center',
    image: KRC_LOGO,
    shortName: 'KRC',
  },
  {
    fullName: 'Gould School of Law Immigration Legal Assistance Clinic',
    image: USC_LOGO,
    shortName: 'USC',
  },
];
