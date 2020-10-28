/* eslint-disable no-unused-expressions */
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, Alert, Dimensions, TouchableOpacity } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';
import { getAllSubject } from '../../store/modules/subject/actions';
import { Button } from 'react-native';
import { signOut } from '../../store/modules/auth/actions';
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
import DraggableFlatList from "react-native-draggable-flatlist";
export default ({ navigation }) => {
  const dispatch = useDispatch();
  const [loader, setload] = useState(false);

  const handleLogin = () => {
    dispatch(signOut());
  };
  const cardRef = useRef(null);

  const loading = useSelector(state => state.subject.loading);
  const failed = useSelector(state => state.subject.failed);
  const subjects: [Assunto] = useSelector(
    state => state.subject.subjects.subjects
  );
  const usuario = useSelector(state => state.auth.user);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [arr, setArr] = useState([...Array(20)].map((d, index) => ({
    key: `item-${index}`, // For example only -- don't use index as your key!
    label: `Lorem Ipsum Dolor Sit Amet ${index+1}`,
    backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index *
      5}, ${132})`
  })));



  const renderItem = ({ item, index, drag, isActive }) => {
    return (
      <TouchableOpacity
        style={{
          height: 100,
          backgroundColor: isActive ? "#ffffffb0" : 'rgb(255, 255, 255)',
          alignItems: "flex-start",
          justifyContent: "flex-start",
          margin: 20,
          marginBottom: 10,
          marginTop: 0,
          elevation: 2,
          padding: 15,
          borderRadius: 4
        }}
        onLongPress={drag}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "#4f4f4f",
            fontSize: 17
          }}
        >
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };


  useEffect(() => {
    //Alert.alert('oi');
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

  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(244, 245, 247)' }}>
      <Button title="sign out" onPress={handleLogin} />
      <DraggableFlatList
        contentContainerStyle={{paddingTop: 20, paddingBottom: 20}}
        data={arr}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.key}`}
        onDragEnd={({ data }) => setArr(data)}
      />
    </View>
  );

};

/*import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-native';
import { signOut } from '../../store/modules/auth/actions';

import { Container } from '../Login/styles';

const App = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(signOut());
  };

  return (
    <Container>
      <Button title="sign out" onPress={handleLogin} />
    </Container>
  );
};

export default App;
*/
