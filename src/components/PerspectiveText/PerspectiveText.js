import React from 'react';

import { Container, Line, Letters } from './styled';

const PerspectiveText = () => (
  <Container>
    <Line>
      <Letters>&nbsp;</Letters>
      <Letters>I am</Letters>
    </Line>
    <Line>
      <Letters>I am</Letters>
      <Letters>So cool</Letters>
    </Line>
    <Line>
      <Letters>So cool</Letters>
      <Letters>So smart</Letters>
    </Line>
    <Line>
      <Letters>So smart</Letters>
      <Letters>So awesome</Letters>
    </Line>
    <Line>
      <Letters>So awesome</Letters>
      <Letters></Letters>
    </Line>
  </Container>
);

export default PerspectiveText;