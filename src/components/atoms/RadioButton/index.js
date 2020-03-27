import React from 'react';
import { Container, Dot } from './styles';

export default ({ actived }) => {
  return <Container>{actived ? <Dot /> : null}</Container>;
};
