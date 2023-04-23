import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNav from "./TabNav";
import ModalScreen from "../screens/ModalScreen";

export type RootStackParamList = {
  Main: undefined;
  MyModal: { userId: string; name: string };
  Order: { order: any };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNav = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNav} />
      </RootStack.Group>
      <RootStack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <RootStack.Screen
          options={{ headerShown: false }}
          name="MyModal"
          component={ModalScreen}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNav;
