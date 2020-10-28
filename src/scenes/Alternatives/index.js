import React, { useState, useEffect } from 'react';
import { StatusBar, Alert, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BaseButton } from 'react-native-gesture-handler';
import QuestaoFechada from '../../model/QuestaoFechada';
import {
  getAllAnwserQuestion,
  addAnwserQuestion,
} from '../../store/modules/anwserClosedQuestion/actions';

import ListQuestion from '../../components/organisms/ListQuestion';
import ListaAlternativa from '../../components/molecules/ListaAlternativa';
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
  const [questaoRespondida, setQuestaoRespondida] = useState('');

  useEffect(() => {
    dispatch(getAllAnwserQuestion());
  }, []);

  const loading = useSelector(state => state.anwserClosedQuestion.loading);

  const idUser = useSelector(state => state.auth.user.id);

  const alternative: [QuestaoFechada] = useSelector(
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

  const handleSubmit = async () => {
    const idQuestao = idAlternative;
    const alternativaSelecionada = alternativeSelected;
    const idUsuario = idUser;

    console.log('-----------', alternatives);
    console.log('___________________________');

    console.log('id da questão: ', idQuestao);
    console.log('alternativa selecionada: ', alternativaSelecionada.id);
    console.log('id do usuário: ', idUsuario);
    console.log('resposta: ', alternative.respostaQuestao);
    dispatch(
      addAnwserQuestion(alternativaSelecionada.id, idQuestao, idUsuario)
    );
    // console.log('-----------');
    // console.log(idAlternative);
    // console.log('-----------');
    // console.log(idUser);
    // console.log('-----------');
    // console.log(anwsers);
    console.log('------cccccccccccc-----');
    // dispatch(addAnwserQuestion(alternativeSelected.id, idAlternative, idUser));
    // /console.log(
    //  'JOEL HENRIQUE SILVA SANOS \n\n\n\n\n\n\n\n ---------------',
    //  alternative
    // );
    // console.log(alternative);
    // console.log(alternatives);
    // Alert.alert(`${alternative.respostaQuestao.length}`);
    // Alert.alert(`${questaoRespondida ? 'true' : 'false'}`);
    // /// if (alternative.respostaQuestao.length !== 0) {
    // }
    /**
    *  if (
      anwsers.filter(
        anwser =>
          anwser.questaoId === idAlternative && anwser.usuarioId === idUser
      ).length > 0
    ) {
      setShowAwnser(true);
      Alert.alert('Ops', 'Você já respondeu essa questão');
    } else {
      setShowAwnser(true);
      /**
       * dispatch(
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
    */
  };

  useEffect(() => {
    if (alternative.respostaQuestao) {
      console.log('');
      setAlternatives(
        alternative.alternativas.map(item => {
          if (item.id === alternative.respostaQuestao.alternativaId) {
            return {
              id: item.id,
              selected: true,
              isVerdadeiro: item.isVerdadeiro,
              text: item.texto,
            };
          }
          return {
            id: item.id,
            selected: false,
            isVerdadeiro: item.isVerdadeiro,
            text: item.texto,
          };
        })
      );
    }
    // if (alternative.respostaQuestao.length !== 0) {
    //  setQuestaoRespondida(alternative.respostaQuestao);
    // }
  }, [loading]);

  if (loading) {
    return (
      <View>
        <Text>carregando</Text>
      </View>
    );
  }

  return (
    <Container showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor="#341C94" />
      <ContainerQuestion>
        <QuestionTitle>{alternative.nomeCurto}</QuestionTitle>
        <QuestionStatement>{alternative.enunciado}</QuestionStatement>
      </ContainerQuestion>
      <AlternativesContainer>
        <ListaAlternativa
          resposta={alternative.respostaQuestao}
          questaoRespondida={questaoRespondida}
          data={alternatives}
          infoAlternativa={alternative}
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
          backgroundColor: alternative.respostaQuestao
            ? '#9090904f'
            : '#341C94',
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 70,
          marginTop: 20,
        }}
        onPress={handleSubmit}
      >
        <Text
          style={{
            color: '#fff',
          }}
        >
          {alternative.respostaQuestao ? 'RESPONDIDA' : 'RESPONDER'}
        </Text>
      </BaseButton>
    </Container>
  );
};

/**
<ListQuestion
          questaoRespondida={questaoRespondida}
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
 */
