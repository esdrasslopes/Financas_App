import { Background, Input, SubmitButton, SubmitText } from "./styles";

import { View, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";

import { useState } from "react";

import Header from "../../components/Header";

import RegisterTypes from "../../components/RegisterTypes";

import { api } from "../../services/api";

import { format } from "date-fns";

import { useNavigation } from "@react-navigation/native";

export default function New() {
  const navigation = useNavigation();

  const [labelInput, setLabelInput] = useState("");

  const [valueInput, setValueInput] = useState("");

  const [type, setType] = useState("receita");

  const handleSubmit = () => {
    Keyboard.dismiss();

    if (isNaN(parseFloat(valueInput)) || type === null) {
      alert("Preencha todos os campos!");
      return;
    }

    Alert.alert(
      "Confirmando dados",
      `Tipo: ${type} - Valor: ${parseFloat(valueInput)}`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Continuar",
          onPress: () => handleAdd(),
        },
      ]
    );
  };

  const handleAdd = async () => {
    Keyboard.dismiss();

    await api.post("/receive", {
      description: labelInput,
      value: parseFloat(valueInput),
      type: type,
      date: format(new Date(), "dd/MM/yyyy"),
    });

    setLabelInput("");

    setValueInput("");

    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header title="Registrando" />
        <View style={{ marginTop: 14, alignItems: "center" }}>
          <Input
            placeholder="Descrição desse registro"
            value={labelInput}
            onChangeText={(text) => setLabelInput(text)}
          />
          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={(text) => setValueInput(text)}
          />

          <RegisterTypes
            type={type}
            sendTypeChanged={(item) => setType(item)}
          />

          <SubmitButton onPress={handleSubmit}>
            <SubmitText>Registar</SubmitText>
          </SubmitButton>
        </View>
      </Background>
    </TouchableWithoutFeedback>
  );
}
