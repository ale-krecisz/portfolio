import React from 'react';
import PropTypes from 'prop-types';

import { Container, Line, Letters } from './styled';

const PerspectiveText = ({ firstLine, secondLine, thirdLine, fourthLine }) => (
  <Container>
    <Line>
      <Letters>&nbsp;</Letters>
      <Letters>{firstLine}</Letters>
    </Line>
    <Line>
      <Letters>{firstLine}</Letters>
      <Letters>{secondLine}</Letters>
    </Line>
    <Line>
      <Letters>{secondLine}</Letters>
      <Letters>{thirdLine}</Letters>
    </Line>
    <Line>
      <Letters>{thirdLine}</Letters>
      <Letters>{fourthLine}</Letters>
    </Line>
    <Line>
      <Letters>{fourthLine}</Letters>
      <Letters></Letters>
    </Line>
  </Container>
);

PerspectiveText.propTypes = {
  firstLine: PropTypes.string,
  secondLine: PropTypes.string,
  thirdLine: PropTypes.string,
  fourthLine: PropTypes.string,
};

export default PerspectiveText;
