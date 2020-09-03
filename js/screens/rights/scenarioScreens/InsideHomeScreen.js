import { useTranslation } from 'react-i18next';
import React from 'react';
import KnowYourRightsTemplate from './Template';

const InsideHomeScreen = () => {
  const { t } = useTranslation();
  return (
    <KnowYourRightsTemplate
      scenarioBullets={{
        bullets: [
          t('children_are_present'),
          t('you_are_ill'),
          t('need_to_arrange_care'),
        ],
        title: t('tell_agents_if'),
      }}
      scenarioItems={[
        {
          subtitle: t('say_you_deny_search'),
          title: t('agent_no_warrant?'),
        },
      ]}
      tips={[
        t('do_not_resist_arrest'),
        t('do_not_give_false_documents'),
        t('do_not_lie'),
      ]}
      warning={{
        subtitle: t('you_have_right_to_silence'),
        title: t('present_card_remain_silent'),
      }}
    />
  );
};

export default InsideHomeScreen;
