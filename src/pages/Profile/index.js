import {
  Container,
  Message,
  Name,
  NewLink,
  NewText,
  LogoutButton,
  LogoutText,
} from "./styles";

import Header from "../../components/Header";

import { View } from "react-native";

import { useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const { user, signOut } = useContext(AuthContext);

  const navigation = useNavigation();

  return (
    <Container>
      <View style={{ alignItems: "flex-start", width: "100%" }}>
        <Header title="Meu perfil" />
      </View>
      <Message>Hey, bem vindo de volta!</Message>
      <Name numberOfLines={1}>{user && user.name}</Name>

      <NewLink onPress={() => navigation.navigate("Registrar")}>
        <NewText>Fazer registro</NewText>
      </NewLink>

      <LogoutButton onPress={() => signOut()}>
        <LogoutText>Sair</LogoutText>
      </LogoutButton>
    </Container>
  );
}
