import { Container, Type, IconView, TextType, ValorText } from "./styles";

import { Feather } from "@expo/vector-icons";

import { Alert, TouchableWithoutFeedback } from "react-native";

export default function HistoryList({ data, deleteItem }) {
  const handleDeleteItem = () => {
    Alert.alert("Atenção", "Você certeza que deseja deletar esse registro?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Continuar",
        onPress: () => deleteItem(data.id),
      },
    ]);
  };

  return (
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
      <Container>
        <Type>
          <IconView type={data.type}>
            <Feather
              name={data.type === "despesa" ? "arrow-down" : "arrow-up"}
              size={20}
              color="#fff"
            />
            <TextType>{data.type}</TextType>
          </IconView>
        </Type>
        <ValorText>{data.value}</ValorText>
      </Container>
    </TouchableWithoutFeedback>
  );
}
