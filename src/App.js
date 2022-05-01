import StocksTable from "./StocksTable";
import React, { useState, useEffect } from "react";
import Form from "./Form";
import { Typography, Container, Paper } from "@mui/material";

//create a theme for the app that can be used in the components
const style = {
  marginTop: "20px",
  marginBottom: "20px",
  marginRight: "20px",
  display: "flex",
  width: "420px",
  padding: "20px",
  borderRadius: "10px",
};

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [inputSymbol, setInputSymbol] = useState("");
  const [inputTime, setInputTime] = useState("");

  const generateData = (numOfDays, stockSymbol) => {
    let data = [];
    //initiate the data with the first day
    for (let i = 0; i < numOfDays; i++) {
      if (i === 0) {
        data.push({
          symbol: stockSymbol,
          date: new Date(Date.now() - i * 24 * 60 * 60 * 1000)
            .toLocaleString()
            .split(",")[0],
          price: (Math.random() * (100 - 1) + 1).toFixed(3),
          mediaCount: Math.floor(Math.random() * (100 - 1) + 1),
        });
        //guarantee that mediaCount is always increasing
      } else {
        data.push({
          symbol: stockSymbol,
          date: new Date(Date.now() - i * 24 * 60 * 60 * 1000)
            .toLocaleString()
            .split(",")[0],
          price: (Math.random() * (100 - 1) + 1).toFixed(3),
          mediaCount:
            data[i - 1].mediaCount + Math.floor(Math.random() * (100 - 0 + 1)),
        });
      }
    }
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStocks(generateData(inputTime, inputSymbol));
    setInputSymbol("");
    setInputTime("");
  };
  console.log(stocks);

  useEffect(() => {
    console.log(inputSymbol);
    console.log(inputTime);
  }, [inputSymbol, inputTime]);

  return (
    <>
      <Container>
        <Typography variant="h4">Stock App</Typography>
        <Paper sx={style}>
          <Form
            handleSubmit={handleSubmit}
            setInputSymbol={setInputSymbol}
            inputSymbol={inputSymbol}
            setInputTime={setInputTime}
            inputTime={inputTime}
          />
        </Paper>
        <StocksTable stocks={stocks} />
      </Container>
    </>
  );
};

export default App;
