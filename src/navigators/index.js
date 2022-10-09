import "react-native-gesture-handler";
import * as React from "react";
import { TouchableOpacity } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigators from "./BottomTabNavigators";

import { CategoriesListScreen, ItemDetailScreen } from "screens";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();

function RootNavigator(props) {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;
        if (previousRouteName !== currentRouteName) {
        }
        routeNameRef.current = currentRouteName;
      }}
    >
      <Stack.Navigator
        initialRouteName="BottomTab"
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen name="BottomTab" component={BottomTabNavigators} />
        <Stack.Screen
          name="CategoriesList"
          component={CategoriesListScreen}
          options={{
            headerShown: true,
            headerTitleAlign: "center",
            headerRight: () => (
              <TouchableOpacity activeOpacity={0.7} style={{ padding: 10 }}>
                <Feather name="search" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="ItemDetail"
          component={ItemDetailScreen}
          options={{
            headerShown: true,
            headerTitleAlign: "center",
            headerRight: () => (
              <TouchableOpacity activeOpacity={0.7} style={{ padding: 10 }}>
                <Feather name="search" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
