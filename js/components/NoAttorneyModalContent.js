/* eslint-disable global-require */
import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { textStyles } from '../styles';

const NoAttorneyModalContent = () => {
  const { t } = useTranslation();
  return (
    <View
      style={{
        justifyContent: 'flex-start',
        paddingBottom: 20,
      }}
    >
      <Text style={[textStyles.h2, { paddingBottom: 10 }]}>
        {t('attorney_default_title')}
      </Text>
      <Text style={textStyles.body1}>{t('attorney_default_subtitle')}</Text>
    </View>
  );
};

export default NoAttorneyModalContent;
