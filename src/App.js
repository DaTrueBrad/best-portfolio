import { useState } from "react";

import "./App.css";
import { Alert, Button, Snackbar, Typography } from "@mui/material";
import ButtonAppBar from "./components/ButtonAppBar";
import About from "./components/About/About";
import ContactMe from "./components/Contact/ContactMe";

function App() {

  return (
    <div className="App">
      {/* <Button variant="contained">Hello</Button> */}
      <ButtonAppBar />
      <ContactMe />
      {/* <About /> */}
    </div>
  );
}

export default App;
