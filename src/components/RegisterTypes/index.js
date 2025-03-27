import { RegisterContainer, RegisterTypeButton, RegisterLabel } from "./styles";

import { Feather } from "@expo/vector-icons";

import { useState } from "react";

export default function RegisterTypes({ type, sendTypeChanged }) {
  const [typeChecked, setTypeChecked] = useState(type);

  const changeType = (text) => {
    if (text === "receita") {
      setTypeChecked("receita");

      sendTypeChanged("receita");
    } else {
      setTypeChecked("despesa");

      sendTypeChanged("despesa");
    }
  };

  return (
    <RegisterContainer>
      <RegisterTypeButton
        checked={type === "receita" ? true : false}
        onPress={() => changeType("receita")}
      >
        <Feather name="arrow-up" size={25} color={"#121212"} />
        <RegisterLabel>Receita</RegisterLabel>
      </RegisterTypeButton>

      <RegisterTypeButton
        checked={type === "despesa" ? true : false}
        onPress={() => changeType("despesa")}
      >
        <Feather name="arrow-down" size={25} color={"#121212"} />
        <RegisterLabel>Despesa</RegisterLabel>
      </RegisterTypeButton>
    </RegisterContainer>
  );
}
