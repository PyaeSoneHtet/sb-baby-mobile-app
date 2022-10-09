import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as cartActions } from "ducks/Cart";

import { MaterialIcons } from "@expo/vector-icons";

function CartListItem({ data, cart, deleteProduct, updateProduct }) {
  const dbProduct = cart.filter((_product) => _product.id === data.id)[0];

  const decreaseQty = () => {
    let _product = dbProduct;
    if (_product.qty != 1) {
      _product.qty = dbProduct.qty - 1;
      updateProduct(_product);
    }
  };

  const increaseQty = () => {
    let _product = dbProduct;
    _product.qty = dbProduct.qty + 1;
    updateProduct(_product);
  };
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: data?.url_link }}
        style={{ width: 80, height: 80, borderRadius: 5 }}
      />

      <View style={{ marginLeft: 10, flex: 1 }}>
        <View>
          <Text>{data?.name}</Text>
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>
            {data?.list_price} KS
          </Text>
        </View>
        <View style={styles.qtyWrapper}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => decreaseQty()}
            style={styles.qty}
          >
            <Text>-</Text>
          </TouchableOpacity>

          <Text>{dbProduct.qty}</Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => increaseQty()}
            style={styles.qty}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => deleteProduct(data)}
        style={{ position: "absolute", right: 10, top: 10 }}
      >
        <MaterialIcons name="delete-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.carts,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...cartActions,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(CartListItem);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    flexDirection: "row",
  },
  qtyWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 20,
    alignSelf: "flex-end",
  },
  qty: {
    padding: 10,
    paddingHorizontal: 20,
  },
});
