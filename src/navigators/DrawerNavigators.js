import * as React from "react";
import { TouchableOpacity, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import TopTabNavigators from "./TopTabNavigators";
import DrawerComponent from "./components/DrawerComponent";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator
      initialRouteName="TopTab"
      drawerContent={(props) => <DrawerComponent {...props} />}
    >
      <Drawer.Screen
        name="TopTab"
        component={TopTabNavigators}
        options={{
          title: "Home",
          headerTitle: () => (
            <Image
              source={require("assets/icons/logo.png")}
              style={{ width: 120, height: 50 }}
            />
          ),
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.7} style={{ padding: 10 }}>
              <Feather name="search" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
