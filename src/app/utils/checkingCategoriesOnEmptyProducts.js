import { randomNumber } from "./randomNumber";

export function checkingCategoriesOnEmptyProducts(
  collectionId,
  products,
  collectionCaterogy
) {
  const findCurrentCollectionCaterogy = collectionCaterogy.find(
    (c) => c.collection === collectionId
  );
  const categoriesIds = findCurrentCollectionCaterogy.categories;

  let checkingCategoriesIds = [];
  for (const categoryId in categoriesIds) {
    let categoryProducts = [];
    for (const prod in products) {
      if (
        categoriesIds[categoryId] === products[prod].category &&
        products[prod].collection === collectionId
      ) {
        categoryProducts.push(products[prod]);
      }
    }

    if (categoryProducts.length !== 0) {
      checkingCategoriesIds.push(categoriesIds[categoryId]);
    }
  }

  let mixCategoriesIds = [];
  for (let i = 0; i < checkingCategoriesIds.length; i++) {
    let number = randomNumber(0, 100);
    if (number % 2 !== 0) {
      mixCategoriesIds.push(checkingCategoriesIds[i]);
    } else {
      mixCategoriesIds.unshift(checkingCategoriesIds[i]);
    }
  }

  return mixCategoriesIds;
}
