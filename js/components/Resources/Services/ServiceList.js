import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { colors, textStyles } from '../../../styles';

import Service from './Service';

export default function ServiceList({ legalServices, nonlegalServices }) {
  const { t } = useTranslation();

  return (
    <View>
      <Text
        style={[
          textStyles.h2,
          colors.charcoalGrey,
          { paddingBottom: 10, paddingTop: 50 },
        ]}
      >
        {'Services'}
      </Text>
      <Service
        key={t('immigration_legal')}
        name={t('immigration_legal')}
        services={legalServices}
      />
      <Service
        key={t('non_legal')}
        name={t('non_legal')}
        services={nonlegalServices}
      />
    </View>
  );
}

ServiceList.propTypes = {
  legalServices: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  nonlegalServices: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
