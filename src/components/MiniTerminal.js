import React, { Component } from 'react'
import { Grid, InputBase, InputAdornment } from '@material-ui/core'
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import PropTypes from 'prop-types'


const styles = theme => ({
  terminal: {
    // border: '1px #ffffff99 solid',
    // borderRadius: 5,
    margin: 10
  }
})

const theme = createMuiTheme({
  palette: {
    text: {
      primary: '#fff',
      secondary: '#8ae232'
    }
  }
})

class MiniTerminal extends Component {
  constructor(props) {
    super(props)
    this.width = props.width
    this.height = props.height
    this.maxNumOfChar = props.maxNumOfChar || 50
    this.maxNumOfLine = props.maxNumOfLine || 4
    this.userName = props.userName || ''
    this.state = {
      lines: [],
      cursorShow: false,
      onFocus: false,
      lastTabTimestamp: null
    }
    this.state.lines.push({ input: true, text: '', user: true })
    this.cursorTimer = setInterval(_ => this.setState(state => ({ cursorShow: !state.cursorShow })), 1000)
    this.onCmd = props.onCmd
    this.onOptionsRequired = props.onOptionsRequired
  }

  componentDidUpdate(prevProps, prevState) {
    const prevShow = prevState.show
    const curShow = (this.props.show === undefined)? true : this.props.show
    if (prevShow !== curShow) {
      this.setState({ show: curShow })
      this.refs.lastLine.children[1].focus()
    }
  }

  componentWillUnmount() {
    clearInterval(this.cursorTimer)
  }

  exec(cmd) {
    if (this.onCmd) {
      return this.onCmd().toString()
    }
    console.log(`Execute cmd: ${cmd}`)
    return 'Success!'
  }

  handleKeyPress(event) {
    console.log(event, event.keyCode, event.key, event.charCode)
    let { lines } = this.state
    if (event.charCode === 13) {
      if (event.target.value.length) {
        let result = this.exec(event.target.value)
        if (lines.length + 1 > this.maxNumOfLine) {
          lines = lines.slice(-2)
        }
        lines[lines.length - 1].input = false
        lines.push({ input: false, text: result })
        lines.push({ input: true, text: '', user: true })
      }
    } else if (lines[lines.length - 1].text.length < this.maxNumOfChar) {
      lines[lines.length - 1].text += event.key
    } else {
      return
    }
    this.setState({ lines })
  }
  handleKeyDown(event) {
    console.log(event, event.keyCode, event.key, event.charCode)
    console.log(event.preventDefault)
    if (event.keyCode === 8) {
      let { lines } = this.state
      lines[lines.length - 1].text = lines[lines.length - 1].text.slice(0, -1)
      this.setState({ lines })
    } else if (event.keyCode === 9) {
      event.preventDefault()
      event.stopPropagation()
      if (this.state.lastTabTimestamp && Date.now() - this.state.lastTabTimestamp < 500) {
        if (this.onOptionsRequired) {
          this.onOptionsRequired()
        }
        console.log('Options requested')
        this.setState({ lastTabTimestamp: null })
      } else {
        this.setState({ lastTabTimestamp: Date.now() })
      }
    }
  }

  render() {
    const { classes } = this.props
    return (
      <Grid
        item
        container
        className={classes.terminal}
        direction='column'
        justify="flex-start"
        alignItems="flex-start"
        onMouseDown={_ => {
          console.log(this.refs)
          if (this.refs.lastLine) {
            this.refs.lastLine.children[1].focus()
          }
        }}
        onClick={_ => {
          console.log(this.refs)
          if (this.refs.lastLine) {
            this.refs.lastLine.children[1].focus()
          }
        }}
        style={{width: this.width, height: this.height}}
      >
        <MuiThemeProvider theme={theme}>
          {this.state.lines.map((v, i) => {
            if (v.input) {
              return (
                <InputBase
                  className="nocursor"
                  key={i}
                  ref='lastLine'
                  style={{marginLeft: 5}}
                  onKeyPress={this.handleKeyPress.bind(this)}
                  onKeyDown={this.handleKeyDown.bind(this)}
                  onFocus={_ => this.setState({ onFocus: true })}
                  onBlur={_ => this.setState({ onFocus: false })}
                  value={v.text + (this.state.show? (this.state.onFocus? (this.state.cursorShow? '▋' : '') : '⌷') : '')}
                  color='secondary'
                  startAdornment={<InputAdornment clas="nocursor" position="start">{this.state.show? '$' : ''}</InputAdornment>}
                  fullWidth
                />
              )
            } else {
              return (
                <InputBase
                  className="nocursor"
                  key={i}
                  style={{marginLeft: 5}}
                  onKeyPress={this.handleKeyPress.bind(this)}
                  onKeyDown={this.handleKeyDown.bind(this)}
                  onFocus={_ => this.setState({ onFocus: true })}
                  onBlur={_ => this.setState({ onFocus: false })}
                  value={v.text}
                  color='secondary'
                  startAdornment={v.user? <InputAdornment clas="nocursor" position="start">{this.state.show? '$' : ''}</InputAdornment> : null}
                  fullWidth
                  readOnly
                />
              )
            }
          })}
        </MuiThemeProvider>
      </Grid>
    )
  }
}

MiniTerminal.protoTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  maxNumOfChar: PropTypes.number,
  maxNumOfLine: PropTypes.number,
  userName: PropTypes.string,
  onCmd: PropTypes.func,
  onOptionsRequired: PropTypes.func,
  show: PropTypes.bool
}

export default withStyles(styles)(MiniTerminal)