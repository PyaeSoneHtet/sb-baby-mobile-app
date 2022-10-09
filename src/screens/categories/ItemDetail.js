import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as cartActions } from "ducks/Cart";

import { Entypo } from "@expo/vector-icons";
import { Colors } from "styles";
import ProductApi from "api/Product";

function ItemDetail({ navigation, route, cart, addNewProduct }) {
  const [product, setProduct] = useState({});
  const _product = route.params.product;

  const productApi = new ProductApi();

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    try {
      const _items = await productApi.getProductDetail({
        id: _product.product_id,
      });
      setProduct(_items.data.data[0]);
    } catch (error) {
      console.log("Failed to getting in product detail - ", error);
    }
  };

  const onPresCartBtn = () => {
    try {
      let _product = product;
      _product.qty = 1;
      addNewProduct(_product);
      navigation.navigate("Cart");
    } catch (error) {
      console.log("Failed to save - ", error);
    }
  };

  if (!product) return null;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: product?.url_link }}
          style={{ width: 200, height: 200 }}
        />

        <View style={{ position: "absolute", bottom: 10, right: 10 }}>
          <TouchableOpacity activeOpacity={0.7} style={{}}>
            <Image
              source={{ uri: product?.url_link }}
              style={{ width: 50, height: 50 }}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={{ marginVertical: 5 }}>
            <Image
              source={{ uri: product?.url_link }}
              style={{ width: 50, height: 50 }}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={{}}>
            <Image
              source={{ uri: product?.url_link }}
              style={{ width: 50, height: 50 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
        }}
      >
        <View style={styles.secWrapper}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "bold" }}>{product?.name}</Text>
            <Entypo name="heart-outlined" size={24} color={Colors.primary} />
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ textDecorationLine: "line-through", marginRight: 10 }}
            >
              {product?.list_price + 1500} KS
            </Text>
            <Text style={{ marginRight: 10, fontWeight: "bold" }}>
              {product?.list_price} KS
            </Text>

            <View
              style={{
                backgroundColor: Colors.primary,
                marginRight: 10,
                paddingHorizontal: 5,
              }}
            >
              <Text style={{ color: "white" }}>-{product?.percentage}%</Text>
            </View>

            <View
              style={{ backgroundColor: Colors.primary, paddingHorizontal: 5 }}
            >
              <Text style={{ color: "white" }}>မရှိပါ</Text>
            </View>
          </View>
        </View>

        <View style={styles.promotionWrapper}>
          <Text style={{ fontWeight: "bold", marginBottom: 20 }}>
            Promotions
          </Text>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:60}}
          >
            {Array.apply(null, { length: 5 }).map((e, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={{ flexDirection: "row", marginTop: 10 }}
                >
                  <Image
                    source={{ uri: product?.url_link }}
                    style={{ width: 80, height: 80, borderRadius: 5 }}
                  />
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
                      Promotion Title
                    </Text>
                    <Text style={{ flex: 1 }}>
                      Promotion Description Lorem Ipsum is simply dummy text of
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onPresCartBtn()}
        style={styles.cartBtn}
      >
        <Text style={{ color: "white" }}>Add To Cart</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: 10,
    padding: 20,
  },

  secWrapper: {
    backgroundColor: "white",
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  cartBtn: {
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10,
    backgroundColor: Colors.primary,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  promotionWrapper: {
    backgroundColor: "white",
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
});
