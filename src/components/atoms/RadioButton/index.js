import React from 'react';
import { Container, Dot } from './styles';

export default ({ actived, bgColor }) => {
  return (
    <Container bgColor={bgColor}>
      {actived ? <Dot bgColor={bgColor} /> : null}
    </Container>
  );
};
