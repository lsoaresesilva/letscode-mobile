import React from 'react';
import { Container, RadioContainer, AlternativeText } from './styles';
import RadioButton from '../../atoms/RadioButton';

export default (
  { bgColor, actived, text, idRadio, handleClick, correct, cor },
  props
) => {
  // console.log('\n\n\n\n----\n\n\n-----\n\n\n---\n\n\n\n----', bgColor);
  return (
    <Container
      bgColor={bgColor}
      onPress={() => {
        handleClick();
      }}
      correct={correct}
      cor={cor}
      {...props}
    >
      <RadioContainer bgColor={bgColor}>
        <RadioButton bgColor={bgColor} idRadio={idRadio} actived={actived} />
      </RadioContainer>
      <AlternativeText bgColor={bgColor}>{text}</AlternativeText>
    </Container>
  );
};
