import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import { Divider, Row } from '../../components/SettingsSelector';
import routes from '../../navigation/routes';
import { textStyles, colors } from '../../styles';

const LOGO = require('../../../assets/icon_transparent.png');

const AboutScreen = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <ScrollView
      alwaysBounceVertical={false}
      contentContainerStyle={styles.container}
    >
      <Divider />
      <Row
        onPress={() => navigation.navigate(routes.settings.privacy_policy)}
        title={t('privacy_policy')}
      />
      <Divider />
      <Row
        onPress={() => navigation.navigate(routes.settings.terms_of_service)}
        title={t('terms_of_service')}
      />
      <Divider />
      <Row
        onPress={() => navigation.navigate(routes.settings.partners)}
        title={t('rrn_partners')}
      />
      <Divider />
      <Row
        onPress={() => navigation.navigate(routes.settings.acknowledgements)}
        title={t('acknowledgements')}
      />
      <Divider />
    </ScrollView>
  );
};

AboutScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

// export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexGrow: 1,
  },
  logo: {
    alignSelf: 'center',
    height: 120,
    marginBottom: 8,
    width: 120,
  },
  simpleContainer: {
    backgroundColor: colors.backgroundColor,
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingVertical: 16,
  },
  simpleText: {
    color: colors.charcoalGrey,
    paddingVertical: 6,
  },
});

const SimpleAboutScreen = () => {
  return (
    <ScrollView
      alwaysBounceVertical={false}
      contentContainerStyle={styles.simpleContainer}
    >
      <View>
        <Image
          accessibilityLabel="Fire Logo"
          source={LOGO}
          style={styles.logo}
        />
        <Text style={[textStyles.body1, styles.simpleText]}>
          {
            'Fire is a multilingual Know-Your-Immigrant-Rights mobile app, launching first in Los Angeles. We seek to educate, defend, and mobilize the immigrant community and its allies.'
          }
        </Text>
        <Text style={[textStyles.body1, styles.simpleText]}>
          {
            'The immigrant community in Los Angeles is incredibly diverse in age, gender, status, nationality, and English literacy levels. Our goal is to close the information gap in the immigrant communities of Los Angeles, where 1 in 2 people do not speak English fluently.'
          }
        </Text>
        <Text style={[textStyles.body1, styles.simpleText]}>
          {
            'As our communities are increasingly under attack by duplicitous tactics of ICE and the xenophobic policies of this administration, Fire will help to equip people with defense tools in times of crisis. '
          }
        </Text>
      </View>
    </ScrollView>
  );
};

export default SimpleAboutScreen;
