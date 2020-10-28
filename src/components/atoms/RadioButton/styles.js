import styled from 'styled-components/native';
import { PRIMARY } from '../../../styles/colors';

export const Container = styled.View`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  border-width: 2px;
  border-color: ${PRIMARY};
  align-items: center;
  justify-content: center;
  border-color: ${props =>
    props.bgColor === 'red' || props.bgColor === 'green' ? '#fff' : '#000'};
`;

export const Dot = styled.View`
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background-color: ${PRIMARY};
  background: ${props =>
    props.bgColor === 'red' || props.bgColor === 'green' ? '#fff' : '#000'};
`;
