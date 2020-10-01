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
        key={t('resources__services_legal')}
        name={t('resources__services_legal')}
        services={legalServices}
      />
      <Service
        key={t('resources__services_nonlegal')}
        name={t('resources__services_nonlegal')}
        services={nonlegalServices}
      />
    </View>
  );
}

ServiceList.propTypes = {
  legalServices: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  nonlegalServices: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
