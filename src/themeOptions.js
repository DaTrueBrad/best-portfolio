const {createTheme} = require('@mui/material/styles')

export const themeOptions = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#EE6352',
    },
    text: {
      main: '#fff'
    },
    secondary: {
      main: '#A8DCD9',
    },
    background: {
      paper: '#414141',
    },
    error: {
      main: '#ef1200',
    },
  },
})