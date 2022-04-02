import { Box, Alert, Button, Snackbar, TextField } from '@mui/material'
import React, {useState, useContext} from 'react'

function Login() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [open, setopen] = useState(false);

  const handleClick = () => setopen(true);
  const handleClose = () => setopen(false);
  return (
    <Box sx={{backgroundColor: '#414141', display: "flex", flexDirection: "column", gap: "5px", padding: "15px", borderRadius: "3px"}}>
      <TextField
        id="outlined-basic"
        label="Username"
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        sx={{color: "white"}}
        InputLabelProps={{className: "textfield__label"}}
        />
      <TextField
        id="outlined-basic"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
        sx={{color: "white"}}
        InputLabelProps={{className: "textfield__label"}}
        />
      <TextField
        id="outlined-basic"
        label="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
        sx={{color: "white"}}
        InputLabelProps={{className: "textfield__label"}}
        />
      <Button variant="contained" sx={{backgroundColor: "#EE6352", color: "#EFE9F4"}} onClick={handleClick}>
        Hello
      </Button>
      







      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
      >
        <Alert onClose={handleClose} severity="success">
          Current State: {name} {email} {password}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Login