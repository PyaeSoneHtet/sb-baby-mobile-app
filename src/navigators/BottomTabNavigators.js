import "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerNavigator from "navigators/DrawerNavigators";

import BottomTabsComponents from "./components/BottomTabsComponent";
import { AntDesign, Feather } from "@expo/vector-icons";
import { CartScreen, AccountScreen } from "screens";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigators({ navigation }) {
  const headerLeftComponent = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate("Home")}
        style={{ padding: 10 }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
    );
  };

  const headerRightComponent = () => {
    return (
      <TouchableOpacity activeOpacity={0.7} style={{ padding: 10 }}>
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <BottomTabsComponents {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Shopping Cart",
          headerTitleAlign: "center",
          headerLeft: () => headerLeftComponent(),
          headerRight: () => headerRightComponent(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => headerLeftComponent(),
          headerRight: () => headerRightComponent(),
        }}
      />
    </Tab.Navigator>
  );
}
