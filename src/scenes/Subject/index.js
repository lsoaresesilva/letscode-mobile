/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  HeaderItemAction,
  HeaderItemTitle,
  MetainfoContainer,
} from './styles';

export default ({ navigation }) => {
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
          <HeaderItemAction
            onPress={() => {
              navigation.navigate('Home');
            }}
          >
            <HeaderItem>
              <Icon name="chevron-left" size={20} color="#fff" />
            </HeaderItem>
          </HeaderItemAction>

          <HeaderItemTitle>assuntos</HeaderItemTitle>
          <HeaderItemAction>
            <HeaderItem>
              <Icon name="filter" size={20} color="#fff" />
            </HeaderItem>
          </HeaderItemAction>
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
