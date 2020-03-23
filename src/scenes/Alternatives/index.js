import React, { useState, useEffect } from 'react';
import { StatusBar, Alert, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BaseButton } from 'react-native-gesture-handler';
import {
  getAllAnwserQuestion,
  addAnwserQuestion,
} from '../../store/modules/anwserClosedQuestion/actions';

import ListQuestion from '../../components/organisms/ListQuestion';
import RespostasQuestaoFechada from '../../model/RespostasQuestaoFechada';

import {
  Container,
  ContainerQuestion,
  QuestionTitle,
  QuestionStatement,
  AlternativesContainer,
} from './styles';

export default ({ route, navigation }) => {
  const { idAlternative, idSubject } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAnwserQuestion());
  }, []);

  const loading = useSelector(state => state.anwserClosedQuestion.loading);

  const idUser = useSelector(state => state.auth.user.id);

  const alternative = useSelector(
    state =>
      state.subject.subjects.subjects
        .filter(item => item.id === idSubject)[0]
        .questoesFechadas.filter(item => item.id === idAlternative)[0]
  );

  const abba = alternative.alternativas.map(item => {
    return {
      id: item.id,
      selected: false,
      isVerdadeiro: item.isVerdadeiro,
      text: item.texto,
    };
  });

  const [alternatives, setAlternatives] = useState(abba);
  const [alternativeSelected, setAlternativeSelected] = useState();
  const [showAwnser, setShowAwnser] = useState(false);
  const anwsers = useSelector(state => state.anwserClosedQuestion.questions);

  const handleSubmit = () => {
    if (
      anwsers.filter(
        anwser =>
          anwser.questaoId === idAlternative && anwser.usuarioId === idUser
      ).length > 0
    ) {
      setShowAwnser(true);
      Alert.alert('Ops', 'Você já respondeu essa questão');
    } else {
      setShowAwnser(true);
      dispatch(
        addAnwserQuestion(
          new RespostasQuestaoFechada(
            alternativeSelected.id,
            idAlternative,
            idUser
          )
        )
      );
      if (alternativeSelected.isVerdadeiro) {
        Alert.alert('Parabéns', 'Você acertou a questão');
      } else {
        Alert.alert(
          'Ops, não vou dessa vez',
          'A resposta certa está marcada em verde'
        );
      }
    }
  };

  if (loading) {
    return (
      <View>
        <Text>carregando</Text>
      </View>
    );
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#341C94" />
      <ContainerQuestion>
        <QuestionTitle>{alternative.nomeCurto}</QuestionTitle>
        <QuestionStatement>{alternative.enunciado}</QuestionStatement>
      </ContainerQuestion>
      <AlternativesContainer>
        <ListQuestion
          data={alternatives}
          showAwnser={showAwnser}
          handleSubmit={id => {
            setAlternativeSelected(id);
            setAlternatives(
              alternatives.map(item => {
                if (item.id === id) {
                  item.selected = true;
                  return item;
                }
                return item;
              })
            );
          }}
        />
      </AlternativesContainer>
      <BaseButton
        style={{
          backgroundColor: '#341C94',
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={handleSubmit}
      >
        <Text
          style={{
            color: '#fff',
          }}
        >
          ENVIAR RESPOSTA
        </Text>
      </BaseButton>
    </Container>
  );
};
