import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Card from './Card';
import { textStyles } from '../styles';

export default function Tips({ tips }) {
  const { t } = useTranslation();
  return (
    <View>
      <Text style={textStyles.h2}>{t('tips')}</Text>
      <View>
        {tips.map((tip) => (
          <Card
            key={tip}
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: 20,
              marginVertical: 6,
            }}
          >
            <Text style={textStyles.h3}>{tip}</Text>
          </Card>
        ))}
      </View>
    </View>
  );
}

Tips.propTypes = {
  tips: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
