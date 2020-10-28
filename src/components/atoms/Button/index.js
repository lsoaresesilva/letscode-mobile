import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container, Text } from './style';

export default function Button({
  children,
  loading,
  background,
  textColor,
  ...rest
}) {
  return (
    <Container backgroundColor={background} {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text style={{ color: textColor }}>{children}</Text>
      )}
    </Container>
  );
}
