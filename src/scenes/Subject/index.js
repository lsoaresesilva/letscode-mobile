/* eslint-disable no-unused-expressions */
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, Button, Dimensions } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import SideSwipe from 'react-native-sideswipe';
import { getAllSubject } from '../../store/modules/subject/actions';
import { PRIMARY } from '../../styles/colors';
import Paginator from '../../components/molecules/PaginatorHorizontal';
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
  ScrollListView,
} from './styles';

export default ({ navigation }) => {
  const dispatch = useDispatch();

  const cardRef = useRef(null);

  const loading = useSelector(state => state.subject.loading);
  const failed = useSelector(state => state.subject.failed);
  const subjects = useSelector(state => state.subject.subjects.subjects);
  const [currentIndex, setCurrentIndex] = useState(0);

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
  const CustomComponent = item => (
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
          {item.questoesFechadas.length} Questões
        </TextQtdQuestions>
        <Text style={{ marginLeft: 25, marginRight: 25 }} />
        <Button
          style={{
            marginTop: 20,
            width: '100%',
            height: 60,
            color: '#fff',
            alignContent: 'center',
            justifyContent: 'center',
            backgroundColor: '#3400FF',
          }}
          onPress={() =>
            navigation.navigate('ClosedQuestions', {
              idSubject: item.id,
            })
          }
          title="INICIAR"
        />
      </MetainfoContainer>
    </ListItem>
  );

  const itemWidth = Dimensions.get('window').width - 90;
  const { width } = Dimensions.get('window');
  const contentOffset = (width - 300) / 2;

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
        <SideSwipe
          itemWidth={300}
          style={{ width }}
          data={subjects}
          contentOffset={contentOffset}
          onIndexChange={index => setCurrentIndex(index)}
          renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
            <CustomComponent
              {...item}
              index={itemIndex}
              currentIndex={currentIndex}
              animatedValue={animatedValue}
            />
          )}
        />
      </Container>
    </>
  );
};

/**
 *
 <ListView
          data={subjects}
          data-testid="subject-testid"
          testID="subject-testid"
          id="subject-testid"
          horizontal
          /**  contentContainerStyle={{ paddingHorizontal: '10%' }}

          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
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
                <ContainerNumberQuestions>
                  <IconQtd>{item.questoesFechadas.length}</IconQtd>
                  <TextQtdQuestions>Questões</TextQtdQuestions>
                </ContainerNumberQuestions>
              </MetainfoContainer>
            </ListItem>
          )}
        />
 */
