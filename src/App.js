import { useState } from "react";

import "./App.css";
import { Alert, Button, Snackbar, Typography } from "@mui/material";
import ButtonAppBar from "./ButtonAppBar";
import Main from "./Main";

function App() {

  return (
    <div className="App">
      {/* <Button variant="contained">Hello</Button> */}
      <ButtonAppBar />
      <Typography color="text.main" align="center" variant="h2">Please Log In or Register</Typography>
      <Main />
    </div>
  );
}

export default App;
