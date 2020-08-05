import React from 'react';
import { useTranslation } from 'react-i18next';
import KnowYourRightsTemplate from './Template';

const InsideHomeScreen = () => {
  const { t } = useTranslation();
  return (
    <KnowYourRightsTemplate
      warning={{
        title: t('present_card_remain_silent'),
        subtitle: t('you_have_right_to_silence'),
      }}
      scenarioBullets={{
        title: t('tell_agent_if'),
        bullets: [
          t('children_are_present'),
          t('you_are_ill'),
          t('need_to_arrange_care'),
        ],
      }}
      scenarioItems={[
        {
          title: t('agent_no_warrant?'),
          subtitle: t('say_you_deny_search'),
        },
      ]}
      tips={[
        t('do_not_resist_arrest'),
        t('do_not_give_false_documents'),
        t('do_not_lie'),
      ]}
    />
  );
};

export default InsideHomeScreen;
