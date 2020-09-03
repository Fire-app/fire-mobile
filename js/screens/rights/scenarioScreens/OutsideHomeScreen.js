import { useTranslation } from 'react-i18next';
import React from 'react';
import KnowYourRightsTemplate from './Template';

const OutsideHomeScreen = () => {
  const { t } = useTranslation();
  return (
    <KnowYourRightsTemplate
      scenarioItems={[
        {
          subtitle: t('call_your_attorney'),
          title: t("agent_won't_leave?"),
        },
        {
          subtitle: t('do_not_provide_information'),
          title: t('agent_looking_for_someone'),
        },
      ]}
      tips={[
        t('do_not_open_door'),
        t('do_not_lie'),
        t('do_not_provide_information'),
      ]}
      warning={{
        subtitle: t('talk_through_door'),
        title: t('do_not_open_door'),
      }}
    />
  );
};

export default OutsideHomeScreen;
