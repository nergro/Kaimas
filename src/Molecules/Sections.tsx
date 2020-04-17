import HouseImage from 'assets/cards/house.jpg';
import { SectionCard } from 'Atoms/SectionCard';
import { H1 } from 'Atoms/text';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getLocale } from 'services/localStorage';
import { useActivitiesList } from 'store/activitiesStore/hooks';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  margin-top: 120px;
`;

const StyledH1 = styled(H1)`
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.12);
  font: ${props => props.theme.fonts.SectionHeaderBold};
  background: linear-gradient(
    to right,
    rgba(248, 182, 0, 1) 0%,
    rgba(248, 182, 0, 1) 26%,
    rgba(246, 41, 12, 1) 97%,
    rgba(241, 111, 92, 1) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledSection = styled(SectionCard)`
  &:first-child {
    margin: 0;
  }
  margin-top: 40px;
`;

export const Sections: FC = () => {
  const fetchedActivities = useActivitiesList();
  const { t } = useTranslation();

  const locale = getLocale()?.value;
  const isLT = locale === 'lt';

  const activitiesToUse =
    fetchedActivities.length >= 3
      ? fetchedActivities.slice(0, 3)
      : fetchedActivities.length > 0
      ? fetchedActivities
      : [];
  return (
    <Wrapper>
      <StyledH1>{t('Rest in Nature')}</StyledH1>
      <StyledSection
        title={t('Accomodation')}
        description={t(
          'The best rest only in fabulous Lithuanian nature. Our comfortable homesteads are in a great location. Everything for your perfect vacation!'
        )}
        path="/cabins"
        image={HouseImage}
      />
      {activitiesToUse.map((activity, i) => (
        <StyledSection
          key={activity.id}
          title={isLT ? activity.nameLT : activity.nameEN}
          description={isLT ? activity.descriptionLT : activity.descriptionEN}
          path={`/activities/${activity.id}`}
          image={activity.thumbnail.imageUrl}
          toRight={i % 2 === 0}
        />
      ))}
      {/* <StyledSection
        title="Vandens pramogos"
        description="Geriausias poilsis tik tikroje lietuviškoje gamtoje. Mūsų komfortabilios sodybos įrengtos puikioje vietoje. Viskas tobulam Jūsų poilsiui!"
        path="#"
        image={LakeImage}
        toRight
      />
      <StyledSection
        title="Jodinėjimas žirgais"
        description="Geriausias poilsis tik tikroje lietuviškoje gamtoje. Mūsų komfortabilios sodybos įrengtos puikioje vietoje. Viskas tobulam Jūsų poilsiui!"
        path="#"
        image={HorseImage}
      /> */}
    </Wrapper>
  );
};
