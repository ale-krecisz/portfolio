import styled from 'styled-components/macro';
import { mediaQuery } from 'constants/mediaQuery';
import { colors } from 'constants/styleVariables';
import { Highlight, SubTitle } from 'components/layout';

import backgroundSlide from 'assets/5.jpg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px auto 60px;
  max-width: 500px;
  padding: 40px 20px;
  position: relative;
  width: 100%;
  z-index: 3;

  &::before {
    content: '';
    background-image: linear-gradient(35deg, #0f88a2 0%, #addbe6 45%, #aac8f2 100%);
    left: -30px;
    right: -30px;
    bottom: -30px;
    top: -30px;
    position: absolute; 
    box-shadow: 0 0 20px 5px rgba(0,0,0,0.1);
  }

  ${mediaQuery.small} {
    max-width: 750px;
    padding: 80px 40px;
    min-height: 608px;
  }

  ${mediaQuery.medium} {
    padding: 80px;
  }
  
  ${Highlight} {
    display: block;
    font-size: 60px;
    margin-bottom: 10px;
  }

  ${SubTitle} {
    position: relative;
    color: ${colors.white};
    text-align: center;
  }

  &:hover {
    &::before, &::after {
      background-image: linear-gradient(-35deg, #0f88a2 0%, #addbe6 45%, #aac8f2 100%);
    }
  }
`;

export const Overlay = styled.div`
  background: url(${backgroundSlide}) center center no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  &::after {
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.45) 100%);
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mediaQuery.small} {
    width: 450px;
  }
`;
