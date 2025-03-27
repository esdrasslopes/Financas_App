import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #f0f3ff;
  border-radius: 4px;
  margin: 0 14px 14px;
  padding: 12px;
`;

export const Type = styled.View`
  flex-direction: row;
`;

export const IconView = styled.View`
  flex-direction: row;
  background-color: ${(props) =>
    props.type === "despesa" ? "#c62c36" : "#049301"};
  padding: 4px 8px;
  border-radius: 4px;
  margin-bottom: 4px;
`;

export const TextType = styled.Text`
  color: #fff;
  font-size: 16px;
  font-style: italic;
`;

export const ValorText = styled.Text`
  color: #121212;
  font-size: 22px;
`;
