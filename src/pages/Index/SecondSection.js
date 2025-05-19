import React, { Component } from 'react'
import { Grid, Typography, Avatar, withStyles, Button, createMuiTheme } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { SaveAlt } from '@material-ui/icons';
import TrackVisibility from 'react-on-screen';
import { ThemeProvider } from '@material-ui/styles';

const buttonTheme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(23, 95, 227, 0.85)',
      contrastText: '#fff'
    }
  }
})

const styles = () => ({
  slidingBackground: {
    position: 'relative',
    width: '100vw',
    backgroundPosition: 'center',
    backgroundAttachment: 'scroll',
    backgroundSize: 'cover',
    WebkitBackgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    boxShadow: 'inset 0px 20px 10px -10px rgba(0,0,0, 0.6),inset 0px -20px 10px -10px rgba(0,0,0, 0.6)',
    zIndex: -1
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.4)'
  },
  bringToTop: {
    zIndex: 1000
  }
})

class SecondSection extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { classes, width } = this.props
    return (
      <>
        <ParallaxProvider>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={`${classes.slidingBackground} ${classes.bringToTop}`}
            style={{
              minHeight: isWidthUp('sm', width)? (isWidthUp('lg', width)? '50vh' : '30vh') : '40vh',
              // paddingTop: isWidthUp('sm', width)? (isWidthUp('lg', width)? '25vh' : '15vh') : '20vh',
              // paddingBottom: isWidthUp('sm', width)? (isWidthUp('lg', width)? '25vh' : '15vh') : '20vh',
              paddingTop: 'auto',
              paddingBottom: 'auto',
              backgroundImage: `url("${process.env.PUBLIC_URL}/res/img/background_small.jpg")`
            }}
          >
            <div className={classes.overlay} />
            <ThemeProvider theme={buttonTheme}>
              <Grid
                item
                container
                direction="column"
                justify="center"
                alignItems="center"
                alignContent="center"
                className={classes.bringToTop}
                style={{marginTop: '8vh', marginBottom: '8vh', maxWidth: 1920}}
              >
                <Grid
                  item
                  xs
                >
                  <Avatar
                    alt="Petel__"
                    src={`${process.env.PUBLIC_URL}/res/img/cover2.jpg`}
                    style={{
                      // width: isWidthUp('sm', width)? (isWidthUp('lg', width)? 500 : 250 ): 200,
                      // height: isWidthUp('sm', width)? (isWidthUp('lg', width)? 500 : 250 ): 200
                      width: '40vh',
                      height: '40vh',
                      maxWidth: 1920,
                      maxHeight: 1920,
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs
                  style={{marginTop: 10}}
                >
                  <Button variant="contained" size="large" color="primary" className={classes.bringToTop} href={`${process.env.PUBLIC_URL}/res/doc/PeterLau_resume_20250519.pdf`} download target="_blank">
                    <SaveAlt style={{marginRight: 10}}/>
                     Download CV
                  </Button>
                </Grid>
              </Grid>
            </ThemeProvider>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{
              backgroundImage: 'linear-gradient(to bottom, #292929 10%, #000)'
            }}
          >
            <Grid item container direction="row" justify="flex-start">
              <Grid
                item
                xs={isWidthUp('sm', width)? 7 : null}
                style={{
                  marginTop: 30,
                  padding: 15
                }}
              >
                <Parallax
                  x={['14%', '0%']}
                  disabled={!isWidthUp('sm', width)}
                >
                  {/* <Typography variant={isWidthUp('md', width)? "h4" : "h5"} color="primary" align="left">
                    I am an ISTJ {new Date(new Date() - new Date('1995-11-25')).getFullYear() - 1970}-year-old "boy", <br />
                    robotics enthusiast...
                  </Typography> */}
                  <Typography variant={isWidthUp('md', width)? "h4" : "h5"} color="primary" align="left">
                    I am a robotics enthusiast...
                  </Typography>
                </Parallax>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  padding: 10
                }}
              >
                <Parallax
                  x={['-9%', '0%']}
                  disabled={!isWidthUp('sm', width)}
                >
                  <Typography variant={isWidthUp('md', width)? "h6" : "subtitle2"} color="primary" align="right">
                      who loves programming and engineering. <br />
                    I got my BEng in Computer Engineering from Hong Kong University of Science and Technology in 2018.
                  </Typography>
                </Parallax>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              item
              xs={12}
              style={{marginTop: '10vh'}}
            >
              <Grid item xs={12}>
                <Typography variant="h3" color="primary" style={{fontFamily: 'Poppins'}}>My Hobbies</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                style={{
                  marginTop: 60,
                  marginBottom: '30vh'
                }}
              >
                <Grid item xs={isWidthUp('md', width)? (isWidthUp('lg', width)? (isWidthUp('xl', width)? 2 : 3): 4) : 6}>
                  <TrackVisibility>
                    {({ isVisible }) => (
                      <div className={isVisible? 'bounceIn': ''}>
                        <img src={`${process.env.PUBLIC_URL}/res/img/mountain.svg`} width={80} height={80} alt="Hiking" />
                        <Typography color="primary" variant={isWidthUp('md', width)? "h6" : "subtitle2"} align="center">
                          Hiking
                        </Typography>
                      </div>
                    )}
                  </TrackVisibility>
                </Grid>
                <Grid item xs={isWidthUp('md', width)? (isWidthUp('lg', width)? (isWidthUp('xl', width)? 2 : 3): 4) : 6}>
                  <TrackVisibility>
                    {({ isVisible }) => (
                      <div className={isVisible? 'bounceIn': ''}>
                        <img src={`${process.env.PUBLIC_URL}/res/img/cycling2.svg`} width={80} height={80} alt="Cycling" />
                        <Typography color="primary" variant={isWidthUp('md', width)? "h6" : "subtitle2"} align="center">
                          Cycling
                        </Typography>
                      </div>
                    )}
                  </TrackVisibility>
                </Grid>
                <Grid item xs={isWidthUp('md', width)? (isWidthUp('lg', width)? (isWidthUp('xl', width)? 2 : 3): 4) : 6}>
                  <TrackVisibility>
                    {({ isVisible }) => (
                      <div className={isVisible? 'bounceIn': ''}>
                        <img src={`${process.env.PUBLIC_URL}/res/img/dumbbell.svg`} width={80} height={80} alt="Weight Training" />
                        <Typography color="primary" variant={isWidthUp('md', width)? "h6" : "subtitle2"} align="center">
                          Weight Training
                        </Typography>
                      </div>
                    )}
                  </TrackVisibility>
                </Grid>
                <Grid item xs={isWidthUp('md', width)? (isWidthUp('lg', width)? (isWidthUp('xl', width)? 2 : 3): 4) : 6}>
                  <TrackVisibility>
                    {({ isVisible }) => (
                      <div className={isVisible? 'bounceIn': ''}>
                        <img src={`${process.env.PUBLIC_URL}/res/img/coding.svg`} width={80} height={80} alt="Coding" />
                        <Typography color="primary" variant={isWidthUp('md', width)? "h6" : "subtitle2"} align="center">
                          Coding
                        </Typography>
                        <Typography color="primary" style={{color: '#777'}} variant="subtitle2" align="center">
                          (Yup It is my hobby)
                        </Typography>
                      </div>
                    )}
                  </TrackVisibility>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ParallaxProvider>
      </>
    )
  }
}

export default withWidth()(withStyles(styles)(SecondSection))