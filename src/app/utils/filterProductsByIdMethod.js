import methodFilterProducts from "./methodFilterProducts";
import { definedLengthArray } from "./definedLengthArray";

const methods = [
  { id: "1", method: methodFilterProducts.popular },
  { id: "2", method: methodFilterProducts.newArrivals },
  { id: "3", method: methodFilterProducts.sales },
  { id: "4", method: methodFilterProducts.ofOffers },
  { id: "5", method: methodFilterProducts.comimgSoon },
];

export function filterProductsByIdMethod(products, idMethod) {
  let method;
  let data;
  let definedLength;

  switch (idMethod) {
    case "1": {
      method = findMethod(idMethod);
      data = method(products);
      break;
    }
    case "2": {
      method = findMethod(idMethod);
      data = method(products);
      break;
    }
    case "3": {
      method = findMethod(idMethod);
      data = method(products);
      break;
    }
    case "4": {
      method = findMethod(idMethod);
      data = method(products);
      break;
    }
    case "5": {
      method = findMethod(idMethod);
      data = method(products);
      break;
    }
    default:
      break;
  }
  definedLength = definedLengthArray(data, 6);
  return definedLength;
}

function findMethod(id) {
  const methodFind = methods.find((m) => m.id === id);
  return methodFind.method;
}
