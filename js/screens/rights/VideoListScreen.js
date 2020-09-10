import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import Card from '../../components/Card';
import VIDEOS from '../../../data/videos';
import colors from '../../styles/colors';
import textStyles from '../../styles/textStyles';

const VideoCard = ({ title, time, onPress, image }) => (
  <Card onPress={onPress}>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View
        style={{
          flex: 1,
          marginRight: 12,
        }}
      >
        <Image
          resizeMode="contain"
          // Need to use absolute + percent for images to contain properly
          source={image}
          style={{ height: 80, width: '100%' }}
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

VideoCard.propTypes = {
  image: Image.propTypes.source.isRequired,
  onPress: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const VideoListScreen = () => {
  const { t } = useTranslation();
  return (
    <FlatList
      contentContainerStyle={{ paddingVertical: 24 }}
      data={VIDEOS}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      keyExtractor={(_, i) => `${i}`}
      renderItem={({ item: { title, image, time, videoUrl } }) => (
        <VideoCard
          image={image}
          onPress={() => WebBrowser.openBrowserAsync(videoUrl)}
          time={time}
          title={t(title)}
        />
      )}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    paddingHorizontal: 24,
  },
});

export default VideoListScreen;
