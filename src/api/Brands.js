import ApiService from "services/ApiService";

export default class Brands {
  getBrandsList() {
    return ApiService({
      url: "/product/brand",
      method: "GET",
    });
  }
}
