import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { colors, textStyles } from '../styles';
import Card from './Card';
import FireIcon, { ICON_NAMES } from './FireIcon';

export default function ScenarioBullets({ title, bullets }) {
  const bulletsList = bullets.map((bullet) => {
    return (
      <View key={bullet} style={styles.textContainer}>
        <FireIcon
          name={ICON_NAMES.CIRCLE}
          size={6}
          style={styles.bulletPoint}
        />
        <Text style={[textStyles.body1, { color: colors.textLight }]}>
          {bullet}
        </Text>
      </View>
    );
  });

  return (
    <Card
      style={{
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginVertical: 6,
        padding: 20,
      }}
    >
      <>
        <Text style={[textStyles.h3, { paddingBottom: 2 }]}>{title}</Text>
        {bulletsList}
      </>
    </Card>
  );
}

ScenarioBullets.propTypes = {
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  bulletPoint: {
    color: colors.textLight,
    paddingRight: 8,
    paddingTop: 10,
  },
  textContainer: {
    flexDirection: 'row',
    paddingVertical: 2,
  },
});
