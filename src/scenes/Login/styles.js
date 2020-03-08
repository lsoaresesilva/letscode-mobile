import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';

import { SCALE_32, SCALE_64, SCALE_16 } from '../../styles/spacing';
import { GRADIENT_PRIMARY, WHITE, SECONDARY } from '../../styles/colors';
import { FONT_SIZE_20 } from '../../styles/typography';

export const Container = styled(LinearGradient).attrs({
  colors: GRADIENT_PRIMARY,
})`
  flex: 1;
  padding: ${`${SCALE_32}px`};
  justify-content: center;
`;

export const Form = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContainerForm = styled.View`
  height: 80%;
`;

export const Footer = styled.View`
  height: 20%;
  align-items: center;
  justify-content: flex-end;
`;

export const LogoText = styled.Text`
  font-size: 40px;
  color: #fff;
  font-weight: bold;
  margin-bottom: ${`${SCALE_64}px`};
`;

export const InputText = styled(Input)`
  width: 100%;
`;

export const ButtonLogin = styled(Button).attrs({
  background: SECONDARY,
  textColor: WHITE,
})`
  width: 100%;
  margin-top: ${`${SCALE_16}px`};
`;

export const CreateAccountLink = styled.Text`
  color: ${WHITE};
  font-size: ${`${FONT_SIZE_20}px`};
`;
