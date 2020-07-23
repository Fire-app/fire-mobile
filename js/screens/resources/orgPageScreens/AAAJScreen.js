import React from 'react';
import { useTranslation } from 'react-i18next';
import OrgPageTemplate from '../OrgPageTemplate';

export default function AAAJScreen() {
  const { t } = useTranslation();
  const SERVICES = [
    'DACA renewal',
    'Citizenship consultation',
    'English classes',
  ];

  return (
    <OrgPageTemplate
      name="Asian Americans Advancing Justice"
      website="https://www.advancingjustice-la.org/"
      phone="tel://8883499695"
      description={t('AAAJ_description')}
      services={SERVICES}
      facebookUrl="http://www.facebook.com/AdvancingJusticeLA"
      instagramUrl={null}
      twitterUrl="https://twitter.com/AAAJ_LA"
      youtubeUrl={null}
    />
  );
}
