import React, { useState, useRef, useEffect } from "react";

import {
  Button,
  Table,
  Typography,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  TextField,
  Container,
  Paper,
} from "@mui/material";

const stocksJson = require("./data.json");

//create a theme for the app that can be used in the components
const style = {
  marginTop: "20px",
  marginBottom: "20px",
  marginRight: "20px",
  display: "flex",
  width: "600px",
  padding: "20px",
  borderRadius: "10px",
};

const App = () => {
  const [stock, setStock] = useState([]);
  const [inputSymbol, setInputSymbol] = useState("");

  const stockData = stocksJson;
  //create a const 10 days ago
  let d = 0;
  // for (let i = currentDayOfMonth - 10; i < currentDayOfMonth; i++) {
  stockData.forEach((stock) => {
    // const i = currentDayOfMonth - d;
    stock.date = new Date(Date.now() - d * 86400000)
      .toLocaleString()
      .split(",")[0];
    console.log(stock.date);
    stock.price = Math.floor(Math.random() * (100 - 1) + 1);
    d++;
  });
  // }

  // const recommendStock = (stockPrice, socialMediaPosts) => {
  //   if (socialMediaPosts > 0) {
  //     if (stockPrice > 0) {
  //       return "Buy";
  //     } else {
  //       return "Sell";
  //     }
  //   } else {
  //     return "Hold";
  //   }
  // };

  //take input symbol and number of days as input from form then set state

  //and generate a number of objects based on number of days

  return (
    <>
      <Container>
        <Typography variant="h4">Stock App</Typography>
        <Paper sx={style}>
          <form>
            <Typography variant="h6" gutterBottom>
              Search Stocks
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="stockSymbol"
                  label="Stock Symbol"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="timeWindow"
                  label="Time Window"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Button>Submit</Button>
          </form>
        </Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Stock Symbol</TableCell>
              <TableCell>Closing Price</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Recommendation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={stock.symbol}>
              <TableCell>AMZN</TableCell>
              <TableCell>20$</TableCell>
              <TableCell>2020-01-01</TableCell>
              <TableCell>Buy</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Container>
    </>
  );
};

export default App;
