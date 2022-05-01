import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const StocksTable = ({ stocks }) => {
  //look at the price within the input time period and the mediaCount. If the price is increasing and the mediaCount is increasing, recommend buy
  //if the price is decreasing and the mediaCount is decreasing, recommend sell
  //if the price is increasing and the mediaCount is decreasing, recommend hold
  const recommendStock = (stockData) => {
    //todays price -  x days ago price, if positive, recommend buy
    let changeInPrice =
      stockData[0].price - stockData[stockData.length - 1].price;
    let changeInMediaCount =
      stockData[0].mediaCount -
      stockData[stockData.length - 1].mediaCount / stockData.length;
    if (changeInPrice > 0 && changeInMediaCount > 1) {
      return "Buy";
    } else if (changeInPrice < 0 && changeInMediaCount < 1) {
      return "Sell";
    } else {
      return "Hold";
    }
  };

  return (
    <>
      {stocks.length > 0 ? (
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
            <TableRow>
              <TableCell>{stocks[0].symbol}</TableCell>
              <TableCell>{stocks[0].price}</TableCell>
              <TableCell>{stocks[0].date}</TableCell>
              <TableCell>{recommendStock(stocks)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ) : (
        <></>
      )}
    </>
  );
};

export default StocksTable;
