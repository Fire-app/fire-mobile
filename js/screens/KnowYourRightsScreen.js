/* eslint-disable global-require */
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import routes from '../navigation/routes';
import NavCard from '../components/NavCard';
import textStyles from '../styles/textStyles';
import colors from '../styles/colors';

const caseRoutes = routes.rights.cases;

export default function KnowYourRightsScreen({ navigation }) {
  const { t } = useTranslation();
  return (
    <ScrollView style={styles.container}>
      <Text style={[textStyles.h4, styles.learnYourRightsStyle]}>
        {t('Learn_your_rights_in_different_spaces')}
      </Text>
      <NavCard
        location={t('Home')}
        description={t('Agent_Inside')}
        onPress={() => navigation.navigate(caseRoutes.insideHome)}
      />
      <NavCard
        location={t('Home')}
        description={t('Agent_Outside')}
        onPress={() => navigation.navigate(caseRoutes.outsideHome)}
      />
      <NavCard
        location={t('Home')}
        description={t('Agent_Arrests_Me')}
        onPress={() => navigation.navigate(caseRoutes.homeArrest)}
      />
      <NavCard
        location={t('Work')}
        description={t('For_use_at_work')}
        onPress={() => navigation.navigate(caseRoutes.work)}
      />
      <NavCard
        location={t('Public_Transit')}
        description={t('For_use_on_Public_Transit')}
        onPress={() => navigation.navigate(caseRoutes.publicTransport)}
      />
      <NavCard
        location={t('Driving')}
        description={t('For_use_when_pulled_over')}
        onPress={() => navigation.navigate(caseRoutes.driving)}
      />
      <NavCard
        location={t('Street')}
        description={t('For_use_on_the_street')}
        onPress={() => navigation.navigate(caseRoutes.street)}
      />
    </ScrollView>
  );
}

KnowYourRightsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryLighter,
  },
  learnYourRightsStyle: {
    margin: '7%',
  },
});
