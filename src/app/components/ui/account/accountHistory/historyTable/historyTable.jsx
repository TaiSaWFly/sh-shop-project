import React, { useState } from "react";
import BackButton from "../../../../common/buttonComponent/backButton";
import Table from "../../../../common/tableComponent/table/table";
import HistoryProducts from "../historyProducts/historyProducts";
import style from "./historyTable.module.scss";
import { parseDate } from "../../../../../utils/parseDate";
import { useEffect } from "react";
import Loading from "../../../../common/loadingComponent/loading";
import api from "../../../../../api";
import Price from "../../../../common/priceComponent/price";

const HistoryTable = ({ userId }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.historyPurchase
      .getHistoryByUserId(userId)
      .then((data) => setData(data));
  }, [userId]);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
      console.log(data);
    }
  }, [data]);

  const columns = {
    order: {
      name: "order №",
      component: (h) => <div>{h.order}</div>,
    },
    orderDate: {
      name: "order date",
      component: (h) => <div>{parseDate(h.orderDate)}</div>,
    },
    products: {
      name: "products",
      component: (h) => <HistoryProducts productsIds={h.products} />,
    },
    status: {
      name: "status",
      component: (h) => <div>{h.status}</div>,
    },
    shipDate: {
      name: "ship date",
      component: (h) => <div>{parseDate(h.shipDate)} </div>,
    },
    total: {
      name: "total amount",
      component: (h) => <Price price={h.total} />,
    },
  };

  return (
    <div>
      <BackButton
        className={style.history_table__back_button}
        urlBack="/account">
        go back
      </BackButton>
      {!isLoading ? (
        <div className={style.history_table}>
          <Table columns={columns} dataBody={data} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default HistoryTable;
