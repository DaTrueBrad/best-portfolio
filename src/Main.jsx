import React, {useState} from "react";
import { Alert, Button, Snackbar, TextField, Typography } from "@mui/material";
import Login from "./Login";
import Register from "./Register";

function Main() {


  
  return (
    <main>
      {/* <Typography color="text.main" variant="h2">Welcome!</Typography> */}
      <Login />
      <Register />
    </main>
  );
}

export default Main;
