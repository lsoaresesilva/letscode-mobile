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

import ItemQuestao from '../../components/molecules/ItemQuestao';

export default ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { idSubject } = route.params;

  const loading = useSelector(state => state.subject.loading);
  const alternatives = useSelector(
    state =>
      state.subject.subjects.subjects.filter(item => item.id === idSubject)[0]
        .questoesFechadas
  );
  const subjects = useSelector(
    state =>
      state.subject.subjects.subjects.filter(item => item.id === idSubject)[0]
  );

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

  console.tron.log('\n\n\n\n\naaaaaaaaaaaaaaa ', subjects.questoesFechadas);

  return (
    <>
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

            <HeaderItemTitle>{subjects.nome}</HeaderItemTitle>
            <HeaderItemAction>
              <HeaderItem>
                <Icon name="filter" size={20} color="#fff" />
              </HeaderItem>
            </HeaderItemAction>
          </Header>
        </HeaderContainer>
        <ListView
          data={alternatives}
          renderItem={({ item, index }) => {
            // console.log('\n\n\n\n => ', item);
            return (
              <ItemQuestao
                title={item.nomeCurto}
                index={index}
                status={item.respostaQuestao}
                handlePress={() => {
                  navigation.navigate('Alternatives', {
                    idAlternative: item.id,
                    idSubject,
                  });
                }}
              />
            );
          }}
        />
      </Container>
    </>
  );
};

/*
<ListView
        data={alternatives}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => {
              navigation.navigate('Alternatives', {
                idAlternative: item.id,
                idSubject,
              });
            }}
            key={item.id}
          >
            <IconSequence>
              <IconSequenceNumber>
                <Icon
                  name={item.respostaQuestao ? 'check' : 'times'}
                  size={30}
                  color="#fff"
                />
              </IconSequenceNumber>
            </IconSequence>
            <MetainfoContainer>
              <MetainfoTitle>{item.nomeCurto}</MetainfoTitle>
              <ContainerNumberQuestions>
                <TextQtdQuestions>
                  {item.respostaQuestao
                    ? 'Questão respondida'
                    : 'Questão não respondida'}
                </TextQtdQuestions>
              </ContainerNumberQuestions>
            </MetainfoContainer>
          </ListItem>
        )}
      />
*/
