import httpService from "./http.service";
const productEndPoint = "product/";

const productService = {
  getByCollectionPathAndCategoryPath: async (
    collectionPath,
    categoryPath,
    limit
  ) => {
    const { data } = await httpService.post(
      productEndPoint + collectionPath + "/" + categoryPath,
      limit
    );

    // console.log(...data.content);

    return data;
  },
};
export default productService;
