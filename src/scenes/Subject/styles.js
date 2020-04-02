import styled from 'styled-components/native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';
import { PRIMARY, SECONDARY, WHITE } from '../../styles/colors';
import { SCALE_32 } from '../../styles/spacing';

export const Container = styled.View`
  height: 100%;
  background: ${PRIMARY};
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.View`
  background: ${WHITE};
  height: 80px;
`;

export const Header = styled.View`
  margin: 25px;
  flex-direction: row;
  height: 60px;
  align-items: flex-start;
  justify-content: space-between;
`;

export const HeaderItemTitle = styled.Text`
  font-size: 20px;
  height: 100%;
  flex: 1;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  text-align: left;
  color: ${PRIMARY};
`;

export const HeaderItemAction = styled(TouchableOpacity)`
  padding: 6px 8px;
`;

export const HeaderItem = styled.Text`
  color: ${PRIMARY};
`;

export const ListView = styled(FlatList)`
  height: 100%;
`;
export const ScrollListView = styled(ScrollView)`
  height: 100%;
  left: 1px;
  padding: 0px 25px;
`;
// height: ${Dimensions.get('window').height - 200};
export const ListItem = styled.View`
  background: ${WHITE};
  width: ${Dimensions.get('window').width - 90};

  border-radius: 8px;
  margin: 0px 32px 0px 0px;
  flex-direction: column;
  align-items: center;
`;

export const IconSequence = styled.View`
  width: 50px;
  height: 50px;
  background: ${SECONDARY};
  border-radius: 25px;

  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  align-items: center;
  justify-content: center;
`;

export const IconSequenceNumber = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const MetainfoContainer = styled.View`
  margin: 0px 15px;
  width: 100%;
  padding: 30px;
  padding-top: 0px;
  align-items: center;
  justify-content: center;
`;

export const MetainfoTitle = styled.Text`
  color: #2d2d2d;
  font-weight: bold;
  font-size: 25px;
  margin-top: 20px;
`;

export const ContainerNumberQuestions = styled.View`
  flex: 1;
  height: 20px;
  margin-top: 5px;
  flex-direction: row;
`;

export const IconQtd = styled.Text`
  width: 30px;
  height: 20px;
  background: #4893ff;
  border-radius: 5px;
  margin-right: 6px;
  text-align: center;
  color: #fff;
  display: flex;
  padding: 2px 0px;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;

export const TextQtdQuestions = styled.Text`
  color: #565656;
`;
