import React from 'react';
import styled from 'styled-components/macro';
import { colors } from 'constants/styleVariables';

import PropTypes from 'prop-types';

import BackgroundLines from '../BackgroundLines/BackgroundLines';

export const Container = styled.section`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const LayoutContainer = ({ children }) => (
  <Container>
    <BackgroundLines />
    <Main>{children}</Main>
  </Container>
);

LayoutContainer.propTypes = {
  children: PropTypes.node,
};
