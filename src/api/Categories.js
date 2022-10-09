import ApiService from "services/ApiService";

export default class Categories {
  getCategoriesList() {
    return ApiService({
      url: "/product/categories",
      method: "GET",
    });
  }
}
