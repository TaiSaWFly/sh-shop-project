const Color = require("../models/Color");
const Size = require("../models/Size");
const Collection = require("../models/Collection");
const Category = require("../models/Category");
const CollectionCategory = require("../models/CollectionCategory");
const NavigateMenu = require("../models/NavigateMenu");

const Product = require("../models/Product");

const colorsMock = require("../mock/colors.json");
const sizesMock = require("../mock/sizes.json");
const collectionsMock = require("../mock/collections.json");
const categoriesMock = require("../mock/categories.json");
const collectionCategoriesMock = require("../mock/collectionCategories.json");
const navigateMenusMock = require("../mock/navigateMenus.json");

const productsMock = require("../mock/products.json");

module.exports = async () => {
  await createInitialEntity(Color, colorsMock);
  await createInitialEntity(Size, sizesMock);
  await createInitialEntity(Collection, collectionsMock);
  await createInitialEntity(Category, categoriesMock);
  await createInitialEntity(CollectionCategory, collectionCategoriesMock);
  await createInitialEntity(NavigateMenu, navigateMenusMock);

  await createInitialEntity(Product, productsMock);
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (error) {
        return error;
      }
    })
  );
}
