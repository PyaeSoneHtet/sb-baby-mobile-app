import ApiService from "services/ApiService";

export default class Product {
  getProductByCategoryName({ id }) {
    return ApiService({
      url: "/list/product",
      method: "GET",
      params: {
        categ_id: id,
      },
    });
  }

  getProductDetail({ id }) {
    return ApiService({
      url: "/detail/product/list",
      method: "GET",
      params: {
        product_id: id,
      },
    });
  }
}
