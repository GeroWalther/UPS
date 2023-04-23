import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useTailwind } from "tailwind-rn/dist";
import {
  useNavigation,
  useRoute,
  CompositeNavigationProp,
  RouteProp,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../navigator/RootNav";
import { TabStackParamList } from "../navigator/TabNav";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import useCustomerOrders from "../hooks/useCustomerOrders";

type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "MyModal">
>;
type ModalScreenRouteProp = RouteProp<RootStackParamList, "MyModal">;

const ModalScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<ModalScreenNavigationProp>();

  const {
    params: { name, userId },
  } = useRoute<ModalScreenRouteProp>();

  const { loading, error, orders } = useCustomerOrders(userId);

  return (
    <View>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={tw("absolute right-5 top-5 z-10")}
      >
        <Icon name="closecircle" type="antdesign" />
      </TouchableOpacity>
      <View>
        <View>
          <Text>{name}</Text>
          <Text>deliveries</Text>
        </View>
      </View>
    </View>
  );
};

export default ModalScreen;
