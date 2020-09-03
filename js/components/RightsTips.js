import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
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
              alignItems: 'flex-start',
              flexDirection: 'column',
              marginVertical: 6,
              padding: 20,
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
