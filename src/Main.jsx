import React, {useState} from "react";
import { Alert, Button, Snackbar, TextField, Typography } from "@mui/material";
import Login from "./Login";

function Main() {


  
  return (
    <main>
      <Typography color="text.main" variant="h1">Welcome</Typography>
      <Typography color="text.main" variant="h3">To my Website!</Typography>
      <Login />
      <Button >Helllo</Button>
    </main>
  );
}

export default Main;
