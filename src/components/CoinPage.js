import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CoinPage = () => {
  let { id } = useParams();
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("coin :>> ", id);
  useEffect(() => {
    const fetchCoins = async () => {
      await axios
        .get(` https://api.coinlore.net/api/ticker/?id=${id}`)
        .then((res) => {
          setCoin(res.data[0]);
          setLoading(false);
          console.log("res.data :>> ", res.data[0]);
        })
        .catch((err) => {
          setLoading(false);
          console.log("err :>> ", err);
        });
    };
    fetchCoins();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h4>{coin.name}</h4>
      <h4>{coin.symbol}</h4>
      <h4>{coin.price_usd}</h4>
      <h4>{coin.volume24}</h4>
      <h4>{coin.price_btc}</h4>
    </div>
  );
};

export default CoinPage;
