import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import PropTypes from 'prop-types';
import styles from '../../../styles/styles';
import RightsTitle from '../../../components/RightsTitle';
import RightsWarning from '../../../components/RightsWarning';
import ActionBullets from '../../../components/ActionBullets';
import ActionItems from '../../../components/ActionItems';
import Tips from '../../../components/Tips';

const KnowYourRightsTemplate = ({
  title,
  rightsWarning = {
    title: 'Present your rights card and remain silent.',
    subtitle: 'You have the right to remain silent!',
  },
  actionBullets = {
    title: 'Tell the agent(s) if...',
    bullets: [
      'children or elderly are present',
      'you are on medication, nursing, or pregnant',
      'you need to arrange care for someone',
    ],
  },
  actionItems = {
    title: "If the agent(s) don't have a signed warrant...",
    items: ["Say, 'I deny consent to search my home'"],
  },
  tips = [
    "Don't resist arrest.",
    'Present your rights card.',
    "Don't sign anything.",
    "Don't lie.",
  ],
}) => (
  <ScrollView contentContainerStyle={styles.container}>
    <RightsTitle title={title} />
    <RightsWarning
      title={rightsWarning.title}
      subtitle={rightsWarning.subtitle}
    />
    <ActionBullets
      title={actionBullets.title}
      bullets={actionBullets.bullets}
    />
    <ActionItems title={actionItems.title} items={actionItems.items} />
    <Tips tips={tips} />
  </ScrollView>
);

KnowYourRightsTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  rightsWarning: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
  actionItems: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  actionBullets: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bullets: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  tips: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
export default KnowYourRightsTemplate;
