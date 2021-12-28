import axios from "axios";
import React, { useEffect, useState } from "react";
import { Root } from "./BitCoinInterface";

const BitCoin = () => {
  const [bitCoins, setBitCoins] = useState<Root | null>(null);
  useEffect(() => {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => setBitCoins(res.data));
  });

  if (bitCoins) {
    return (
      <div>
        <p>{bitCoins.disclaimer}</p>
        <p>{bitCoins.time.updated}</p>
        <p>{bitCoins.bpi.USD.code}</p>
        <p>{bitCoins.bpi.USD.rate}</p>
        {/* {homes.map(home => <div>{home.name}</div>)} */}
      </div>
    );
  } else {
    return (
      <div>
        <h1>normal return</h1>
      </div>
    );
  }
};
export default BitCoin;
