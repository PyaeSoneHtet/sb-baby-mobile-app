import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ReactNativeModal from "react-native-modal";

import { Colors } from "styles";
import { FontAwesome5 } from "@expo/vector-icons";

export default function SuccessModal({ isVisible, onPressContinue }) {
  return (
    <ReactNativeModal
      isVisible={isVisible}
      style={{
        flex: 1,
        margin: 0,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <View style={styles.wrapper}>
        <View style={styles.successIconWrapper}>
          <FontAwesome5 name="check" size={24} color="white" />
        </View>

        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Congrats</Text>
        <Text style={{ marginVertical: 15, textAlign: "center" }}>
          Your order ID-xxxxx was placed successfully.{"\n"}Stay turned because
          your items will be {"\n"} shipped shortly.
        </Text>
        <TouchableOpacity
          onPress={() => onPressContinue && onPressContinue()}
          activeOpacity={0.7}
          style={styles.continueBtn}
        >
          <Text style={{ color: "white" }}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    </ReactNativeModal>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "90%",
    height: 300,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  successIconWrapper: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 50,
    marginBottom: 15,
  },

  continueBtn: {
    padding: 10,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 40,
  },
});
