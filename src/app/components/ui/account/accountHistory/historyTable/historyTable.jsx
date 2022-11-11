import React, { useState } from "react";
import BackButton from "../../../../common/buttonComponent/backButton";
import Table from "../../../../common/tableComponent/table/table";
import HistoryProducts from "../historyProducts/historyProducts";
import RenderPrice from "../../../../common/priceComponent/renderPrice";
import style from "./historyTable.module.scss";
import { parseDate } from "../../../../../utils/parseDate";
import { useEffect } from "react";
import { historyPurchase } from "../../../../../data/accountData/historyPurchase";
import Loading from "../../../../common/loadingComponent/loading";

const HistoryTable = ({ userId }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const getHistoryData = historyPurchase.filter((h) => h.userId === userId);
    setData(getHistoryData);
  }, [userId]);

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
      component: (h) => <RenderPrice price={h.total} />,
    },
  };

  return (
    <div>
      <BackButton
        className={style.history_table__back_button}
        urlBack="/account">
        go back
      </BackButton>
      {data ? (
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
