import styled from 'styled-components/native';

export const ContainerSearch = styled.View`
  background-color: #565656;
  flex-direction: row;
  align-items: center;
`;

export const SearchBar = styled.TextInput.attrs({
  placeholderTextColor: '#ccc',
})`
  padding: 20px;
  font-size: 16px;
  color: white;
`;

export const ContainerResult = styled.View`
  background-color: #161616;
  height: 100%;
`;

export const MovieContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #565656;
  margin-top: 15px;
  margin-right: 20px;
  margin-left: 20px;
  border-radius: 4px;
  padding: 10px;
`;

export const MovieTitle = styled.Text`
  color: #fff;
  font-size: 18px;
`;
