import React from "react";
import HistoryTable from "./historyTable/historyTable";

const AccountHistory = ({ user }) => {
  return (
    <>
      <HistoryTable userId={user.id} />
    </>
  );
};

export default AccountHistory;
