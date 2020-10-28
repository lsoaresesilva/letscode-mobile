import styled from 'styled-components/native';

export const Container = styled.View`
  height: 56px;
  flex-direction: column;
  align-items: center;
  background: ${props => props.backgroundInput || '#fff'};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-color: ${props => props.lineBottomColor};
  border-bottom-width: ${props => props.lineBottomWeight};
  padding: 0px 12px;
  justify-content: center;
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: '#ccd1d9',
  textAlignVertical: 'top',
})``;
