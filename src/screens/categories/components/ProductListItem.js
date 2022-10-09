import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Colors } from "styles";
const screenWidth = Dimensions.get("screen").width;

export default function ProductListItem({ data, onPressItem }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onPressItem && onPressItem(data)}
      disabled={data?.status != "in_stock"}
      style={[
        styles.container,
        {
          backgroundColor:
            data?.status === "in_stock" ? "white" : "rgba(0,0,0,0.2)",
        },
      ]}
    >
      {data?.status != "in_stock" && (
        <View style={styles.outStockWrapper}>
          <Text style={{ color: "white" }}>Out of stock</Text>
        </View>
      )}
      {data?.promo_name && (
        <View style={styles.promoWrapper}>
          <Text style={{ fontWeight: "bold", color: "white" }}>
            {data?.promo_name}
          </Text>
        </View>
      )}

      {data?.is_promotion && (
        <View style={styles.promotionWrapper}>
          <Text style={{ fontWeight: "bold", color: "white" }}>
            {data?.percentage}%
          </Text>
        </View>
      )}
      <View style={{ alignItems: "center" }}>
        <Image
          source={{ uri: data?.product_image }}
          style={{ width: 100, height: 150 }}
        />
      </View>

      <Text style={{ marginVertical: 5 }}>{data.name}</Text>
      <Text style={{ textDecorationLine: "line-through", fontSize: 12 }}>
        {data?.list_price + 1500} KS
      </Text>
      <View style={styles.priceWrapper}>
        <Text style={{ fontWeight: "bold" }}>{data?.list_price} KS</Text>
        <FontAwesome name="shopping-bag" size={20} color={Colors.primary} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    borderRadius: 10,
    margin: 5,
    padding: 10,
    width: screenWidth / 2.13,
    overflow: "hidden",
  },
  outStockWrapper: {
    position: "absolute",
    top: 5,
    left: 0,
    backgroundColor: "red",
    width: 100,
    alignItems: "center",
    zIndex: 999,
    paddingVertical: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  promoWrapper: {
    position: "absolute",
    top: 5,
    right: 0,
    backgroundColor: Colors.primary,
    width: 100,
    alignItems: "center",
    zIndex: 999,
    paddingVertical: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  promotionWrapper: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: Colors.primary,
    alignItems: "center",
    zIndex: 999,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderBottomLeftRadius: 10,
  },
  priceWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
});
