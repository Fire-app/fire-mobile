/* eslint-disable global-require */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import { DEFAULT_HOTLINE, HOTLINE_OPTIONS } from '../../data/hotlineOptions';
import { colors, textStyles } from '../styles';

const HotlineOption = ({ title, selected, onPress }) => (
  <TouchableOpacity
    style={[
      {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: colors.primaryLight,
        borderRadius: 3,
        marginVertical: 4,
        borderWidth: 3,
        borderColor: colors.primaryLight,
      },
      selected && {
        borderWidth: 3,
        borderColor: colors.primary,
      },
    ]}
    onPress={onPress}
  >
    <Text style={[textStyles.body1, { color: colors.charcoalGrey }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

HotlineOption.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

const HotlineList = ({ setHotlineName, setHotlineNumber }) => {
  const [selectedHotline, setSelectedHotline] = useState(DEFAULT_HOTLINE);

  const changeHotline = (name, phoneNumber) => {
    setHotlineName(name);
    setHotlineNumber(phoneNumber);
    setSelectedHotline({ name, phoneNumber });
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.phoneNumber}
        alwaysBounceVertical={false}
        data={HOTLINE_OPTIONS}
        extraData={{ selectedHotline }}
        renderItem={({ item: { name, phoneNumber } }) => (
          <HotlineOption
            title={name}
            selected={phoneNumber === selectedHotline.phoneNumber}
            onPress={() => changeHotline(name, phoneNumber)}
          />
        )}
      />
    </View>
  );
};

HotlineList.propTypes = {
  setHotlineName: PropTypes.func.isRequired,
  setHotlineNumber: PropTypes.func.isRequired,
};

export default HotlineList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 15,
  },
});
