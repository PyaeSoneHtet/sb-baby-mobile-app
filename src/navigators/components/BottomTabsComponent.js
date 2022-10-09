import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { AntDesign, Octicons } from "@expo/vector-icons";
import { Colors } from "styles";

function BottomTabsComponents({ state, descriptors, navigation, cart }) {
  return (
    <View
      style={{ flexDirection: "row", backgroundColor: "white", elevation: 7 }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const icon =
          label === "Home" ? (
            <AntDesign
              name="home"
              size={24}
              color={isFocused ? "white" : "black"}
            />
          ) : label === "Shopping Cart" ? (
            <AntDesign
              name="shoppingcart"
              size={24}
              color={isFocused ? "white" : "black"}
            />
          ) : (
            <Octicons
              name="people"
              size={24}
              color={isFocused ? "white" : "black"}
            />
          );

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1, alignItems: "center", padding: 15 }}
          >
            <View
              style={[
                styles.wrapper,
                {
                  backgroundColor: isFocused ? Colors.primary : "white",
                },
              ]}
            >
              {label === "Shopping Cart" && cart.length != 0 && (
                <View style={styles.notiWrapper}>
                  <Text style={{ color: "white" }}>{cart.length}</Text>
                </View>
              )}
              <Text>{icon}</Text>
            </View>
            <Text style={{ color: "black" }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.carts,
  };
};
export default connect(mapStateToProps, null)(BottomTabsComponents);

const styles = StyleSheet.create({
  wrapper: {
    padding: 5,
    borderRadius: 5,
  },
  notiWrapper: {
    backgroundColor: Colors.primary,
    width: 20,
    height: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: -3,
    top: -3,
    elevation: 7,
    zIndex: 999,
  },
});
