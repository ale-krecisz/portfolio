import styled from 'styled-components/macro';
import { mediaQuery } from 'constants/mediaQuery';

import backgroundSlide from 'assets/2.jpg';


export const Container = styled.div`
  background: url(${backgroundSlide}) center center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto 60px;
  max-width: 500px;
  padding: 80px 20px;
  position: relative;
  width: 100%;

  ${mediaQuery.small} {
    max-width: 750px;
    padding: 80px 40px;
  }

  ${mediaQuery.medium} {
    padding: 80px;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.3) 100%);
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
