import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const url = `https://api.coinlore.net/api/tickers/?start=0&limit=20`;
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      await axios
        .get(url)
        .then((res) => {
          setCoins(res.data["data"]);
          setLoading(false);
          console.log("res.data[`data`] :>> ", res.data["data"]);
        })
        .catch((err) => {
          setLoading(false);
          console.log("err :>> ", err);
        });
    };
    fetchCoins();
  }, [url]);

  if (loading) {
    return <div className="loading-div">...Loading</div>;
  }

  return (
    <section className="main-section">
      <h1>Crypto-flouz</h1>
      <div className="container">
        {coins.map((el, index) => {
          return (
            <div
              className="coin-div"
              style={{ border: "1px solid green" }}
              key={index}
            >
              <h4>{el.symbol}</h4>
              <h5>{el.price_usd}</h5>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default App;
