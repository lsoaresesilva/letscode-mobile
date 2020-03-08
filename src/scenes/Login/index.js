import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';
import { SCALE_8 } from '../../styles/spacing';

import {
  Form,
  Container,
  ContainerForm,
  Footer,
  InputText,
  ButtonLogin,
  LogoText,
  CreateAccountLink,
} from './styles';

const App = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [waitingRequest, setWaitingRequest] = useState(false);
  const loadingRequest = useSelector(state => state.auth.loading);

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

          <ButtonLogin loading={waitingRequest} onPress={handleLogin}>
            ENTRAR
          </ButtonLogin>
        </Form>
      </ContainerForm>

      <Footer>
        <CreateAccountLink>crie sua conta</CreateAccountLink>
      </Footer>
    </Container>
  );
};

export default App;
