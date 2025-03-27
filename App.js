import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

import Routes from "./src/routes";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { AuthProvider } from "./src/contexts/auth";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor="#f0f4ff" barStyle="dark-content" />
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
