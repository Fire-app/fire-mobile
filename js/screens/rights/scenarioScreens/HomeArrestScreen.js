import { useTranslation } from 'react-i18next';
import React from 'react';
import KnowYourRightsTemplate from './Template';

const HomeArrestScreen = () => {
  const { t } = useTranslation();
  return (
    <KnowYourRightsTemplate
      tips={[
        t('do_not_resist_arrest'),
        t('do_not_provide_information'),
        t('do_not_sign_anything'),
      ]}
      warning={{
        subtitle: t('remain_silent_wait_to_speak'),
        title: t('do_not_sign_anything_wo_lawyer'),
      }}
    />
  );
};

export default HomeArrestScreen;
