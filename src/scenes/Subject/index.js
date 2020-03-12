/* eslint-disable no-unused-expressions */
import React from 'react';
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
        data={[
          { id: 0, seq: 1, nome: 'Lorem ipsum', qtdQuestoes: 41 },
          { id: 1, seq: 2, nome: 'Lorem ipsum', qtdQuestoes: 1 },
          { id: 2, seq: 3, nome: 'Lorem ipsum', qtdQuestoes: 5 },
          { id: 3, seq: 4, nome: 'Lorem ipsum', qtdQuestoes: 121 },
          { id: 4, seq: 5, nome: 'Lorem ipsum', qtdQuestoes: 1 },
          { id: 5, seq: 6, nome: 'Lorem ipsum', qtdQuestoes: 7 },
          { id: 6, seq: 7, nome: 'Lorem ipsum', qtdQuestoes: 12 },
          { id: 7, seq: 8, nome: 'Lorem ipsum', qtdQuestoes: 45 },
          { id: 8, seq: 9, nome: 'Lorem ipsum', qtdQuestoes: 44 },
        ]}
        renderItem={({ item }) => (
          <ListItem key={`${item.id}`}>
            <IconSequence>
              <IconSequenceNumber>{item.seq}</IconSequenceNumber>
            </IconSequence>
            <MetainfoContainer>
              <MetainfoTitle>{item.nome}</MetainfoTitle>
              <ContainerNumberQuestions>
                <IconQtd>{item.qtdQuestoes}</IconQtd>
                <TextQtdQuestions>Questões</TextQtdQuestions>
              </ContainerNumberQuestions>
            </MetainfoContainer>
          </ListItem>
        )}
      />
    </Container>
  );
};
