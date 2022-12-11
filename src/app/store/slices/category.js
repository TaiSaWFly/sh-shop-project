import { createSlice } from "@reduxjs/toolkit";
import categoryService from "../../services/category.service";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    entities: null,
    isLoading: true,
  },
  reducers: {
    categoryRequested: (state) => {
      state.isLoading = true;
    },
    categoryReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    categoryRecevedFalied: (state) => {
      state.isLoading = false;
    },
  },
});

const { actions, reducer: categoryReducer } = categorySlice;
const { categoryRequested, categoryReceved, categoryRecevedFalied } = actions;

export const loadCategory = () => async (dispatch) => {
  dispatch(categoryRequested());
  try {
    const { content } = await categoryService.fetchAll();
    dispatch(categoryReceved(content));
  } catch (error) {
    dispatch(categoryRecevedFalied());
  }
};

export const getCategoryByIds = (ids) => (state) => {
  if (state.category.entities) {
    const categoryArray = [];
    for (const id in ids) {
      for (const category in state.category.entities) {
        if (ids[id] === state.category.entities[category].id) {
          categoryArray.push(state.category.entities[category]);
          break;
        }
      }
    }

    // dbug
    const dbug = [categoryArray[2]];
    // console.log(dbug);

    return categoryArray;
  }
};
export const getCategoryIdByCategoryPath = (path) => (state) => {
  let categoryId;
  if (state.category.entities) {
    categoryId = state.category.entities.find((e) => e.path === path).id;
  }

  return categoryId;
};

export const getCategoryLoadingStatus = () => (state) =>
  state.category.isLoading;

export default categoryReducer;
