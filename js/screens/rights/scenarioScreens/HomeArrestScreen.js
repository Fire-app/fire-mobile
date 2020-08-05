import React from 'react';
import { useTranslation } from 'react-i18next';
import KnowYourRightsTemplate from './Template';

const HomeArrestScreen = () => {
  const { t } = useTranslation();
  return (
    <KnowYourRightsTemplate
      warning={{
        title: t('do_not_sign_anything_wo_lawyer'),
        subtitle: t('remain_silent_wait_to_speak'),
      }}
      tips={[
        t('do_not_resist_arrest'),
        t('do_not_provide_information'),
        t('do_not_sign_anything'),
      ]}
    />
  );
};

export default HomeArrestScreen;
