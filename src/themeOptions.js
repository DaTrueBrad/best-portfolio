const {createTheme} = require('@mui/material/styles')

const colors = ['#70798C', '#4C9F70', '#EE6352', '#4ADBC8', '#466060', '#F49E4C', '#AB3428', '#3B8EA5', '#F5EE9E', '#30C5FF', '#FFA620']
const color = colors[Math.floor(Math.random()*colors.length)]

export const themeOptions = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: color,
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