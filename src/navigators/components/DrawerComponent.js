import React from "react";
import { View, Text, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

import { Colors } from "styles";

export default function DrawerComponent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: Colors.primary }}
    >
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={require("assets/icons/logo.png")}
          style={{ width: 180, height: 80, borderRadius: 10, marginBottom: 10 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          SB Baby Shop
        </Text>
      </View>
    </DrawerContentScrollView>
  );
}
