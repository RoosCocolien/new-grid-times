import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES, COLORS } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroupDesktop>
          <button>
            <Search size={24}/>
          </button>
          <button>
            <Menu size={24}/>
          </button>
        </ActionGroupDesktop>
        <Logo />
        <SubscribeGroupDesktop>
          <SubscribeButton>Subscribe</SubscribeButton>
          <LoginLink href="/login">Already a subscriber?</LoginLink>
        </SubscribeGroupDesktop>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
    color: var(--color-gray-100);
  }
`;

const ActionGroupDesktop = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
    gap: 24px;
    
    /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
    */
    svg {
      display: block;
      color: var(--color-gray-900);
    }
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.desktopAndUp} {
    justify-content: space-between;
    align-items: center;
  }
`;

const SubscribeGroupDesktop = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }
`;

const SubscribeButton = styled(Button)`
  text-transform: uppercase;

`

const LoginLink = styled.a`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: block;
    text-decoration: underline;
    font-style: italic;
    color: var(--color-gray-700);
  }
`

export default Header;
