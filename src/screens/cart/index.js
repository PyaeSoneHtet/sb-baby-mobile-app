import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as cartActions } from "ducks/Cart";

import CartListItem from "./components/CartListItem";
import { Colors } from "styles";
import { SuccessModal, NoData } from "components";

function Cart({ navigation, cart, clearProduct }) {
  const [total, setTotal] = useState(0);
  const [isOpenedSuccessModal, setIsOpenedSuccessModal] = useState(false);

  useEffect(() => {
    let _total = 0;
    cart.length > 0 &&
      cart.forEach((_product) => {
        _total = _product.qty * _product.list_price + _total;
      });
    setTotal(_total);
  });

  const onPressCheckOut = () => {
    try {
      clearProduct();
      setIsOpenedSuccessModal(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      {cart.length === 0 ? (
        <NoData label={"There is no product in cart!"} />
      ) : (
        <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
          {cart.map((data, index) => {
            return <CartListItem key={index} data={data} />;
          })}
        </ScrollView>
      )}

      <View style={styles.wrapper}>
        <View style={styles.totalWrapper}>
          <Text style={{ fontWeight: "bold" }}>Total</Text>
          <Text style={{ fontWeight: "bold" }}>{total ? total : "0"} KS</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          disabled={cart.length === 0}
          onPress={() => onPressCheckOut()}
          style={[
            styles.checkOutWrapper,
            {
              backgroundColor:
                cart.length === 0 ? "rgba(0,0,0,0.2)" : Colors.primary,
            },
          ]}
        >
          <Text style={{ color: "white" }}>Check Out</Text>
        </TouchableOpacity>
      </View>
      <SuccessModal
        isVisible={isOpenedSuccessModal}
        onPressContinue={() => {
          setIsOpenedSuccessModal(false);
          navigation.navigate("Home");
        }}
      />
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
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    padding: 10,
    backgroundColor: "white",
  },
  totalWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  checkOutWrapper: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
