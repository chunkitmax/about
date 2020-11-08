import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
  fakeButtons: {
    height: 10,
    width: 10,
    borderRadius: '50%',
    border: '1px solid #000',
    position: 'relative',
    top: 6,
    left: 6,
    backgroundColor: '#ff3b47',
    borderColor: '#9d252b',
    display: 'inline-block',
  },
  fakeMenu: {
    width: 550,
    boxSizing: 'border-box',
    height: 25,
    backgroundColor: '#bbb',
    margin: '0 auto',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  fakeScreen: {
    backgroundColor: '#151515',
    boxSizing: 'border-box',
    width: 550,
    margin: '0 auto',
    padding: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  fakeMinimize: {
    left: 11,
    backgroundColor: '#ffc100',
    borderColor: '#9d802c',
  },
  fakeZoom: {
    left: 16,
    backgroundColor: '#00d742',
    borderColor: '#049931',
  },
  fakeClose: {
    backgroundColor: '#00d742',
    borderColor: '#049931',
  }
})

class Terminal extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <div className={classes.fakeMenu}>
          <div className={[classes.fakeButtons, classes.fakeClose]}></div>
          <div className={[classes.fakeButtons, classes.fakeMinimize]}></div>
          <div className={[classes.fakeButtons, classes.fakeZoom]}></div>
        </div>
        <div className={classes.fakeScreen}>

        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Terminal)