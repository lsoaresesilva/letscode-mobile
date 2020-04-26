import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  Alert,
  View,
  Dimensions,
  Animated as AnimatedNative,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Animated, { Value, Easing } from 'react-native-reanimated';

import { signInRequest, signOut } from '../../store/modules/auth/actions';
import { SCALE_8, SCALE_32 } from '../../styles/spacing';

import {
  Form,
  Container,
  ContainerForm,
  Footer,
  InputText,
  ButtonLogin,
  LogoText,
  ContentFooter,
  CreateAccountLink,
} from './styles';

import ButtonN from '../../components/atoms/Button';

const App = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [waitingRequest, setWaitingRequest] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const loadingRequest = useSelector(state => state.auth.loading);

  const heightAnimated = new Value(90);
  const paddingAnimated = new Value(SCALE_32);
  const heightButtonShow = new Value(60);

  const handleLogin = () => {
    dispatch(signInRequest(email, password));
  };

  useEffect(() => {
    if (loadingRequest) {
      setWaitingRequest(true);
    } else {
      setWaitingRequest(false);
    }
  }, [loadingRequest]);

  const openRegisterAccout = () => {
    AnimatedNative.sequence([
      AnimatedNative.parallel([
        Animated.timing(heightAnimated, {
          toValue: Dimensions.get('screen').height,
          duration: 600,
          easing: Easing.ease,
        }),
        Animated.timing(paddingAnimated, {
          toValue: 0,
          duration: 800,
          easing: Easing.linear,
        }),
        Animated.timing(heightButtonShow, {
          toValue: 0,
          duration: 200,
          easing: Easing.linear,
        }),
      ]),
    ]).start();
  };

  return (
    <Container>
      <StatusBar hidden />
      <ContainerForm>
        <Form>
          <LogoText>32BITS</LogoText>
          <InputText
            style={{ marginBottom: SCALE_8 }}
            icon="mail-outline"
            keyboardType="email-address"
            placeholder="Digite seu e-mail"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            value={email}
            onChangeText={setEmail}
          />

          <InputText
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="send"
            onSubmitEditing={handleLogin}
            value={password}
            onChangeText={setPassword}
          />

          <ButtonLogin
            loading={waitingRequest}
            onPress={() => {
              handleLogin();
            }}
          >
            ENTRAR
          </ButtonLogin>
        </Form>
      </ContainerForm>
      <Footer
        style={{
          height: heightAnimated,
          padding: paddingAnimated,
        }}
      >
        <ContentFooter
          style={{
            height: heightButtonShow,
          }}
        >
          <CreateAccountLink onPress={openRegisterAccout}>
            crie sua conta
          </CreateAccountLink>
        </ContentFooter>
      </Footer>
    </Container>
  );
};

export default App;
