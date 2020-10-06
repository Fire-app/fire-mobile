import { Text, View, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import { SCENARIO_MAP } from '../../../../data/scenarios';
import colors from '../../../styles/colors';
import textStyles from '../../../styles/textStyles';
import RightsWarning from '../../../components/RightsWarning';
import Card from '../../../components/Card';
import FireIcon, { ICON_NAMES } from '../../../components/FireIcon';

const ScenarioCard = ({ title, subtitle, bullets }) => {
  const { t } = useTranslation();
  return (
    <Card style={{ padding: 20 }}>
      <View>
        <Text style={textStyles.h3}>{t(title)}</Text>
        {subtitle && (
          <Text
            style={[
              textStyles.body1,
              { color: colors.textLight, paddingVertical: 2 },
            ]}
          >
            {t(subtitle)}
          </Text>
        )}
        {bullets &&
          bullets.map((bullet) => (
            <View
              key={bullet}
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                paddingVertical: 2,
              }}
            >
              <FireIcon
                name={ICON_NAMES.CIRCLE}
                size={6}
                style={{ color: colors.textLight, paddingRight: 8 }}
              />
              <Text style={[textStyles.body1, { color: colors.textLight }]}>
                {t(bullet)}
              </Text>
            </View>
          ))}
      </View>
    </Card>
  );
};

ScenarioCard.propTypes = {
  bullets: PropTypes.arrayOf(PropTypes.string.isRequired),
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default function ScenarioDetailsScreen({
  route: {
    params: { scenarioId },
  },
}) {
  const { t } = useTranslation();
  const { scenarioItems, tips, warning } = SCENARIO_MAP[scenarioId];
  return (
    <ScrollView
      alwaysBounceVertical={false}
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 36,
      }}
      style={{ backgroundColor: colors.backgroundColor }}
    >
      <RightsWarning subtitle={t(warning.subtitle)} title={t(warning.title)} />
      {scenarioItems && (
        <View style={{ paddingTop: 50 }}>
          <Text style={textStyles.h2}>{t('potential_scenarios')}</Text>
          {scenarioItems.map(({ title, subtitle, bullets }) => (
            <View key={`${title}:${subtitle}`} style={{ paddingVertical: 6 }}>
              <ScenarioCard
                key={`${title}:${subtitle}`}
                bullets={bullets}
                subtitle={subtitle}
                title={title}
              />
            </View>
          ))}
        </View>
      )}
      {tips && (
        <View style={{ paddingTop: 50 }}>
          <Text style={[textStyles.h2, { paddingBottom: 6 }]}>{t('tips')}</Text>
          {tips.map((tip) => (
            <View key={tip} style={{ paddingVertical: 6 }}>
              <ScenarioCard title={tip} />
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

ScenarioDetailsScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      scenarioId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
