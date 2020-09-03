import { useTranslation } from 'react-i18next';
import React from 'react';
import KnowYourRightsTemplate from './Template';

const OnStreetScreen = () => {
  const { t } = useTranslation();
  return (
    <KnowYourRightsTemplate
      tips={[t('present_card'), t('do_not_sign_anything'), t('do_not_lie')]}
      warning={{
        subtitle: t('remember_to_remain_silent'),
        title: t('do_not_run_speak'),
      }}
    />
  );
};

export default OnStreetScreen;
