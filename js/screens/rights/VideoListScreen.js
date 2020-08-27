import React from 'react';
import { StyleSheet, Text, FlatList, View, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import textStyles from '../../styles/textStyles';
import VIDEOS from '../../../data/videos';
import colors from '../../styles/colors';

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
          source={image}
          // Need to use absolute + percent for images to contain properly
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

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  image: Image.propTypes.source.isRequired,
};

const VideoListScreen = () => {
  const { t } = useTranslation();
  return (
    <FlatList
      keyExtractor={(_, i) => `${i}`}
      style={styles.container}
      contentContainerStyle={{ paddingVertical: 24 }}
      data={VIDEOS}
      renderItem={({ item: { title, image, time } }) => (
        <VideoCard
          title={t(title)}
          // TODO: image per video, or thumbnail
          image={image}
          time={time}
          onPress={() => {}}
        />
      )}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.backgroundColor,
  },
});

export default VideoListScreen;
