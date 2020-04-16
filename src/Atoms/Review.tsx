import { P, Span } from 'Atoms/text';
import moment from 'moment';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { Review as ReviewType } from 'types/review';

const Wrapper = styled.div`
  border: 2px solid ${props => props.theme.colors.review.border};
  padding: 15px;

  display: flex;
  flex-direction: column;
`;

const NameAndDate = styled.div`
  display: flex;
`;

const Name = styled(Span)`
  flex-grow: 1;
`;

const Date = styled(Span)``;

const RatingAndRecommend = styled.div`
  display: flex;
  margin-top: 10px;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: column;
  }
`;

const LeftSpan = styled(Span)`
  margin-right: 8px;
  word-break: break-all;
`;

const StyledP = styled(P)`
  margin-right: 15px;
  display: flex;
  flex-wrap: wrap;
`;

const CommentWrapper = styled.div`
  margin-top: 20px;
`;

interface Props {
  className?: string;
  review: ReviewType;
}
export const Review: FC<Props> = ({ className, review }) => {
  const { t } = useTranslation();
  return (
    <Wrapper className={className}>
      <NameAndDate>
        <Name size="veryBig" weight="700">
          {review.user.name}
        </Name>
        <Date size="normal">{moment(review.date).format('YYYY-MM-DD')}</Date>
      </NameAndDate>
      <RatingAndRecommend>
        <StyledP size="normal">
          <LeftSpan weight="600">{t('Rating')}: </LeftSpan>
          <Span size="normal">{review.rating}</Span>
        </StyledP>
        <StyledP size="normal">
          <LeftSpan weight="600">{t('Would recommend')}:</LeftSpan>
          <Span size="normal">{review.recommend ? t('Yes') : t('No')}</Span>
        </StyledP>
      </RatingAndRecommend>
      <CommentWrapper>
        <P size="medium" weight="600">
          {t('Comment')}
        </P>
        <P size="normal">{review.comment}</P>
      </CommentWrapper>
    </Wrapper>
  );
};
