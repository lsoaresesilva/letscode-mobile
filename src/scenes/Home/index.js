import React from 'react';
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
