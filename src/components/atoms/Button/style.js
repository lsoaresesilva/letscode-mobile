import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';
import { FONT_SIZE_16 } from '../../../styles/typography';
import { PRIMARY, WHITE } from '../../../styles/colors';

export const Container = styled(BaseButton)`
  height: 50px;
  border-radius: 3px;
  background: ${props => props.backgroundColor || PRIMARY};
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${props => props.textColor || WHITE};
  font-weight: bold;
  font-size: ${`${FONT_SIZE_16}px`};
`;
