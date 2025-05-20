import React, { Component } from 'react'
import { Grid, Typography, Link, Fab } from '@material-ui/core'
import { withController } from 'react-scroll-parallax'
import TrackVisibility from 'react-on-screen'
import { withTheme, withStyles } from '@material-ui/core/styles'
import FirstSection from './FirstSection';
import Cover from './Cover';
import SecondSection from './SecondSection';
import withWidth from '@material-ui/core/withWidth';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
// import GitHubCalendar from 'react-github-calendar'
// import ReactTooltip from 'react-tooltip'
import { KeyboardArrowUp } from '@material-ui/icons'

const CoverHeight = 900

// const githubThemeColor = 'rgba(32, 132, 255, 0.6)'

const styles = () => ({
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
  main: {
    height: '100vh',
    zIndex: 3,
    boxShadow: 'inset 0px 0px 30px 2px rgba(0,0,0, 0.6)'
  },
  linkButton: {
    textDecoration: "none !important"
  }
})

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fabAppear: false
    }
    // console.log(props.history)
    // this.comp1026Ref = createRef()
    this.openComp2016 = this.props.history.location.hash === '#2016_comp'
    this.props.history.replace('/about')
  }
  componentDidMount() {
    setImmediate(() => {
      if (this.openComp2016) {
        document.getElementById('2016_comp').scrollIntoView({ smooth: true, block: 'start' })
      } else {
        window.scrollTo(0, 0)
      }
    })
  }

  componentDidUpdate() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('transitionend', this.handleScroll.bind(this));
  }

  handleScroll() {
    if (this.scrollTimer) {
      clearTimeout(this.scrollTimer)
    }
    this.scrollTimer = setTimeout(() => {
      if (window.scrollY > window.innerHeight) {
        this.setState({ fabAppear: true })
      } else {
        this.setState({ fabAppear: false })
      }
    }, 100)
  }

  render() {
    const { classes } = this.props
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        <Grid
          container
          item
          direction="row"
          justify="center"
          alignItems="center"
          ref="coverContent"
          className={classes.main}
        >
          <Grid
            item
          >
            <TrackVisibility partialVisibility once><Cover /></TrackVisibility>
          </Grid>
        </Grid>

        <Grid
          item
          container
        >
          <FirstSection/>
        </Grid>

        <Grid
          item
          container
        >
          <SecondSection/>
        </Grid>

        <Grid
          item
          container
        >
          <ThirdSection openComp2016={this.openComp2016} />
        </Grid>

        <Grid
          item
          container
        >
          <FourthSection/>
        </Grid>

        {/* <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
          >
            <Typography variant="h5" color="primary">
              My Contribution on GitHub
            </Typography>
          </Grid>
          <Grid
            item
          >
            <GitHubCalendar
              username="chunkitmax"
              theme={{
                background: 'transparent',
                text: '#fff',
                grade4: lighten(githubThemeColor, 1.0),
                grade3: lighten(githubThemeColor, 0.7),
                grade2: lighten(githubThemeColor, 0.4),
                grade1: githubThemeColor,
                grade0: '#555555aa'
              }}
            >
              <ReactTooltip delayShow={50} html />
            </GitHubCalendar>
          </Grid>
        </Grid> */}

        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{padding: '10vw'}}
        >
          <Grid xs={12} item><Typography variant="h3" color="primary" style={{fontFamily: 'Poppins', marginBottom: 15}}>Contact</Typography></Grid>
          <Grid xs item>
            <Link href="https://github.com/chunkitmax" target='_blank' color="primary" className={classes.linkButton}>
              <img src={`${process.env.PUBLIC_URL}/res/img/github.svg`} alt="Github" width={48} height={48} style={{padding: 10}}/><br/>
              Petel__
            </Link>
          </Grid>
          {/* <Grid xs item>
            <Link href="https://www.facebook.com/chunkitmax" color="primary" className={classes.linkButton}>
              <img src={`${process.env.PUBLIC_URL}/res/img/facebook.svg`} alt="Facebook" width={48} height={48} style={{padding: 10}}/><br/>
              Peter Lau
            </Link>
          </Grid> */}
          <Grid xs item>
            <Link href="mailto:petelauck@gmail.com" target='_blank' color="primary" className={classes.linkButton}>
              <img src={`${process.env.PUBLIC_URL}/res/img/gmail.svg`} alt="Gmail" width={48} height={48} style={{padding: 10}}/><br/>
              petelauck
            </Link>
          </Grid>
          <Grid xs item>
            <Link href="https://www.linkedin.com/in/chun-kit-lau-774099115" target='_blank' color="primary" className={classes.linkButton}>
              <img src={`${process.env.PUBLIC_URL}/res/img/linkedin.svg`} alt="Gmail" width={48} height={48} style={{padding: 10}}/><br/>
              Chun Kit Lau
            </Link>
          </Grid>
        </Grid>

        <Grid
          item
          container
        >
          <Typography variant="body2" style={{color: '#444444'}}>Updated on 20-May-2025</Typography>
        </Grid>

        <Fab
          color="primary"
          aria-label="add"
          size="small"
          style={{
            position: 'fixed',
            right: '10px', bottom: '10px',
            zIndex: 9999,
            color: 'black',
            backgroundColor: '#3795e6f0',
            display: window.scrollY < window.innerHeight? 'none': undefined
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <KeyboardArrowUp />
        </Fab>

      </Grid>
    )
  }
}

export default withWidth()(withController(withTheme(withStyles(styles)(Index))))