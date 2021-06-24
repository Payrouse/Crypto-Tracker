import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import CoinsStack from "./src/components/coins/CoinsStack";

const  App = () => {
  return (
    <NavigationContainer>
      <CoinsStack/>
    </NavigationContainer>
  );
}


export default App;
