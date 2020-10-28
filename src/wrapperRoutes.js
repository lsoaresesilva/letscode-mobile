import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import route from './routes';

export default () => {
  const [signed, setSigned] = useState(false);
  const loading = useSelector(state => state.auth.loading);
  const asdasd = useSelector(state => state.auth);
  const condition = useSelector(state => {
    if (state.auth.signed !== signed) {
      setSigned(state.auth.signed);
    }
  });
  // console.log(asdasd);
  useEffect(() => {
    setSigned(condition);
  }, [loading]);

  if (loading) {
    return (
      <View>
        <Text>Carregando</Text>
      </View>
    );
  }

  return route()(signed);
};
