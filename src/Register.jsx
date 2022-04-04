import { Box, Button, TextField, Snackbar, Alert, Typography, Divider } from "@mui/material";
import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [open, setopen] = useState(false);

  const handleClick = () => setopen(true);
  const handleClose = () => setopen(false);

  return (
    <Box
      sx={{
        backgroundColor: "#414141",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        padding: "15px",
        borderRadius: "3px",
        width: "30%"
      }}
    >
      <Typography color="text.main" align="center" variant="h5" sx={{marginBottom: "10px"}}>Register</Typography>
      <TextField
        id="outlined-basic"
        label="Name"
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        sx={{ color: "white" }}
        InputLabelProps={{ className: "textfield__label" }}
      />
      <TextField
        id="outlined-basic"
        label="Username"
        onChange={(e) => setUsername(e.target.value)}
        variant="outlined"
        sx={{ color: "white" }}
        InputLabelProps={{ className: "textfield__label" }}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
        sx={{ color: "white" }}
        InputLabelProps={{ className: "textfield__label" }}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
        sx={{ color: "white" }}
        InputLabelProps={{ className: "textfield__label" }}
      />
      <TextField
        id="outlined-basic"
        label="Confirm Password"
        type="password"
        onChange={(e) => setConPassword(e.target.value)}
        variant="outlined"
        sx={{ color: "white" }}
        InputLabelProps={{ className: "textfield__label" }}
      />
    <Button variant="contained" onClick={handleClick}>Register</Button>
    <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        // message="Note archived"
      >
        <Alert onClose={handleClose} severity="success">
          Current State:<br/>{name}<br/>{username}<br/>{email}<br/>{password}<br/>{conPassword}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Register;
