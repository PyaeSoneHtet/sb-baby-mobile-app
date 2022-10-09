import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const screenWidth = Dimensions.get("screen").width;

export default function CategoriesListItem({
  data,
  onPressItem,
  onPressCategory,
}) {
  return (
    <View style={{ marginTop: 10 }}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onPressCategory && onPressCategory(data)}
        style={styles.categoryWrapper}
      >
        <Text>{data?.category_name}</Text>
      </TouchableOpacity>

      <View style={styles.subCategoryWrapper}>
        {data?.sub_category.length > 0 &&
          data?.sub_category.map((product, index) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                onPress={() => onPressItem && onPressItem(product)}
                style={styles.subCategoryBtn}
              >
                <Image
                  source={{ uri: product?.category_image }}
                  style={{ width: 60, height: 60, marginBottom: 5 }}
                />
                <Text style={{ fontSize: 12 }}>{product?.category_name}</Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryWrapper: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 20,
  },
  subCategoryWrapper: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 10,
  },

  subCategoryBtn: {
    margin: 5,
    backgroundColor: "white",
    width: screenWidth / 3.5,
    height: screenWidth / 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
