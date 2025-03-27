import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/auth";

import { api } from "../../services/api";

import { format } from "date-fns";

import { useIsFocused } from "@react-navigation/native";

import Header from "../../components/Header";

import BalanceItem from "../../components/BalanceItem";

import { Background, ListBalance, Area, Title, List } from "./styles";

import { TouchableOpacity, Modal } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import HistoryList from "../../components/HistoryList";

import CalendarModal from "../../components/CalendarModal";

export default function Home() {
  const isFocused = useIsFocused();

  const [listBalance, setListBalance] = useState([]);

  const [dateMovements, setDateMovements] = useState(new Date());

  const [movements, setMovements] = useState([]);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    let isActive = true;

    const getMovements = async () => {
      let date = new Date(dateMovements);

      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;

      let dateFormated = format(onlyDate, "dd/MM/yyyy");

      const receives = await api.get("/receives", {
        params: {
          date: dateFormated,
        },
      });

      const balance = await api.get("/balance", {
        params: {
          date: dateFormated,
        },
      });

      if (isActive) {
        setListBalance(balance.data);

        setMovements(receives.data);
      }
    };

    getMovements();

    return () => (isActive = false);
  }, [isFocused, dateMovements]);

  const handleDelete = async (id) => {
    try {
      await api.delete("/receives/delete", {
        params: {
          item_id: id,
        },
      });

      setDateMovements(new Date());
    } catch (error) {
      console.log(error);
    }
  };

  const filterDateMovements = (dateSelected) => {
    setDateMovements(dateSelected);
  };

  return (
    <Background>
      <Header title="Minhas movimentações" />

      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.tag}
        renderItem={({ item }) => <BalanceItem data={item} />}
      />

      <Area>
        <TouchableOpacity
          style={{ alignItems: "baseline" }}
          onPress={() => setModal(true)}
        >
          <MaterialIcons name="event" color="#121212" size={27} />
        </TouchableOpacity>
        <Title>Últimas movimentações</Title>
      </Area>

      <List
        data={movements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HistoryList data={item} deleteItem={handleDelete} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Modal visible={modal} animationType="fade" transparent={true}>
        <CalendarModal
          setVisible={() => setModal(false)}
          handleFilter={filterDateMovements}
        />
      </Modal>
    </Background>
  );
}
