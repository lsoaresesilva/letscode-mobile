import styled from 'styled-components/native';
import { TouchableOpacity, BaseButton } from 'react-native-gesture-handler';

export const Container = styled(BaseButton)`
  width: 100%;
  font-size: 14px;
  flex-direction: row;
  margin: 10px 0px 10px 0px;
  border-radius: 3px;
  background: ${props => props.bgColor || '#ff3'};
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
  color: ${props =>
    props.bgColor === 'red' || props.bgColor === 'green' ? '#fff' : '#000'};
`;
