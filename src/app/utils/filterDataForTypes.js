export function filterDataForTypes(product, types, categoryId) {
  let products = [];
  let typesIds = [];
  for (const type in types) {
    for (const prod in product) {
      if (
        types[type].id === product[prod].type &&
        product[prod].category === categoryId
      ) {
        products.push(product[prod]);
        typesIds.push(types[type].id);
      }
    }
  }

  const data = createTypesArray(typesIds, types, products);
  return data;
}

function createTypesArray(typesIds, types, product) {
  const filterIdenticalTypesIds = [...new Set(typesIds)];
  let data = [];
  for (const id in filterIdenticalTypesIds) {
    for (const type in types) {
      if (filterIdenticalTypesIds[id] === types[type].id) {
        data.push({
          id: types[type].id,
          name: types[type].name,
          products: createProductsArray(product, types[type].id),
        });
      }
    }
  }
  return data;
}

function createProductsArray(product, typeId) {
  const array = product.filter((p) => p.type === typeId);
  return array;
}
