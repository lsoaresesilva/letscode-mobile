import React, { forwardRef } from 'react';
import { TextInput } from 'react-native';
import { Container } from './styles';

function Input({ style, ...rest }, ref) {
  return (
    <Container lineBottomColor="#fff" lineBottomWeight="0px" style={style}>
      <TextInput style={{ width: '100%' }} {...rest} ref={ref} />
    </Container>
  );
}

export default forwardRef(Input);
