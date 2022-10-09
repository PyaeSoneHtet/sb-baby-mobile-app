import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";

import CategoriesListItem from "./components/CategoriesListItem";
import CategoriesApi from "api/Categories";
import { AppLoading, NoData } from "components";

export default function Categories({ navigation }) {
  const [categories, setCategories] = useState([]);
  const [isOpenedLoading, setIsOpenedLoading] = useState(false);

  const categoriesApi = new CategoriesApi();

  useEffect(() => {
    getCategoriesList();
  }, []);

  const getCategoriesList = async () => {
    try {
      setIsOpenedLoading(true);
      const _categories = await categoriesApi.getCategoriesList();
      setCategories(_categories.data.data);
      setIsOpenedLoading(false);
    } catch (error) {
      setIsOpenedLoading(false);
      console.log("Failed to get categories - ", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {isOpenedLoading ? (
        <AppLoading />
      ) : categories.length === 0 ? (
        <NoData />
      ) : (
        <ScrollView>
          {categories.map((data, index) => {
            return (
              <CategoriesListItem
                key={index}
                data={data}
                onPressItem={(_product) => console.log(_product)}
                onPressCategory={(_categories) =>
                  navigation.navigate("CategoriesList", {
                    category: _categories,
                  })
                }
              />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}
