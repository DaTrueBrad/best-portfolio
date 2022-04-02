import { useState } from "react";

import "./App.css";
import { Alert, Button, Snackbar } from "@mui/material";
import ButtonAppBar from "./ButtonAppBar";
import Main from "./Main";

function App() {

  return (
    <div className="App">
      {/* <Button variant="contained">Hello</Button> */}
      <ButtonAppBar />
      <Main />
    </div>
  );
}

export default App;
