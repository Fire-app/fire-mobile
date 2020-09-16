import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import NavCard from '../../components/NavCard';
import { colors, textStyles } from '../../styles';
import routes from '../../navigation/routes';
import FireIcon, { ICON_NAMES } from '../../components/FireIcon';

const IMAGE = require('../../../assets/illustration1.png');

const DisclaimerCard = () => {
  const { t } = useTranslation();
  return (
    <View
      style={{
        backgroundColor: colors.border,
        paddingHorizontal: 16,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          alignItems: 'center',
          borderRadius: 3,
          flexDirection: 'row',
          paddingBottom: 4,
        }}
      >
        <FireIcon
          color={textStyles.h2.color}
          name={ICON_NAMES.ALARM_LIGHT}
          size={20}
          style={{ paddingRight: 8 }}
        />
        <Text style={textStyles.h3}>{t('disclaimer_title')}</Text>
      </View>
      <Text style={textStyles.body2}>{t('disclaimer_body')}</Text>
    </View>
  );
};

export default function RightsOverviewScreen({ navigation }) {
  const { t } = useTranslation();
  return (
    <View
      style={{
        backgroundColor: colors.backgroundColor,
        flex: 1,
      }}
    >
      <StatusBar barStyle="dark-content" />
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={{
          flexGrow: 1,
          marginHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        <NavCard
          description={t('scenarios_description')}
          onPress={() => {
            navigation.navigate(routes.scenarios.overviewList);
          }}
          title={t('scenarios_title')}
        />
        <View style={{ height: 8 }} />
        <NavCard
          description={t('videos_description')}
          onPress={() => {
            navigation.navigate(routes.videos.overviewList);
          }}
          title={t('videos_title')}
        />
        <View style={{ height: 8 }} />
        <DisclaimerCard />
        <View style={{ height: 180 }} />
      </ScrollView>
      <View
        style={{ bottom: 12, position: 'absolute', width: '100%', zIndex: -1 }}
      >
        <Image
          accessibilityLabel="Illustration"
          source={IMAGE}
          style={styles.image}
        />
      </View>
    </View>
  );
}

RightsOverviewScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    height: 180,
    resizeMode: 'cover',
    width: 280,
  },
});
