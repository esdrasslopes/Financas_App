import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #f0f4ff;
  align-items: center;
`;

export const Message = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 24px;
`;

export const Name = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  margin-top: 8px;
  padding: 0 14px;
  color: #121212;
`;

export const NewLink = styled.TouchableOpacity`
  background-color: #3d3bdf;
  width: 90%;
  height: 45px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
`;

export const NewText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const LogoutButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 45px;
  border-radius: 8px;
  border: 1px solid #c62c36;
`;

export const LogoutText = styled.Text`
  color: #121212;
  font-weight: bold;
  font-size: 18px;
`;
