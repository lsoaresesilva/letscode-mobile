import styled from 'styled-components/native';
import { FlatList, TouchableOpacity } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';
import { PRIMARY, SECONDARY, WHITE, SUCCESS } from '../../styles/colors';

export const Container = styled.View`
  height: 100%;
  position: relative;
  background: ${PRIMARY};
`;

export const HeaderContainer = styled.View`
  background: #341c94;
`;

// border-bottom-left-radius: 40px;
// border-bottom-right-radius: 40px;

export const Header = styled.View`
  flex-direction: row;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding: 0px 20px;
`;

export const HeaderItemTitle = styled.Text`
  font-size: 20px;
  flex: 1;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`;

export const HeaderItemAction = styled(TouchableOpacity)`
  padding: 6px 8px;
`;

export const HeaderItem = styled.Text`
  color: #fff;
`;

export const ListView = styled(FlatList)`
  height: 100%;
  z-index: 10;
  padding: 0px 25px;
  margin: 0px 0px;
`;

export const ListItem = styled(BaseButton)`
  background: #fff;
  width: 100%;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 20px 0px;
  flex-direction: row;
`;

export const IconSequence = styled.View`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  background: #ff455c;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const IconSequenceNumber = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const MetainfoContainer = styled.View`
  flex: 1;
  margin: 0px 15px;
`;

export const MetainfoTitle = styled.Text`
  color: #2d2d2d;
  font-weight: bold;
  font-size: 20px;
`;

export const ContainerNumberQuestions = styled.View`
  flex: 1;
  height: 20px;
  margin-top: 5px;
  flex-direction: row;
`;

export const TextQtdQuestions = styled.Text`
  color: #565656;
`;
