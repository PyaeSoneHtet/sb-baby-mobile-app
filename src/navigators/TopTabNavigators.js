import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { CategoriesScreen, BrandsScreen, PromotionsScreen } from "screens";
import { Colors } from "styles";

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigators() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarIndicatorStyle: {
          backgroundColor: "white",
          height: 4,
        },
        tabBarStyle: {
          backgroundColor: Colors.primary,
        },
      }}
    >
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Brands" component={BrandsScreen} />
      <Tab.Screen name="Promotions" component={PromotionsScreen} />
    </Tab.Navigator>
  );
}
