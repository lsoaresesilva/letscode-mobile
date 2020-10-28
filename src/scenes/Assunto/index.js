/* eslint-disable no-unused-expressions */
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, Alert, Dimensions } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';
import { getAllSubject } from '../../store/modules/subject/actions';
import { PRIMARY } from '../../styles/colors';
import {
  Container,
  HeaderContainer,
  Header,
  HeaderItem,
  GoSubject,
  ListItem,
  IconSequence,
  IconSequenceNumber,
  MetainfoTitle,
  ContainerNumberQuestions,
  Progress,
  TextQtdQuestions,
  HeaderItemAction,
  HeaderItemTitle,
  MetainfoContainer,
  ProgressPoint,
} from './styles';
import Assunto from '../../model/Assunto';

export default ({ navigation }) => {
  const dispatch = useDispatch();
  const [loader, setload] = useState(false);

  const cardRef = useRef(null);

  const loading = useSelector(state => state.subject.loading);
  const failed = useSelector(state => state.subject.failed);
  const subjects: [Assunto] = useSelector(
    state => state.subject.subjects.subjects
  );
  const usuario = useSelector(state => state.auth.user);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    Alert.alert('oi');
    dispatch(getAllSubject());
  }, []);

  if (loading) {
    return (
      <View>
        <Text>carregando</Text>
      </View>
    );
  }

  const itemWidth = Dimensions.get('window').width - 90;
  const { width } = Dimensions.get('window');

  const renderItem = ({ item, index }) => {
    // console.log('\n\n\n\n\n\n\n');
    // console.log(item.questoesFechadas);
    return (
      <>
        <ListItem
          onPress={() => {
            navigation.navigate('ClosedQuestions', {
              idSubject: item.id,
            });
          }}
          key={item.id}
        >
          <IconSequence>
            <IconSequenceNumber>{item.sequencia}</IconSequenceNumber>
          </IconSequence>
          <MetainfoContainer>
            <MetainfoTitle>{item.nome}</MetainfoTitle>

            <TextQtdQuestions>
              {item.quantidadeQuestoesFechadas} Questões
            </TextQtdQuestions>
            <Text style={{ marginLeft: 25, marginRight: 25 }} />
            <GoSubject
              onPress={() =>
                navigation.navigate('ClosedQuestions', {
                  idSubject: item.id,
                })
              }
            >
              <Text
                style={{
                  color: '#fff',
                }}
              >
                INICIAR
              </Text>
            </GoSubject>
          </MetainfoContainer>
        </ListItem>
        <Progress>
          <ProgressPoint max={item.porcentagemQuestoesRespondidas} />
        </Progress>
      </>
    );
  };

  return (
    <>
      <HeaderContainer>
        <Header>
          <HeaderItemAction
            onPress={() => {
              navigation.navigate('Home');
            }}
          >
            <HeaderItem>
              <Icon name="chevron-left" size={20} color={PRIMARY} />
            </HeaderItem>
          </HeaderItemAction>

          <HeaderItemTitle>assuntos</HeaderItemTitle>
        </Header>
      </HeaderContainer>

      <Container testID="subject-testid" index={currentIndex}>
        <View style={{}}>
          <Carousel
            data={subjects}
            renderItem={renderItem}
            itemWidth={itemWidth}
            layout="default"
            sliderWidth={width}
            style={{}}
          />
        </View>
      </Container>
    </>
  );
};
