export function checkArray(product, category, type) {
  const cat = product.filter((p) => p.category === category);
  const typ = cat.filter((p) => p.type === type);
  //   console.log("casuals", cat, typ);
  console.log("formal", category, cat, type, typ);
}

// console.log("casuals", `${category}: ${cat}`, `${type}: ${typ}`)
