import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import Animated from 'react-native-reanimated';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';

import { SCALE_32, SCALE_64, SCALE_16, SCALE_8 } from '../../styles/spacing';
import {
  GRADIENT_PRIMARY,
  WHITE,
  SECONDARY,
  PRIMARY,
} from '../../styles/colors';
import { FONT_SIZE_20 } from '../../styles/typography';

/*
export const Container = styled(LinearGradient).attrs({
  colors: GRADIENT_PRIMARY,
})`
  flex: 1;
  padding: ${`${SCALE_32}px`};
  justify-content: center;
`;
*/

export const Container = styled.View`
  flex: 1;
  background: ${PRIMARY};
`;

export const Form = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContainerForm = styled.View`
  height: 80%;
  padding: ${`${SCALE_32}px`};
`;

export const Footer = styled(Animated.View)`
  height: 90px;
  align-items: center;
  justify-content: flex-end;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1000;

  background: ${PRIMARY};
  padding-top: 0px;
`;
// padding: ${`${SCALE_32}px`};

export const ContentFooter = styled(Animated.View)`
  width: 100%;
  background: #00000033;
  height: 100%;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const LogoText = styled.Text`
  font-size: 40px;
  color: #fff;
  font-weight: bold;
  margin-bottom: ${`${SCALE_64}px`};
`;

export const InputText = styled(Input)`
  width: 100%;
  margin: ${`${SCALE_8}px`};
`;

export const ButtonLogin = styled(Button).attrs({
  background: SECONDARY,
  textColor: WHITE,
})`
  width: 100%;
  margin-top: ${`${SCALE_16}px`};
`;

export const CreateAccountLink = styled(Button).attrs(() => ({
  textColor: '#fff',
}))`
  color: ${WHITE};
  height: 100%;
  opacity: 1;
  font-size: ${`${FONT_SIZE_20}px`};
`;
