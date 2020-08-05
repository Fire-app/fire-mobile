import React from 'react';
import { useTranslation } from 'react-i18next';
import KnowYourRightsTemplate from './Template';

const DrivingScreen = () => {
  const { t } = useTranslation();
  return (
    <KnowYourRightsTemplate
      warning={{
        title: t('do_not_drive_away'),
        subtitle: t('stay_calm_do_not_open_car'),
      }}
      tips={[
        t('do_not_open_car'),
        t('tell_agent_that_you_want_to_remain_silent'),
        t('do_not_present_your_license'),
        t('do_not_sign_or_answer_wo_lawyer'),
      ]}
    />
  );
};

export default DrivingScreen;
