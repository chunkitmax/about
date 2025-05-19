import React, { Component } from 'react'
import { Grid, Button, Typography, List, ListItem, Hidden } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { withStyles, withTheme } from '@material-ui/core/styles'
import MiniTerminal from '../components/MiniTerminal'

const CoverHeight = 900

const styles = theme => ({
  cover: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: CoverHeight,
    objectFit: 'cover',
    filter: 'brightness(70%) saturate(100%)'
  },
  onCover: {
    color: 'white',
    top: 150,
  },
  nameTypo: {
    // borderTop: '1px solid',
    // borderColor: 'white',
    // borderBottom: '1px solid',
    // paddingTop: 10,
    wordSpacing: 2,
    letterSpacing: -4,
    // transform: 'scale(1.2, 1.0)',
    paddingLeft: 10,
    paddingRight: 10,
    background: 'linear-gradient(to right, #51FF97 0%, #5265f8 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0px 0px 30px rgb(0,0,0), 0px 0px 8px rgba(255, 255, 255, 0.6)'
  },
  slidingBackground: {
    position: 'relative',
    height: '20vh',
    width: '100vw',
    background: `url("${process.env.PUBLIC_URL}/res/img/background.jpg") no-repeat center center fixed`,
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    WebkitBackgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.1)'
  }
})

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coverContentHeight: 0
    }
  }
  // updateCoverContent() {
  //   setTimeout(_ => {
  //     // console.log(this.refs.cover.clientHeight, this.refs.coverContent.getBoundingClientRect().top)
  //     this.setState({ coverContentHeight: this.refs.cover.clientHeight - this.refs.coverContent.getBoundingClientRect().top })
  //   }, 1)
  // }
  componentDidMount() {
    // this.updateCoverContent()
    // window.addEventListener("resize", this.updateCoverContent.bind(this))
  }
  render() {
    const { classes } = this.props
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
      >
        <img ref="cover" className={classes.cover} src={`${process.env.PUBLIC_URL}/res/img/cover2.jpg`} alt="cover"/>
        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="center"
          ref="coverContent"
          style={{height: CoverHeight/*this.state.coverContentHeight*/, zIndex: 3, boxShadow: 'inset 0px 0px 30px 2px rgba(0,0,0, 0.6)'/*, boxShadow: 'inset 0px 0px 137px 32px rgb(0,0,0)'*/}}
        >
          {/* <Grid
            item
          >
            <Typography variant="h6" color='textPrimary' style={{fontStyle: 'italic', fontFamily: 'sans-serif'}}>Hi, I'm</Typography>
          </Grid> */}
          <Grid
            item
          >
            <Typography variant="h1" color='textPrimary' align='center' className={classes.nameTypo}>Peter Lau</Typography>
            <Typography variant="h5" color='textPrimary' align='center' gutterBottom>Computer Engineer</Typography>
            <Typography variant="subtitle2" color='textPrimary' align='center' style={{color: '#bbb'}}>Robotics • Web Development</Typography>
          </Grid>
        </Grid>

        <Hidden smDown>
          <MiniTerminal width={800} height={300} maxNumOfLine={5} maxNumOfChar={20}/>
        </Hidden>

        <Grid
          item
          container
        >
          <div className={classes.slidingBackground}>
            <div className={classes.overlay} />
            <Grid
              container
              justify="center"
              alignItems="center"
            >
            </Grid>
          </div>
        </Grid>

        <Grid
          item
          container
        >
          <div style={{background: '#333', height: '100vh', width: '100vw'}} />
        </Grid>

      </Grid>
    )
  }
}

export default withTheme(withStyles(styles)(Index))