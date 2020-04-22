import React from 'react';
import styled, {css} from 'styled-components/macro';
import { colors } from 'constants/styleVariables';

import PropTypes from 'prop-types';

import BackgroundLines from './BackgroundLines/BackgroundLines';

export const Section = styled.section`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  width: 100%;

  ${props => props.centered && css`
    align-items: center;
    justify-content: center;
  `};
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const LayoutContainer = ({ centered, children }) => (
  <Section centered={centered}>
    <BackgroundLines />
    <Main>{children}</Main>
  </Section>
);

LayoutContainer.propTypes = {
  children: PropTypes.node,
  centered: PropTypes.bool,
};

LayoutContainer.defaultProps = {
  centered: false,
};
