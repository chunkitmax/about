import React, { Component } from "react";
import { Grid, Typography, LinearProgress, Badge } from "@material-ui/core";
import withWidth, { isWidthUp, isWidthDown } from '@material-ui/core/withWidth';
import PropTypes from 'prop-types'
import { withStyles } from "@material-ui/styles";
import { darken, createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import '../App.css'

const iconSize = 32
const iconPadding = 30
const iconTotalSize = iconSize+iconPadding*2
const contentPadding = 10

const styles = theme => ({
  icon: {
    padding: iconPadding,
    width: iconSize,
    height: iconSize,
    clipPath: 'polygon(50% 0%, 96% 25%, 96% 75%, 50% 100%, 4% 75%, 4% 25%)',
    WebkitClipPath: 'polygon(50% 0%, 96% 25%, 96% 75%, 50% 100%, 4% 75%, 4% 25%)'
  },
  contentBorder: {
    marginTop: -50,
    padding: contentPadding,
    paddingTop: 65,
    paddingBottom: 30,
    border: '2px solid #fff',
    borderRadius: 10,
    background: 'transparent'
  },
  title: {
    fontFamily: 'Quicksand,Arial,sans-serif',
    fontWeight: 700
  },
  content: {
    fontFamily: 'Quicksand,Arial,sans-serif',
    marginTop: 30
  }
})

const badgeTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#117b33',
      contrastText: '#fff'
    },
    secondary: {
      main: '#700',
      contrastText: '#fff'
    },
    text: {
      primary: '#fff',
      secondary: '#ccc'
    }
  }
})

class SkillBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boardStopPtL: 0,
      boardStopPtR: 0
    }
  }
  componentDidMount() {
    this.updateSizing(false)
    window.addEventListener('resize', this.scheduleUpdate.bind(this))
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.scheduleUpdate.bind(this))
  }
  scheduleUpdate() {
    if (this.updateTimer) {
      clearTimeout(this.updateTimer)
    }
    this.updateTimer = setTimeout(_ => this.updateSizing(), 100)
  }
  updateSizing(update=true) {
    if (this.refs && this.refs.contentBorder) {
      let { width } = this.refs.contentBorder.getBoundingClientRect()
      if (width !== 0) {
        let tmpWidth = Math.max(iconTotalSize, Math.floor(width))
        let boardStopPtL = (tmpWidth-iconTotalSize)/2-10,
            boardStopPtR =  tmpWidth-boardStopPtL
        this.setState({
          boardStopPtL,
          boardStopPtR
        })
        return
      }
    }
    this.scheduleUpdate()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.width !== this.props.width) {
      this.updateSizing()
    }
  }
  renderSkills() {
    return (this.props.skills || []).filter(skill => skill.name && skill.color && (skill.level || skill.noLevel !== undefined)).map(skill => (
        <Grid key={skill.name} item xs={12}>
          <MuiThemeProvider theme={badgeTheme}>
            <Badge
              color={skill.badge === 'new'? "primary" : "secondary"}
              badgeContent={skill.badge || ''}
              invisible={!skill.badge}
              style={{margin: 10}}
            >
              <Typography variant="subtitle2" style={{paddingRight: skill.badge? 15 : 0}}>{skill.name}</Typography>
            </Badge>
          </MuiThemeProvider>
          {React.createElement(
            BorderLinearProgress(skill.color, skill.noLevel),
            {
              variant: 'determinate',
              value: skill.noLevel? 0 : skill.level*100
            }
          )}
        </Grid>
    ))
  }
  render() {
    const { classes } = this.props
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        // hidden={this.props.isVisible !== undefined && !this.props.isVisible}
        className={`animated ${this.props.isVisible? 'fadeInDown': ''}`}
        style={{
          paddingTop: isWidthDown('xs', this.props.width)? 30 : 'inherit'
        }}
      >
        <Grid
          item
          xs={12}
        >
          {React.cloneElement(
            this.props.icon,
            {
              className: classes.icon,
              style: {
                background: this.props.color,
              }
            }
          )}
        </Grid>
        <Grid
          ref="contentBorder"
          item
          xs={12}
          container
          justify="flex-start"
          alignItems="center"
          style={{
            width: isNaN(this.props.boardWidth)? this.props.boardWidth : Math.max(this.props.boardWidth, iconTotalSize),
            height: this.props.height || null,
            clipPath: `polygon(0% 0%, ${this.state.boardStopPtL}px 0%, ${this.state.boardStopPtL}px 10px, ${this.state.boardStopPtR}px 10px, ${this.state.boardStopPtR}px 0%, 100% 0%, 100% 100%, 0% 100%)`,
            WebkitClipPath: `polygon(0% 0%, ${this.state.boardStopPtL}px 0%, ${this.state.boardStopPtL}px 10px, ${this.state.boardStopPtR}px 10px, ${this.state.boardStopPtR}px 0%, 100% 0%, 100% 100%, 0% 100%)`,
          }}
          className={classes.contentBorder}
        >
          {/* <Paper>
            <Typography variant="h6" align="center">Hiking</Typography>
          </Paper> */}
          <Grid
            item
            xs={12}
          >
            <Typography
              variant="h6"
              align="center"
              className={classes.title}
            >
              {this.props.title}
            </Typography>
            <Typography
              variant={isWidthUp('md', this.props.width)? "h6" : "subtitle2"}
              align="center"
              className={classes.content}
            >
              {this.props.content.match(/(\n|.+)/g).map((v, i) => v === '\n'? (<br key={i}/>) : v)}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
            style={{
              width: '100%',
              marginTop: 25
            }}
          >
            {this.renderSkills()}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
SkillBoard.propTypes = {
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  boardWidth: PropTypes.any.isRequired,
  skills: PropTypes.array,
  height: PropTypes.number,
  isVisible: PropTypes.bool
}

export default withWidth()(withStyles(styles)(SkillBoard))

const BorderLinearProgress = (color, noLevel=false) => withStyles({
  root: {
    height: 10,
    // backgroundColor: lighten(color, 0.7),
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: darken(color, 0.5),
    borderStyle: 'solid',
    borderRadius: 10
  },
  bar: {
    borderRadius: 20,
    backgroundColor: noLevel? darken(color, 0.5) : color
  }
})(LinearProgress)