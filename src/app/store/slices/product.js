import { createSlice } from "@reduxjs/toolkit";
import productService from "../../services/product.service";

const productSlice = createSlice({
  name: "product",
  initialState: {
    entities: null,
    isLoading: true,
  },
  reducers: {
    productRequested: (state) => {
      state.isLoading = true;
    },
    productReceved: (state, action) => {
      if (state.entities === null) {
        state.entities = action.payload;
      } else {
        state.entities = [...state.entities, ...action.payload];
      }
    },
    productLoaded: (state) => {
      state.isLoading = false;
    },
    productRecevedFalied: (state) => {
      state.isLoading = false;
    },
  },
});

const { actions, reducer: productReducer } = productSlice;
const {
  productRequested,
  productReceved,
  productLoaded,
  productRecevedFalied,
} = actions;

export const loadProductByCollectionPathAndCategoryPath =
  (collectionPath, categoryPath, collectionId, categoryId, definedLength) =>
  async (dispatch, getState) => {
    dispatch(productRequested());

    const { entities } = getState().product;

    if (entities !== null) {
      // checkDoble(entities);

      const tryRequest = repeatedRequest(
        collectionId,
        categoryId,
        entities,
        definedLength
      );

      if (tryRequest) {
        // dispatch(productRequested());
        const idsArray = findExistingIdsByCollectionIdAndCategoryId(
          entities,
          collectionId,
          categoryId
        );

        try {
          const { content } =
            await productService.getByCollectionPathAndCategoryPath(
              collectionPath,
              categoryPath,
              { limit: definedLength, withOutIds: idsArray }
            );

          dispatch(productReceved(content));
        } catch (error) {
          dispatch(productRecevedFalied());
        }
      }
      dispatch(productLoaded());
    } else {
      // dispatch(productRequested());
      try {
        const { content } =
          await productService.getByCollectionPathAndCategoryPath(
            collectionPath,
            categoryPath,
            { limit: definedLength }
          );

        dispatch(productReceved(content));
        dispatch(productLoaded());
      } catch (error) {
        dispatch(productRecevedFalied());
      }
    }
  };

// Selectors
export const getProductByCollectionIdAndCategoryId =
  (collectionId, categoryId) => (state) => {
    let data;

    if (state.product.entities) {
      data = findProductByCollectionIdAndCategoryId(
        state.product.entities,
        collectionId,
        categoryId
      );
    }

    return data;
  };

export const getProductLoadingStatus = () => (state) => state.product.isLoading;

// miniUtils

function findProductByCollectionIdAndCategoryId(
  products,
  collectionId,
  categoryId
) {
  const data = products.filter(
    (p) => p.collectionId === collectionId && p.categoryId === categoryId
  );

  return data;
}

function repeatedRequest(collectionId, categoryId, products, definedLength) {
  const foundProducts = findProductByCollectionIdAndCategoryId(
    products,
    collectionId,
    categoryId
  );

  const tryRequest = definedLength <= foundProducts.length ? false : true;
  return tryRequest;
}

function findExistingIdsByCollectionIdAndCategoryId(
  products,
  collectionId,
  categoryId
) {
  const foundProducts = findProductByCollectionIdAndCategoryId(
    products,
    collectionId,
    categoryId
  );
  const transformToIdsidsArray = foundProducts.map((p) => p._id);
  // console.log(
  //   "collectionId",
  //   collectionId,
  //   "categoryId",
  //   categoryId,
  //   "transformToIdsidsArray",
  //   transformToIdsidsArray
  // );

  return transformToIdsidsArray;
}

function checkDoble(product) {
  const ids = product.map((p) => p._id);
  const set = new Set();

  for (const i in ids) {
    for (const p in product) {
      if (product[p]._id === ids[i]) {
        set.add(ids[i]);
      }
    }
  }

  console.log("checkDoble", set);
}

export default productReducer;
