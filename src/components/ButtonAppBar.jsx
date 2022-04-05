import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1,  width: "100%", marginBottom: "20px", position: 'fixed', top: 0, left: 0 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h4" component="div" sx={{ flexGrow: 1}}>
            Brady Bott
          </Typography>
          <Button color="inherit" sx={{marginRight: '20px'}}>About</Button>
          <Button color="inherit" sx={{marginRight: '20px'}}>Projects</Button>
          <Button color="inherit" sx={{marginRight: '20px'}}>Tutorials</Button>
          <Button color="inherit" sx={{marginRight: '20px'}}>Contact</Button>
          <Button color="inherit">Resume</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}