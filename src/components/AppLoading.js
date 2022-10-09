import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

import { Colors } from "styles";

export default function AppLoading() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size={"large"} color={Colors.primary} />
    </View>
  );
}
