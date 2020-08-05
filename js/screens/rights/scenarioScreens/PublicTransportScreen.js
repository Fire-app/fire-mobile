import React from 'react';
import { useTranslation } from 'react-i18next';
import KnowYourRightsTemplate from './Template';

const PublicTransport = () => {
  const { t } = useTranslation();
  return (
    <KnowYourRightsTemplate
      warning={{
        title: t('do_not_run_speak'),
        subtitle: t('remember_to_remain_silent'),
      }}
      tips={[t('present_card'), t('do_not_sign_anything'), t('do_not_lie')]}
    />
  );
};

export default PublicTransport;
