import React, { useState, useEffect } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

const App = () => {
  const [data, setData] = useState({});

  const handleCountryChange = async (country) => {
    setData(await fetchData(country));
  };

  useEffect(() => {
    (async () => {
      setData(await fetchData());
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker onCountryChange={handleCountryChange} />
      <Chart data={data} />
    </div>
  );
};

export default App;
