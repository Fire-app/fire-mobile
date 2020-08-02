import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { textStyles, colors } from '../styles';

export default function Tips({ tips }) {
  const tipsList = tips.map((tip) => {
    return (
      <View style={styles.container} key={tip}>
        <Text style={textStyles.h3}>{tip}</Text>
      </View>
    );
  });

  return (
    <View style={{ paddingTop: 50 }}>
      <Text style={textStyles.h2}>{'Tips'}</Text>
      <View>{tipsList}</View>
    </View>
  );
}

Tips.propTypes = {
  tips: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 3,
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 6,
    width: '100%',
  },
});
