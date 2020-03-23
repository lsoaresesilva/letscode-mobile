import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';
import { PRIMARY } from '../../styles/colors';

export const Container = styled.ScrollView`
  background: #341c94;
  background: #f2f2f2;
  margin: 25px 25px 0px 25px;
  flex: 1;
`;

export const ContainerQuestion = styled.View`
  margin-bottom: 20px;
`;

export const QuestionTitle = styled.Text`
  font-size: 24px;
`;

export const QuestionStatement = styled.Text`
  font-size: 14px;
  margin-top: 16px;
`;

export const AlternativesContainer = styled.View`
  flex: 1;
`;

export const ButtonSubmit = styled(BaseButton)`
  width: 100%;
  height: 60px;
  background: ${PRIMARY};
  align-items: center;
  justify-content: center;
`;
