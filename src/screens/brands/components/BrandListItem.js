import React from "react";
import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";

const screenWidth = Dimensions.get("screen").width;

export default function BrandListItem({ data, onPressProduct }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onPressProduct && onPressProduct(data)}
      style={{
        margin: 5,
        backgroundColor: "white",
        width: screenWidth / 3.5,
        height: screenWidth / 3,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
      }}
    >
      <Image
        source={{ uri: data?.brand_image }}
        style={{ width: 60, height: 60, marginBottom: 5 }}
      />
      <Text style={{ fontSize: 12 }}>{data?.brand_name}</Text>
    </TouchableOpacity>
  );
}
