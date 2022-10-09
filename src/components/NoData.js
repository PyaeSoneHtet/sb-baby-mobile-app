import React from "react";
import { View, Text } from "react-native";

export default function NoData({ label }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{label ? label : "There is no data."}</Text>
    </View>
  );
}
