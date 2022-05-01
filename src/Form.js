import React from "react";
import { Grid, TextField, Typography, Button } from "@mui/material";
const Form = ({
  handleSubmit,
  setInputSymbol,
  inputSymbol,
  setInputTime,
  inputTime,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Search Stocks
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={(e) => setInputSymbol(e.target.value.toUpperCase())}
            value={inputSymbol}
            required
            id="stockSymbol"
            label="Stock Symbol"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={(e) => setInputTime(e.target.value)}
            value={inputTime}
            required
            id="timeWindow"
            label="Time Window"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        sx={{
          marginTop: "10px",
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
