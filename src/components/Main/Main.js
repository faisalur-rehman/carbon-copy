import React, { useEffect } from "react";
import MainScreen from "./MainScreen";
import * as CarbonApi from "../../apis/api";
import useApi from "../../hooks/useApi";

const Main = () => {
  const { data, request } = useApi(CarbonApi.getAllProduct);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
        // console.log("all products", data);
      } catch (_) {}
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  return <div>{data && <MainScreen data={data} />}</div>;
};

export default Main;
