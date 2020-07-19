import React from 'react';
import { StyleSheet, Text, FlatList, View, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import routes from '../../navigation/routes';
import Card from '../../components/Card';
import textStyles from '../../styles/textStyles';
import colors from '../../styles/colors';

const caseRoutes = routes.scenarios.cases;

const KNOW_YOUR_RIGHTS_IMAGE = require('../../../assets/videoCoverImages/know_your_rights.png');

const VIDEOS = [
  {
    title: 'Know Your Rights (general tips)',
    time: '1:11',
    fileName: 'know_your_rights',
    coverImage: KNOW_YOUR_RIGHTS_IMAGE,
  },
  {
    title: 'Interrogated by an ICE agent in detention',
    time: '1:56',
    fileName: 'know_your_rights',
  },
  {
    title: 'Consulting an attorney in detention',
    time: '2:30',
    fileName: 'know_your_rights',
  },
  {
    title: 'Seeking legal relief with ISAP in detention',
    time: '2:26',
    fileName: 'know_your_rights',
  },
  {
    title: 'Arrested in the street',
    time: '2:30',
    fileName: 'know_your_rights',
  },
];

const VideoCard = ({ title, time, onPress, coverImage }) => (
  <Card onPress={onPress}>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View
        style={{
          flex: 1,
          marginRight: 12,
        }}
      >
        <Image
          source={KNOW_YOUR_RIGHTS_IMAGE}
          style={{ height: 80, width: '100%' }}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <Text style={[textStyles.h3, { color: colors.charcoalGrey }]}>
          {title}
        </Text>
        <Text style={[textStyles.body2, { color: colors.charcoalGrey }]}>
          {time}
        </Text>
      </View>
    </View>
  </Card>
);

export default function VideoListScreen({ navigation }) {
  const { t } = useTranslation();
  return (
    <FlatList
      keyExtractor={(_, i) => `${i}`}
      style={styles.container}
      contentContainerStyle={{ paddingVertical: 24 }}
      data={VIDEOS}
      renderItem={({ item: { title, image, time, coverImage } }) => (
        <VideoCard
          title={title}
          image={image}
          coverImage={coverImage}
          time={time}
          onPress={() => {}}
        />
      )}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
    />
  );
}

VideoListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.backgroundColor,
  },
});
