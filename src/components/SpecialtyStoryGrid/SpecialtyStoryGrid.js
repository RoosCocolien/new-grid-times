import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
          <SportsStories>

              {SPORTS_STORIES.map((data) => (
                <SportsStoryWrapper key={data.id} >
                  <MiniStory {...data} />
                </SportsStoryWrapper>
                ))}
          </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  max-width: 100%;
  grid-template-columns: minmax(0px, auto);
  grid-template-areas:
  'market'
  'sports';
  
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: minmax(0px, auto);
    gap: 64px;
  }

  @media ${QUERIES.desktopAndUp} {
    gap: 0px;
    grid-template-columns: 1fr minmax(0px, 1fr);
    grid-template-areas:
      'market sports'
  }
`;

const MarketsSection = styled.section`
  grid-area: 'market';

  @media ${QUERIES.desktopAndUp} {
    padding-inline-end: 16px;
    margin-inline-end: 16px;
    border-inline-end: 1px solid var(--color-gray-300);    
  }
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  max-width: 100%;
`;

const SportsSection = styled.section`
  grid-area: 'sports'
`;

const SportsStoryWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    min-width: 220px;
  };
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    gap: 16px;
    overflow: auto;
  }
`;

export default SpecialtyStoryGrid;
