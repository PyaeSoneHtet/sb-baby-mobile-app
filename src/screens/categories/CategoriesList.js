import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import ProductApi from "api/Product";

import ProductListItem from "./components/ProductListItem";
import { AppLoading, NoData } from "components";

export default function CategoriesList({ navigation, route }) {
  const [products, setProducts] = useState([]);
  const [isOpenedLoading, setIsOpenedLoading] = useState(false);
  const _categories = route.params.category;

  const productApi = new ProductApi();

  useEffect(() => {
    getProductByCategoryName();
  }, []);

  React.useLayoutEffect(() => {
    const _title =
      _categories.category_name.length > 25
        ? _categories.category_name.slice(0, 24) + ".."
        : _categories.category_name;
    navigation.setOptions({
      title: _title,
      headerBackTitleVisible: false,
      headerTitleAlign: "center",
    });
  }, []);

  const getProductByCategoryName = async () => {
    try {
      setIsOpenedLoading(true);
      const _product = await productApi.getProductByCategoryName({
        id: _categories.category_id,
      });
      setProducts(_product?.data?.data?.product_list);
      setIsOpenedLoading(false);
    } catch (error) {
      setIsOpenedLoading(false);
      console.log("Failed to get product by category - ", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {isOpenedLoading ? (
        <AppLoading />
      ) : products.length === 0 ? (
        <NoData label={"There is no product!"} />
      ) : (
        <ScrollView>
          <View
            style={{
              flexWrap: "wrap",
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            {products.map((data, index) => {
              return (
                <ProductListItem
                  key={index}
                  data={data}
                  onPressItem={(_product) =>
                    navigation.navigate("PorductDetail", { product: _product })
                  }
                />
              );
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
}
