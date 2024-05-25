import React, { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  const currentDate = new Date().toISOString().split("T")[0];

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${currentDate}/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err) => console.error("Error fetching currency data:", err));
    // console.log(data);
  }, [currency]);
  //   console.log(data);
  return data;
};

export default useCurrencyInfo;
