import React from 'react';
import { Container, RadioContainer, AlternativeText } from './styles';
import RadioButton from '../../atoms/RadioButton';

export default (
  { actived, text, idRadio, handleClick, correct, cor },
  props
) => {
  return (
    <Container
      onPress={() => {
        handleClick();
      }}
      correct={correct}
      cor={cor}
      {...props}
    >
      <RadioContainer>
        <RadioButton idRadio={idRadio} actived={actived} />
      </RadioContainer>
      <AlternativeText>{text}</AlternativeText>
    </Container>
  );
};
