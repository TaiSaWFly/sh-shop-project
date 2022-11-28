import React, { useState, useEffect } from "react";
import style from "./popularProducts.module.scss";
import PopularListItem from "../popularListItem/popularListItem";
import Loading from "../../../../common/loadingComponent/loading";
import api from "../../../../../api";
import { useHistory } from "react-router-dom";
import PopularProduct from "../popularProduct/popularProduct";

const PopularProducts = () => {
  const history = useHistory();
  const [products, setProducts] = useState();
  const [populars, setPopulars] = useState();
  const [currentListId, setCurrentListId] = useState();

  useEffect(() => {
    api.popular.fetchAll().then((data) => setPopulars(data));
  }, []);

  useEffect(() => {
    if (populars) {
      const initDefaultData = populars.find((_, index) => index === 0);
      setProducts(initDefaultData.products);
      setCurrentListId(initDefaultData.id);
    }
  }, [populars]);

  const handleFilterProducts = (currentListId) => {
    const dataIndex = populars.findIndex((p) => p.id === currentListId);
    const poducts = populars[dataIndex].products;
    setProducts(poducts);
    setCurrentListId(currentListId);
  };

  const handleRedirectToProduct = (id) => {
    history.push(`/product/${id}`);
  };

  return (
    <div className={style.popular_products}>
      {populars && products ? (
        <>
          <ul className={style.popular_products__list}>
            {populars.map((c) => (
              <PopularListItem
                key={c.id}
                listId={c.id}
                currentListId={currentListId}
                name={c.name}
                handleFilter={handleFilterProducts}
              />
            ))}
          </ul>

          <div className={style.popular_items}>
            {products.map((product) => (
              <PopularProduct
                key={product.id}
                product={product}
                redirectToProduct={handleRedirectToProduct}
              />
            ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default PopularProducts;
