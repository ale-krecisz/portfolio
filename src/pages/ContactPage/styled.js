import styled from 'styled-components/macro';

import backgroundSlide from 'assets/2.jpg';

export const Container = styled.div`
  padding: 100px;
  margin: 0 auto;
  background: url(${backgroundSlide}) center center no-repeat;
  background-size: cover;
  min-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Form = styled.form`
  width: 450px;
`;
