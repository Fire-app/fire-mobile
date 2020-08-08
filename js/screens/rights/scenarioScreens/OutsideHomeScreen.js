import React from 'react';
import { useTranslation } from 'react-i18next';
import KnowYourRightsTemplate from './Template';

const OutsideHomeScreen = () => {
  const { t } = useTranslation();
  return (
    <KnowYourRightsTemplate
      warning={{
        title: t('do_not_open_door'),
        subtitle: t('talk_through_door'),
      }}
      scenarioItems={[
        {
          title: t("agent_won't_leave?"),
          subtitle: t('call_your_attorney'),
        },
        {
          title: t('agent_looking_for_someone'),
          subtitle: t('do_not_provide_information'),
        },
      ]}
      tips={[
        t('do_not_open_door'),
        t('do_not_lie'),
        t('do_not_provide_information'),
      ]}
    />
  );
};

export default OutsideHomeScreen;
