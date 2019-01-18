import React from "react";
import DepartureItem from "./departure-item";

const DepartureList = ({ data }) => {
  const addDepartureItem = () => {
    if (data) {
      return data.map((e, i) => <DepartureItem key={i} data={e} />);
    }
  };

  return <ul>{addDepartureItem()}</ul>;
};

export default DepartureList;
