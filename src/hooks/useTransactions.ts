import { useEffect, useState } from "react";
import { getTransactions } from "../services/transactions";

export const useTransactions = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTransactions().then(setData);
  }, []);

  return data;
};