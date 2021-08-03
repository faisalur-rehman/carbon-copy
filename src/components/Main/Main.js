import React, { useEffect } from "react";
import MainScreen from "./MainScreen";
import * as CarbonApi from "../../apis/api";
import useApi from "../../hooks/useApi";
import Layout from "../Layout/Layout";

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
  return <Layout>{data && <MainScreen data={data} />}</Layout>;
};

export default Main;
