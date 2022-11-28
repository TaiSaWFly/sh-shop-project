import { randomNumber } from "./randomNumber";

export function returnCaterogiesWithoutCurrentCategoryId(
  collectionCategories,
  collectionId,
  currentCategoryId,
  categories
) {
  const findCurrentCollectionCaterogy = collectionCategories.find(
    (c) => c.collection === collectionId
  );
  const categoriesIds = findCurrentCollectionCaterogy.categories;
  const categoriesIdsWithoutCurrentCategoryId = categoriesIds.filter(
    (c) => c !== currentCategoryId
  );

  let categoriesArray = [];
  for (const id in categoriesIdsWithoutCurrentCategoryId) {
    for (const c in categories) {
      if (categories[c].id === categoriesIdsWithoutCurrentCategoryId[id]) {
        categoriesArray.push(categories[c]);
      }
    }
  }

  let mixCategoriesIds = [];
  for (let i = 0; i < categoriesArray.length; i++) {
    let number = randomNumber(0, 100);
    if (number % 2 !== 0) {
      mixCategoriesIds.push(categoriesArray[i]);
    } else {
      mixCategoriesIds.unshift(categoriesArray[i]);
    }
  }

  return mixCategoriesIds;
}
