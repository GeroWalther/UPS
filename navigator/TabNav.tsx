import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomerScreen from "../screens/CustomerScreen";
import OrdersScreen from "../screens/OrdersScreen";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNav = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#59C1CC",
        tabBarInactiveTintColor: "grey",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Customers") {
            return (
              <Icon
                name="user"
                type="entypo"
                color={focused ? "#59C1CC" : "grey"}
              />
            );
          } else if (route.name === "Orders") {
            return (
              <Icon
                name="box"
                type="entypo"
                color={focused ? "#EB6A7C" : "grey"}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Customers" component={CustomerScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
};

export default TabNav;
