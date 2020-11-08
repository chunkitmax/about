import React, { Component } from 'react'
import { Typography, Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types'
import Particles from 'react-particles-js';


const CoverStyles = {
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
    background: 'linear-gradient(to right, #51FF97 0%, #0600ff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0px 0px 30px rgb(0,0,0), 0px 0px 10px rgba(255, 255, 255, 0.4)',
    filter: 'brightness(1.5)'
  },
  fade: {
    transition: 'opacity 1s ease-in-out'
  },
  main: {
    height: '100vh',
    zIndex: 3,
    boxShadow: 'inset 0px 0px 30px 2px rgba(0,0,0, 0.6)'
  },
  particleBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    zIndex: -1,
    clipPath: 'polygon(0px 0px, 100% 0%, 100% 90vh, 0px 100vh)',
    WebkitClipPath: 'polygon(0px 0px, 100% 0%, 100% 90vh, 0px 100vh)'
  }
}
class Cover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appearing: true,
      info: {}
    }
    this.info = {
      name: 'Peter Lau',
      title: 'Computer Engineer',
      area: 'Robotics • Software Development'
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const prevIsVisible = (prevProps.isVisible === undefined)? true : prevProps.isVisible
    const curIsVisible = (this.props.isVisible === undefined)? true : this.props.isVisible
    if ((!prevIsVisible && curIsVisible) || this.state.appearing) {
      this.setState({ appearing: false, info: {} })
      if (this.effectTimer)
        clearInterval(this.effectTimer)
      this.effectTimer = setInterval(this.typingEffect.bind(this), 40)
    } else if (prevIsVisible && !curIsVisible) {
      this.setState({ info: {} })
      if (this.effectTimer)
        clearInterval(this.effectTimer)
    }
  }
  componentWillUnmount() {
    if (this.effectTimer)
      clearInterval(this.effectTimer)
  }
  typingEffect() {
    if (this.state.info.name !== this.info.name) {
      let name = this.state.info.name? this.state.info.name : ''
      name += this.info.name[name.length]
      this.setState({ info: { ...this.state.info,  name } })
    } else if (this.state.info.title !== this.info.title) {
      let title = this.state.info.title? this.state.info.title : ''
      title += this.info.title[title.length]
      this.setState({ info: { ...this.state.info,  title } })
    } else if (this.state.info.area !== this.info.area) {
      let area = this.state.info.area? this.state.info.area : ''
      area += this.info.area[area.length]
      this.setState({ info: { ...this.state.info,  area } })
    } else {
      if (this.effectTimer)
        clearInterval(this.effectTimer)
    }
  }
  render() {
    const { classes } = this.props
    const isVisible = (this.props.isVisible === undefined)? true : this.props.isVisible
    const opacityStyle = { opacity: isVisible+0 }
    return (
      <div>
        <Grid
          container
          item
          direction="column"
          justify="center"
          alignItems="center"
          ref="coverContent"
          className={classes.main}
        >
          <Grid
            item
          >
            <Typography
              variant="h6"
              color='textPrimary'
              align='center'
              className={classes.fade}
              gutterBottom
              style={{...opacityStyle}}
            >
              Hi, I am
            </Typography>
            <Typography
              variant="h1"
              color='textPrimary'
              align='center'
              className={`${classes.nameTypo} ${classes.fade}`}
              style={{...opacityStyle}}
            >
              {(this.state.info.name? this.state.info.name : '')}
              <span style={{textShadow: 'none'}}>{((this.state.info.name !== this.info.name && this.state.info.name && this.state.info.name.length)? '▋' : '')}</span>
            </Typography>
            <Typography
              variant="h5"
              color='textPrimary'
              align='center'
              className={classes.fade}
              gutterBottom
              style={{...opacityStyle}}
            >
              {(this.state.info.title? this.state.info.title : '')}
              <span style={{textShadow: 'none'}}>{((this.state.info.title !== this.info.title && this.state.info.title && this.state.info.title.length)? '▋' : '')}</span>
            </Typography>
            <Typography
              variant="subtitle2"
              color='textPrimary'
              align='center'
              className={classes.fade}
              style={{color: '#bbb', ...opacityStyle}}
            >
              {(this.state.info.area? this.state.info.area : '')}
              <span style={{textShadow: 'none'}}>{((this.state.info.area !== this.info.area && this.state.info.area && this.state.info.area.length)? '▋' : '')}</span>
            </Typography>
            {/* <Hidden smDown>
              <MiniTerminal width={500} height={300} show={this.state.info.area === this.info.area} maxNumOfLine={5} maxNumOfChar={20}/>
            </Hidden> */}
          </Grid>
        </Grid>
        <Particles
          className={classes.particleBg}
          params={{
            "particles": {
              "number": {
                "value":160,
                "density": {
                  "enable":true,
                  "value_area":800
                }
              },
              "color": {
                "value":"#ffffff"
              },
              "shape": {
                "type":"circle",
                "stroke":{
                  "width":0,
                  "color":"#000000"
                },
                "polygon":{
                  "nb_sides":5
                },
                // "image":{
                //   "src":"img/github.svg",
                //   "width":100,
                //   "height":100
                // }
              },
              "opacity":{
                "value":1,
                "random":true,
                "anim":{
                  "enable":true,
                  "speed":1,
                  "opacity_min":0,
                  "sync":false
                }
              },
              "size":{
                "value":3,
                "random":true,
                "anim":{
                  "enable":false,
                  "speed":4,
                  "size_min": 0.3, "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                 "opacity": 0.4,
                  "width": 1
              },
              "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 600
                }
              }
            },
            //  "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3 }, "repulse": { "distance": 400, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true
          }}
        />
      </div>
    )
  }
}
Cover.protoTypes = {
  isVisible: PropTypes.bool
}
export default withStyles(CoverStyles)(Cover)
