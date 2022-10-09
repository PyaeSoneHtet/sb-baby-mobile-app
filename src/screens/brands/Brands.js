import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";

import BrandListItem from "./components/BrandListItem";
import BrandsApi from "api/Brands";

export default function Brands({ navigation }) {
  const [brands, setBrands] = useState([]);
  const brandsApi = new BrandsApi();

  useEffect(() => {
    getBrandsList();
  }, []);

  const getBrandsList = async () => {
    try {
      const _brands = await brandsApi.getBrandsList();
      setBrands(_brands.data.data);
    } catch (error) {
      console.log("Failed to get brands - ", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            marginHorizontal: 10,
            marginTop: 10,
          }}
        >
          {brands.length > 0 &&
            brands.map((data, index) => {
              return (
                <BrandListItem
                  key={index}
                  data={data}
                  onPressProduct={(_product) => console.log(_product)}
                />
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}
