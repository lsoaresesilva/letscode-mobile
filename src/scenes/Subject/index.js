/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import { getAllSubject } from '../../store/modules/subject/actions';
import {
  Container,
  HeaderContainer,
  Header,
  HeaderItem,
  ListView,
  ListItem,
  IconSequence,
  IconSequenceNumber,
  MetainfoTitle,
  ContainerNumberQuestions,
  IconQtd,
  TextQtdQuestions,
  MetainfoContainer,
} from './styles';

export default () => {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.subject.loading);
  const subjects = useSelector(state => state.subject.subjects);

  useEffect(() => {
    dispatch(getAllSubject());
  }, []);

  if (loading) {
    return (
      <View>
        <Text>carregando</Text>
      </View>
    );
  }

  return (
    <Container>
      <HeaderContainer>
        <Header>
          <HeaderItem>voltar</HeaderItem>
          <HeaderItem style={{ fontSize: 20 }}>Assuntos</HeaderItem>
          <HeaderItem>Filtrar</HeaderItem>
        </Header>
      </HeaderContainer>
      <ListView
        data={subjects.subjects}
        renderItem={({ item }) => (
          <ListItem key={item.id}>
            <IconSequence>
              <IconSequenceNumber>{item.sequencia}</IconSequenceNumber>
            </IconSequence>
            <MetainfoContainer>
              <MetainfoTitle>{item.nome}</MetainfoTitle>
              <ContainerNumberQuestions>
                <IconQtd>{item.questoesFechadas.length}</IconQtd>
                <TextQtdQuestions>Questões</TextQtdQuestions>
              </ContainerNumberQuestions>
            </MetainfoContainer>
          </ListItem>
        )}
      />
    </Container>
  );
};
