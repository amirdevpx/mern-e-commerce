import { request } from ".";

class AppServices {
  static FetchProductsApi = (params: any) => {
    return request.get("/api/v1/products", { params: params });
  };
}

export default AppServices;
