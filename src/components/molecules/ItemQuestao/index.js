import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native';
import {
  Container,
  ContainerNumeroQuestao,
  NumeroQuestao,
  ContainerInfo,
  Title,
  Subtitle,
  LinhaProgresso,
  Divisor,
  Joel,
  ButtonCTA,
  ContainerComponente,
} from './styles';

export default ({ status, title, index, handlePress, correct, cor }, props) => {
  return (
    <Container status={status} {...props}>
      <ContainerNumeroQuestao>
        <NumeroQuestao>{index}</NumeroQuestao>
      </ContainerNumeroQuestao>
      <ContainerInfo>
        <Title>{title}</Title>
        <Subtitle>{status ? 'Respondida' : 'Não respondida'}</Subtitle>
      </ContainerInfo>
      <ButtonCTA onPress={handlePress}>
        <Icon name="chevron-right" size={20} color="#fff" />
      </ButtonCTA>
    </Container>
  );
};
