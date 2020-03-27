import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  font-size: 14px;
  flex-direction: row;
  border: 2px solid ${props => props.cor};
  border: 2px solid ${props => (props.correct ? 'green' : props.cor)};

  margin: 10px 0px;
  border-radius: 3px;
`;

export const RadioContainer = styled.View`
  width: 15%;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const AlternativeText = styled.Text`
  width: 85%;
  padding: 10px 10px 10px 0px;
`;
