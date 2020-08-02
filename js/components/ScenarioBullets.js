import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, textStyles } from '../styles';

export default function ScenarioBullets({ title, bullets }) {
  const bulletsList = bullets.map((bullet) => {
    return (
      <View style={styles.textContainer} key={bullet}>
        <MaterialCommunityIcons name="circle" style={styles.bulletPoint} />
        <Text style={[textStyles.body1, { color: colors.textLight }]}>
          {bullet}
        </Text>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <Text style={[textStyles.h3, { paddingBottom: 2 }]}>{title}</Text>
      {bulletsList}
    </View>
  );
}

ScenarioBullets.propTypes = {
  title: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
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
  textContainer: {
    flexDirection: 'row',
    paddingVertical: 2,
  },
  bulletPoint: {
    fontSize: 6,
    color: colors.textLight,
    paddingRight: 8,
    paddingTop: 10,
  },
});
