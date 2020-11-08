import React, { useRef, useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import './App.css';
import Index from './pages/Index'
import ReactGA from 'react-ga'
import Scrollbar from 'smooth-scrollbar'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#fff'
    },
    text: {
      primary: '#fff',
      secondary: '#ccc'
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      // 'Roboto',
      // '"Helvetica Neue"',
      // 'Arial',
      // 'sans-serif',
      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
      // 'Stellar Regular',
      'sans-serif'
    ].join(','),
    body1: {
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 12,
    },
    button: {
      fontStyle: 'italic',
    }
  }
})
theme = responsiveFontSizes(theme)

const App = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    try {
      // console.log(document.querySelector(".App"))
      Scrollbar.init(document.querySelector("html"), {
        damping: 0.09,
        thumbMinSize: 0
      })
      // Scrollbar.initAll({
      //   damping: 0.09,
      //   thumbMinSize: 0
      // })
    } catch (err) {
      ReactGA.exception({
        description: err.stack,
        fatal: true
      })
    }
  }, [])

  return (
    <MuiThemeProvider theme={theme} id="main">
      {/* <Fab style={{width: 70, height: 70, background: 'transparent', boxShadow: 'none', zIndex: 1001, right: 0, position: 'fixed'}}><Menu color='secondary'/></Fab> */}
      <Router>
        <div className="App" style={{maxWidth: 1920, margin: 'auto auto'}}>
          <Switch>
            <Route path="/" component={Index} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  )
}

export default App;
