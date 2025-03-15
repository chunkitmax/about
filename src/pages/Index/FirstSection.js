import React, { Component } from 'react'
import { Typography, Grid, Box } from '@material-ui/core';
import { Parallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  banner: {
    height: '40vh',
    clipPath: 'polygon(0px 20%, 100% 0%, 100% 80%, 0 100%)',
    WebkitClipPath: 'polygon(0px 20%, 100% 0%, 100% 80%, 0 100%)',
    filter: 'brightness(70%)'
  },
  main: {
    backgroundImage: 'linear-gradient(to bottom, #000 60%, #292929)',
    padding: '10%',
  },
  bigIcon: {
    height: '100%', maxHeight: 300
  }
})

class FirstSection extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { classes } = this.props
    return (
      <>
        <ParallaxProvider>
            <ParallaxBanner
              layers={[
                {
                  image: `${process.env.PUBLIC_URL}/res/img/cover2_.jpg`,
                  amount: isWidthUp('md', this.props.width)? 1.0 : 0.6
                }
              ]}
              className={classes.banner}
            >
              <Grid
                container
                justify="center"
                alignItems="center"
                style={{
                  height: '100%'
                }}
              >
                <Typography
                  variant="h2"
                  color="textPrimary"
                  style={{
                    zIndex: 1,
                    textShadow: '0px 0px 30px #000'
                  }}
                >
                  About
                </Typography>
              </Grid>
            </ParallaxBanner>
        </ParallaxProvider>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          style={{
            height: isWidthUp('md', this.props.width)? '5vh' : '5vh',
            margin: '10vh',
            marginLeft: '10%',
            marginRight: '10%'
          }}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <ParallaxProvider>
              <Grid
                xs
                item
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid
                  item
                  container
                  justify="center"
                  alignItems="center"
                >
                  <Typography
                    variant="h4"
                    color="textPrimary"
                  >
                    <Box m={1}>I am a </Box>
                  </Typography>
                  <Grid
                    item
                  >
                    <Grid
                      item
                      style={{padding: 10}}
                    >
                      <Parallax
                        y={isWidthUp('md', this.props.width)? ['100%', '-100%'] : ['130%', '-130%']}
                        // disabled={!isWidthUp('sm', this.props.width)}
                        styleInner={{textAlign: 'start'}}
                      >
                        <Typography
                          variant="h4"
                          color="textPrimary"
                        >
                          gamer
                        </Typography>
                      </Parallax>
                    </Grid>
                    <Grid
                      item
                      style={{padding: 10}}
                    >
                      <Parallax
                        y={isWidthUp('md', this.props.width)? ['100%', '-100%'] : ['130%', '-130%']}
                        // disabled={!isWidthUp('sm', this.props.width)}
                        styleInner={{textAlign: 'start'}}
                      >
                        <Typography
                          variant="h4"
                          color="textPrimary"
                        >
                          programmer
                        </Typography>
                      </Parallax>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

            </ParallaxProvider>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.main}
          style={{
            // paddingBottom: isWidthUp('sm', this.props.width)? '35%' : '50%'
            height: '115vh'
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: '50vh'
            }}
          >
            <img
              className={classes.bigIcon}
              src={`${process.env.PUBLIC_URL}/res/img/video_game.svg`}
              width={isWidthUp('md', this.props.width)? (isWidthUp('lg', this.props.width, true)? 320 : 160) : 80}
              height={isWidthUp('md', this.props.width)? (isWidthUp('lg', this.props.width, true)? 320 : 160) : 80}
              alt=""
            />
          </Grid>
          <ParallaxProvider>
            <Grid
              xs={12}
              item
              container
              style={{height: '50vh'}}
            >
              <Parallax
                // y={isWidthDown('xs', this.props.width)? ['-10%', '30%'] : (isWidthDown('sm', this.props.width)? ['-40%', '70%'] : (isWidthDown('md', this.props.width)? ['-20%', '70%'] : ['-0%', '100%']))}
                y={['-30%', '40%']}
              >
                <Typography
                  variant={isWidthUp('md', this.props.width)? 'h5' : 'subtitle2'}
                  color="textPrimary"
                  align="left"
                >
                  My coding journey began {(new Date()).getFullYear() - 2010} years ago when I was in 9th grade<br /><br />
                  I was obsessed with PC games and had never considered programming—until the moment I became invincible in a game using Cheat Engine. That experience sparked my curiosity, and the thrill of breaking seemingly unbreakable systems became an obsession.<br /><br />
                  Driven by this fascination, I quickly dived into programming, building my own tools to hack games and even explore the Windows system kernel.<br /><br />
                  Looking back, it was this relentless curiosity and hands-on exploration that ultimately shaped me into the software engineer I am today.
                  {/* I was obessed with PC games and had never thought of programming
                  until my first time being invincible in a game using Cheat Engine. <br /><br />
                  The feeling of hacking something seems unbreakable is always fascinating me.
                  Therefore, I soon started programming and building tools for myself to hack games and (Windows) system kernel. */}
                </Typography>
              </Parallax>
            </Grid>
          </ParallaxProvider>
        </Grid>
      </>
    )
  }
}

export default withStyles(styles)(withWidth()(FirstSection))
