import styled from 'styled-components/native';

export const Container = styled.View`
  height: 50px;
  padding: 0 4px;
  border: 1px solid #ccd1d9;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  background: #fff;
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: '#ccd1d9',
  textAlignVertical: 'top',
})`
  background: #fff;
  font-size: 15px;
  margin-left: 10px;
  margin: 50px;
  color: #222933;
`;
