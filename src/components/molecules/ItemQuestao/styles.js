import styled from 'styled-components/native';
import { TouchableOpacity, BaseButton } from 'react-native-gesture-handler';

import { PRIMARY, SECONDARY, WHITE, SUCCESS } from '../../../styles/colors';
import { FONT_SIZE_18, FONT_SIZE_14 } from '../../../styles/typography';

export const ContainerComponente = styled.View``;

export const Container = styled.View`
  font-size: 14px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 20px 20px;
  margin: 6px 0px;
  border-radius: 3px;
`;
// border-left-color: ${props => (props.status ? 'red' : 'green')};
//
//
/**
 *   border-radius: 3px;

  border-left-width: 16px;
  border-right-color: #adb5bd;
  border-top-color: #adb5bd;
  border-bottom-color: #adb5bd;
  border-right-width: 1px;
  border-top-width: 1px;
  border-bottom-width: 1px;
 */
//
export const ButtonCTA = styled(BaseButton)`
  background: ${SECONDARY};
  border-radius: 3px;
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
`;

export const ContainerNumeroQuestao = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  width: 40px;
`;

export const Divisor = styled.View`
  width: 2px;
  height: 100%;
  background: #fff;
  margin-right: 20px;
`;

export const NumeroQuestao = styled.Text`
  font-size: 30px;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  padding: 0px 10px;
  padding-right: 14px;
`;

export const Title = styled.Text`
  font-size: ${FONT_SIZE_18};
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Subtitle = styled.Text`
  font-size: ${FONT_SIZE_14};
`;
