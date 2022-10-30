const methodFilterProducts = {
  popular: (products) => {
    const data = products.sort((a, b) => b.rate - a.rate);
    return data;
  },
  newArrivals: (products) => {
    const data = products.filter((p) => (p.newArrivals ? p : false));
    return data;
  },
  sales: (products) => {
    const data = products.sort((a, b) => b.numberOfSales - a.numberOfSales);
    return data;
  },
  ofOffers: (products) => {
    const data = products.filter((p) => p.newPrice);
    return data;
  },
  comimgSoon: (products) => {
    const data = [];
    return data;
  },
};

export default methodFilterProducts;
