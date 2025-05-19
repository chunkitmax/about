import React, { Component } from 'react'
import { Grid, Typography, Chip, Divider, Button } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import SkillBoard from '../../components/SkillBoard';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { withStyles } from '@material-ui/styles';
import TrackVisibility from 'react-on-screen';
import VideoModal from '../../components/VideoModal';

const styles = () => ({
  timelineIcon: {
    display: 'block',
    width: 32,
    height: 32,
    marginLeft: -16,
    marginTop: -16,
    left: '50%',
    top: '50%',
    position: 'relative'
  },
  timelineLine: {
    "&::before": {
      background: 'linear-gradient(to bottom, #999 0%, #999 95%, transparent 100%)'
    }
  },
  timelineIconSpan: {
    boxShadow: '0 0 0 4px #eee,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05) !important'
  },
  timelineContent: {
    background: 'none',
    boxShadow: '0 0px 5px 1px #888',
    border: '1px #fff solid',
    borderRadius: '10px'
  },
  chip: {
    margin: 3,
  },
  banner: {
    height: '40vh',
    clipPath: 'polygon(0px 0%, 100% 20%, 100% 100%, 0 80%)',
    WebkitClipPath: 'polygon(0px 0%, 100% 20%, 100% 100%, 0 80%)',
    filter: 'brightness(70%)'
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontWeight: 'bolder',
    marginBottom: 20
  },
  divider: {
    marginTop: 20,
    marginBottom: 10,
    background: '#ffffffaa'
  },
  organization: {
    fontWeight: 'bold'
  }
})

class ThirdSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoOpen_2016Comp: props.openComp2016,
    }
  }
  render() {
    const { width, classes } = this.props
    return (
      <>
        <ParallaxProvider>
            <ParallaxBanner
              layers={[
                {
                  image: `${process.env.PUBLIC_URL}/res/img/switzerland_1_small.jpg`,
                  amount: 1
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
                  Skills {'&'} Experience
                </Typography>
              </Grid>
            </ParallaxBanner>
        </ParallaxProvider>
        <VideoModal open={this.state.videoOpen_2016Comp} onClose={() => this.setState({ videoOpen_2016Comp: false })} url={`${process.env.PUBLIC_URL}/res/vid/VID-20160718.mp4`} />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{
            marginTop: '10vh',
            backgroundImage: 'linear-gradient(to bottom, #000 30%, #292929 80%)',
            color: 'white'
          }}
        >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={isWidthUp('sm', width)? 1 : 0}
            item
            xs={12}
            style={{marginTop: 20, padding: 2}}
          >
            <Grid item xs={isWidthUp('sm', width)? (isWidthUp('md', width)? (isWidthUp('lg', width)? (isWidthUp('xl', width)? 'auto' : 3): 4) : 6) : 12}>
              <TrackVisibility partialVisibility>
                <SkillBoard
                  icon={<img src={`${process.env.PUBLIC_URL}/res/img/html.svg`} alt="Web"/>}
                  color="#2fb2d0"
                  boardWidth={isWidthUp('md', width)? 350 : '100%'}
                  title="Web"
                  content={`Proficient in both front-end and back-end web development, with a strong preference for back-end data management.\n\nSkilled in React.js for front-end development and Node.js for back-end solutions.`}
                  skills={[
                    { name: 'HTML & CSS', level: 0.75, color: '#e34c26' },
                    { name: 'JavaScript (ES8)', level: 0.9, color: '#f1e05a' },
                    { name: 'Node.js', level: 0.9, color: '#689f63' },
                    { name: 'React', level: 0.78, color: '#61dafb' },
                    { name: 'TypeScript', level: 0.75, color: '#2b7489' },
                    { name: 'PHP', level: 0.2, color: '#4F5D95' }
                  ]}
                />
              </TrackVisibility>
            </Grid>
            <Grid item xs={isWidthUp('sm', width)? (isWidthUp('md', width)? (isWidthUp('lg', width)? (isWidthUp('xl', width)? 'auto' : 3): 4) : 6) : 12}>
              <TrackVisibility partialVisibility>
                <SkillBoard
                  icon={<img src={`${process.env.PUBLIC_URL}/res/img/MCU.svg`} alt="Embedded System / Robotics"/>}
                  color="rgb(185, 151, 30)"
                  boardWidth={isWidthUp('md', width)? 350 : '100%'}
                  title="Embedded System / Robotics"
                  content={`Proven experience developing embedded software for ARM Cortex-M0 and Cortex-M3 platforms.\n\nPractical expertise in PID and Fuzzy Logic PD controller tuning for inverted pendulum systems.\n\nParticipated in the implementation of SLAM for basic path planning in a ROS-based application.`}
                  skills={[
                    { name: 'C/C++', level: 0.8, color: '#f34b7d' },
                    { name: 'Robotics Operating System (ROS)', level: 0.7, color: '#ddd' },
                    // { name: 'Rust', level: 0.6, color: '#f05033', badge: 'new' },
                  ]}
                />
              </TrackVisibility>
            </Grid>
            <Grid item xs={isWidthUp('sm', width)? (isWidthUp('md', width)? (isWidthUp('lg', width)? (isWidthUp('xl', width)? 'auto' : 3): 4) : 6) : 12}>
              <TrackVisibility partialVisibility>
                <SkillBoard
                  icon={<img src={`${process.env.PUBLIC_URL}/res/img/neural_net.svg`} alt="Machine Learning"/>}
                  color="rgb(22, 168, 126)"
                  boardWidth={isWidthUp('md', width)? 350 : '100%'}
                  title="Machine Learning"
                  content="Continuously monitor state-of-the-art machine learning techniques."
                  skills={[
                    { name: 'Python', level: 0.83, color: '#3572A5' },
                    { name: 'Keras (Backend: TF)', level: 0.6, color: '#d00000' },
                    { name: 'Tensorflow', level: 0.57, color: '#ff8f00' },
                    { name: 'PyTorch', level: 0.41, color: '#e93f27' },
                  ]}
                />
              </TrackVisibility>
            </Grid>
            <Grid item xs={isWidthUp('sm', width)? (isWidthUp('md', width)? (isWidthUp('lg', width)? (isWidthUp('xl', width)? 'auto' : 3): 4) : 6) : 12}>
              <TrackVisibility partialVisibility>
                <SkillBoard
                  icon={<img src={`${process.env.PUBLIC_URL}/res/img/android.svg`} alt="Android"/>}
                  color="rgb(175, 63, 212)"
                  boardWidth={isWidthUp('md', width)? 350 : '100%'}
                  title="Android"
                  content="Android application integrates with Firebase and RESTful APIs from other servers."
                  skills={[
                    { name: 'Java', level: 0.65, color: '#b07219' },
                    // { name: 'Kotlin', level: 0.3, color: '#F18E33', badge: 'new' }
                  ]}
                />
                </TrackVisibility>
            </Grid>
            <Grid item xs={isWidthUp('sm', width)? (isWidthUp('md', width)? (isWidthUp('lg', width)? (isWidthUp('xl', width)? 'auto' : 3): 4) : 6) : 12}>
              <TrackVisibility partialVisibility>
                <SkillBoard
                  icon={<img src={`${process.env.PUBLIC_URL}/res/img/general.svg`} alt="Other"/>}
                  color="#764848"
                  boardWidth={isWidthUp('md', width)? 350 : '100%'}
                  title="Other"
                  content="Gained practical experience in trading system architecture and implementation through a personal ROS project, developing the core system as a Rust-based ROS package."
                  skills={[
                    { name: 'Rust', level: 0.64, color: '#f05033', badge: 'new' },
                  ]}
                />
              </TrackVisibility>
            </Grid>
            <Grid item xs={isWidthUp('sm', width)? (isWidthUp('md', width)? (isWidthUp('lg', width)? (isWidthUp('xl', width)? 'auto' : 3): 4) : 6) : 12}>
              <TrackVisibility partialVisibility>
                <SkillBoard
                  icon={<img src={`${process.env.PUBLIC_URL}/res/img/software.svg`} alt="Software Tool"/>}
                  color="#ff6d04"
                  boardWidth={isWidthUp('md', width)? 350 : '100%'}
                  title="Software Tool"
                  content="Other software development tools."
                  skills={[
                    { name: 'Git', level: 0.8, color: '#f05033' },
                    { name: 'Linux', level: 0.8, color: '#f7be0e' },
                    { name: 'Docker', level: 0.8, color: '#3aa2f1' }
                  ]}
                />
              </TrackVisibility>
            </Grid>
            <Grid item xs={isWidthUp('sm', width)? (isWidthUp('md', width)? (isWidthUp('lg', width)? (isWidthUp('xl', width)? 'auto' : 3): 4) : 6) : 12}>
              <TrackVisibility partialVisibility>
                <SkillBoard
                  icon={<img src={`${process.env.PUBLIC_URL}/res/img/data.svg`} alt="Database"/>}
                  color="#ec5453"
                  boardWidth={isWidthUp('md', width)? 350 : '100%'}
                  title="Database"
                  content="Work experience with SQL and NoSQL."
                  skills={[
                    { name: 'MySQL', level: 0.75, color: '#f8981d' },
                    { name: 'PostgreSQL', level: 0.75, color: '#f8981d' },
                    { name: 'MongoDB', level: 0.6, color: '#13aa52' },
                    { name: 'Oracle Database', level: 0.6, color: '#aa13a8' },
                  ]}
                />
              </TrackVisibility>
            </Grid>
            <Grid item xs={isWidthUp('sm', width)? (isWidthUp('md', width)? (isWidthUp('lg', width)? (isWidthUp('xl', width)? 'auto' : 3): 4) : 6) : 12}>
              <TrackVisibility partialVisibility>
                <SkillBoard
                  icon={<img src={`${process.env.PUBLIC_URL}/res/img/ic.svg`} alt="Hardware"/>}
                  color="#4054b2"
                  boardWidth={isWidthUp('md', width)? 350 : '100%'}
                  title="Hardware"
                  content={`Hands-on experience in hardware development.\n\n- Soldering\n- Circuit Reading\n- Schematic Drawing\n- PCB Design\n- Hardware Trouble Shooting`}
                />
              </TrackVisibility>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            paddingTop: '10vh',
            background: '#292929',
          }}
        >
          <VerticalTimeline
            className={classes.timelineLine}
          >
            <VerticalTimelineElement
              date="Start programming in 2010"
              iconStyle={{ background: 'rgb(48, 132, 130)' }}
              iconClassName={classes.timelineIconSpan}
              icon={
                <img
                  src={`${process.env.PUBLIC_URL}/res/img/coding.svg`}
                  className={classes.timelineIcon}
                  alt="start"
                />
              }
              contentClassName={classes.timelineContent}
            >
              {''}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconClassName={classes.timelineIconSpan}
              date="2010 ~ 2014"
              iconStyle={{ background: '#000'}}
              icon={
                <img
                  src={`${process.env.PUBLIC_URL}/res/img/hacker.svg`}
                  className={classes.timelineIcon}
                  alt="hacking"
                />
              }
              contentClassName={classes.timelineContent}
            >
              <Typography color="primary" variant="h5" className={classes.title}>Self-Learning and Practicing Programming</Typography>
              <Typography color="primary" variant="subtitle2">
                Projects are mostly about hacking PC offline games and (Windows) system kernel.
              </Typography>
              <Divider className={classes.divider} variant="fullWidth"/>
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Visual Basic.Net" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Visual C++.Net" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="C/C++" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Windows Driver Kit" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Kernel programming & hacking" />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconClassName={classes.timelineIconSpan}
              date="Sep 2014"
              iconStyle={{ background: '#4e89d4'}}
              icon={
                <img
                  src={`${process.env.PUBLIC_URL}/res/img/edu.svg`}
                  className={classes.timelineIcon}
                  alt="education"
                />
              }
              contentClassName={classes.timelineContent}
            >
              <Typography color="primary" variant="h6">Started school at</Typography>
              <Typography color="primary" variant="h5" className={classes.organization}>Hong Kong University of Science and Technology</Typography>
              <Typography color="primary" variant="subtitle2">Bachelor of Engineering in Computer Engineering</Typography>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconClassName={classes.timelineIconSpan}
              date="Nov 2014"
              iconStyle={{ background: '#b50a0a'}}
              icon={
                <img
                  src={`${process.env.PUBLIC_URL}/res/img/robotics_team.svg`}
                  className={classes.timelineIcon}
                  alt="robtics team"
                />
              }
              contentClassName={classes.timelineContent}
            >
              <Typography color="primary" variant="h6">Started working in</Typography>
              <Typography color="primary" variant="h5" className={classes.organization}>HKUST Robotics Team</Typography>
              <Typography color="primary" variant="subtitle2">SmartCar sub-team</Typography>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconClassName={classes.timelineIconSpan}
              date="July 2015"
              iconStyle={{ background: '#ff9d49'}}
              icon={
                <img
                  src={`${process.env.PUBLIC_URL}/res/img/medal.svg`}
                  className={classes.timelineIcon}
                  alt="competition"
                />
              }
              contentClassName={classes.timelineContent}
            >
              <Typography color="primary" variant="h5" className={classes.title}>The 10<sup>th</sup> NXP<sup>®</sup> Freescale Cup Intelligent Car Competition 2015</Typography>
              <Typography color="primary" variant="subtitle2" className={classes.subtitle}>Magnetic Chasing Car Group - Merit Award</Typography>
              <Typography color="primary" variant="subtitle2" align="left">
                <ul>
                  <li>Designed and built a firmware for <strong>Arm® Cortex®-M4 Kinetis K60</strong> MCU to control a <strong>full automated</strong> car to run on a track</li>
                  <li>Used inductors to sense the magnetic field generated by the single AC powered wire on the middle of the track</li>
                  <li>Applied <strong>P controller</strong> for turning and <strong>PI controller</strong> for speed control</li>
                  <li>Designed a control system and algorithm to use the voltage induced by inductors on the car as input to control the car to complete the track with crosses and sharp turns</li>
                  <li>Optimized the firmware and fine-tune the car with my own grapher (Google extension)</li>
                </ul>
                Programmed two cars which are able to use inductors to sense magnetic field generated by the wire in the middle of the track in order to run on the track having crosses and sharp turns
              </Typography>
              <Divider className={classes.divider} variant="fullWidth"/>
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="C/C++" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Control System Design" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="PID Controller" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Embedded System Programming" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="ARM Cortex-M4 Core" />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              id='2016_comp'
              iconClassName={classes.timelineIconSpan}
              date="July 2016"
              iconStyle={{ background: '#ff9d49'}}
              icon={
                <img
                  src={`${process.env.PUBLIC_URL}/res/img/medal.svg`}
                  className={classes.timelineIcon}
                  alt="competition"
                />
              }
              contentClassName={classes.timelineContent}
            >
              <Typography color="primary" variant="h5" className={classes.title}>The 11<sup>th</sup> NXP<sup>®</sup> Freescale Cup Intelligent Car Competition 2016</Typography>
              <Typography color="primary" variant="subtitle2" className={classes.subtitle}>Magnetic Self-Balancing Car Group - Second Class Award</Typography>
              <Typography color="primary" variant="subtitle2" align="left">
                <ul>
                  <li>Designed and built a firmware for <strong>Arm® Cortex®-M4 Kinetis K60 MCU</strong> to control a <strong>two-wheeled full automated</strong> car to run on a track</li>
                  <li>Use inductors to sense the magnetic field generated by the single AC powered wire on the middle of the track</li>
                  <li>Designed a control system and algorithm to use the voltage induced by inductors on the car as input to control the car to complete the track with crosses and turns</li>
                  <li>Applied <strong>PD controller</strong> for angle control using the result from <strong>complementary filter on IMU</strong> output</li>
                  <li>Implemented <strong>Fuzzy Logic PD controller</strong> for turning</li>
                  <li>Designed algorithm to control car speed while keeping the <strong>inverted pendulum system</strong> stable</li>
                  <li>Optimized the firmware and fine-tune the car with my own grapher (Google extension)</li>
                </ul>
              </Typography>
              <Button variant='outlined' style={{ color: 'cyan', border: '2px solid #33dba23b' }} onClick={() => this.setState({ videoOpen_2016Comp: true })}>Watch Video</Button>
              <Divider className={classes.divider} variant="fullWidth"/>
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="C/C++" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Control System Design" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="PCB Design" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="PID Controller" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Fuzzy Logic PD Controller" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Embedded System Programming" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="ARM Cortex-M4 Core" />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconClassName={classes.timelineIconSpan}
              date="July 2016"
              iconStyle={{ background: '#888'}}
              icon={
                <img
                  src={`${process.env.PUBLIC_URL}/res/img/case.svg`}
                  className={classes.timelineIcon}
                  alt="left job"
                />
              }
              contentClassName={classes.timelineContent}
            >
              <Typography color="primary" variant="h6">Left</Typography>
              <Typography color="primary" variant="h5" className={classes.organization}>HKUST Robotics Team</Typography>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconClassName={classes.timelineIconSpan}
              date="Aug 2016"
              iconStyle={{ background: '#1e3d71'}}
              icon={
                <img
                  src={`${process.env.PUBLIC_URL}/res/img/usthing.svg`}
                  className={classes.timelineIcon}
                  alt="usthing"
                />
              }
              contentClassName={classes.timelineContent}
            >
              <Typography color="primary" variant="h6">Joined</Typography>
              <Typography color="primary" variant="h5" className={classes.organization}>USThing</Typography>
              <Typography color="primary" variant="subtitle2" className={classes.subtitle}>Co-founder, Android Developer</Typography>
              <Typography color="primary" variant="subtitle2" align="left">
                <ul>
                  <li>A team is made up of passionate and talented students who work towards the continual
                  betterment of the app and the HKUST student community</li>
                  <li>Mainly provide iOS and Android application for HKUST students</li>
                  <li>Major Android developer in early stage</li>
                  <li>Built and integrated CNN to solve CAPTCHA for facility booking system with approximately 98.1% accuracy</li>
                </ul>
              </Typography>
              <Divider className={classes.divider} variant="fullWidth" style={{'border': '1px solud blue'}}/>
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Python" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Java" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Android Development" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Firebase" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Keras" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="TensorFlow" />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconClassName={classes.timelineIconSpan}
              date="Feb 2017 ~ July 2017"
              iconStyle={{ background: '#4e89d4'}}
              icon={
                <img
                  src={`${process.env.PUBLIC_URL}/res/img/edu.svg`}
                  className={classes.timelineIcon}
                  alt="education"
                />
              }
              contentClassName={classes.timelineContent}
            >
              <Typography color="primary" variant="h6">Study Abroad</Typography>
              <Typography color="primary" variant="h5" className={classes.organization}>Universitat Politècnica de València</Typography>
              <Typography color="primary" variant="subtitle2">Exchange program in Computer Engineering</Typography>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconClassName={classes.timelineIconSpan}
              date="June 2017 ~ Apr 2018"
              iconStyle={{ background: '#1abf5c'}}
              icon={
                <img
                  src={`${process.env.PUBLIC_URL}/res/img/case.svg`}
                  className={classes.timelineIcon}
                  alt="work"
                />
              }
              contentClassName={classes.timelineContent}
            >
              {/* <Typography color="primary" variant="h6">Joined</Typography> */}
              <Typography color="primary" variant="h5" className={classes.organization}>ARTRO Digital Ltd.</Typography>
              <Typography color="primary" variant="subtitle2" className={classes.subtitle}>Freelance Web Developer</Typography>
              <Typography color="primary" variant="subtitle2" align="left">
                <ul>
                  <li>Owned the end-to-end development lifecycle for various companies, delivering tailored business websites with custom content management system (CMS), enhancing their ability to manage content and improve digital reach</li>
                </ul>
              </Typography>
              <Divider className={classes.divider} variant="fullWidth"/>
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Node.js" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="React" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="MongoDB" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="MySQL" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="RESTful APIs" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="SSL/TLS" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Git" />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconClassName={classes.timelineIconSpan}
              date="Apr 2017 ~ May 2018"
              iconStyle={{ background: '#a10efd'}}
              icon={
                <img
                  src={`${process.env.PUBLIC_URL}/res/img/project.svg`}
                  className={classes.timelineIcon}
                  alt="project"
                />
              }
              contentClassName={classes.timelineContent}
            >
              <Typography color="primary" variant="h6">Final Year Project</Typography>
              <Typography color="primary" variant="h5" className={classes.subtitle}>Fusion of visual inertial odometry and Wifi-based machine learning technique for indoor localization</Typography>
              <Typography color="primary" variant="subtitle2">Combining visual intertial odometry and WiFi fingerprinting localization using machine learning techniques</Typography>
              <Divider className={classes.divider} variant="fullWidth"/>
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Java" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Android Development" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Tensorflow" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Keras" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="AWS Cloud Service" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="MongoDB" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Python" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Node.js" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Express.js" />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconClassName={classes.timelineIconSpan}
              date="May 2018"
              iconStyle={{ background: '#888'}}
              icon={
                <img
                  src={`${process.env.PUBLIC_URL}/res/img/edu.svg`}
                  className={classes.timelineIcon}
                  alt="education"
                />
              }
              contentClassName={classes.timelineContent}
            >
              <Typography color="primary" variant="h6">Graduated from</Typography>
              <Typography color="primary" variant="h5" className={classes.organization}>Hong Kong University of Science and Technology</Typography>
              <Typography color="primary" variant="subtitle2">Bachelor of Engineering in Computer Engineering</Typography>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconClassName={classes.timelineIconSpan}
              date="Aug 2018 ~ Mar 2019"
              iconStyle={{ background: '#1abf5c'}}
              icon={
                <img
                  src={`${process.env.PUBLIC_URL}/res/img/case.svg`}
                  className={classes.timelineIcon}
                  alt="work"
                />
              }
              contentClassName={classes.timelineContent}
            >
              {/* <Typography color="primary" variant="h6">Joined</Typography> */}
              <Typography color="primary" variant="h5" className={classes.organization}>BHL Technology Ltd.</Typography>
              <Typography color="primary" variant="subtitle2" className={classes.subtitle}>Embedded Software Engineer</Typography>
              <Typography color="primary" variant="subtitle2" align="left">
                <ul>
                  <li>Engineered a ROS-based control system on Ubuntu, integrating position output from Blender for animation playback to enable facial expression and hand gesture control on a humanoid robot</li>
                  <li>Built a wireless remote access module for robots using a blend of Python, C, and Node.js, enabling remote control, real-time monitoring, and diagnostic capabilities</li>
                  <li>Developed a computer vision module leveraging the YOLO model running on Nvidia Jetson for face detection and tracking, integrating facial recognition capabilities (associating identities with face embeddings), enabling personalized user experiences, achieving over 90% detection accuracy at 30 FPS within 2 meters</li>
                  <li>Engineered an embedded software on Cortex-M3, controlling motors/servos via CAN bus with fine-tuned PID controller, enabling accurate positioning and smooth actuation to work with the ROS-based system</li>
                </ul>
              </Typography>
              <Divider className={classes.divider} variant="fullWidth"/>
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="C" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Python" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Node.js" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="RESTful APIs" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="WebSocket" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="CAN" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="PID Control" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Robot Operating System (ROS)" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Embedded System Design" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="JTAG" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="SWIM" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Blender" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Bash" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Linux" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Git" />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconClassName={classes.timelineIconSpan}
              date="Apr 2019 ~ Jun 2022"
              iconStyle={{ background: '#1abf5c'}}
              icon={
                <img
                  src={`${process.env.PUBLIC_URL}/res/img/soarstack.png`}
                  className={classes.timelineIcon}
                  style={{ transform: 'scale(1.27)' }}
                  alt="work"
                />
              }
              contentClassName={classes.timelineContent}
            >
              {/* <Typography color="primary" variant="h6">Joined</Typography> */}
              <Typography color="primary" variant="h5" className={classes.organization}>SoarStack Tech Solutions Ltd.</Typography>
              <Typography color="primary" variant="subtitle2" className={classes.subtitle}>Software Engineer</Typography>
              <Typography color="primary" variant="subtitle2" align="left">
                <ul>
                  <li>Developed scalable B2B platforms for European and Asian markets (Node.js, Typescript, React) on AWS (RDS, EC2), featuring order management, 3d simulation and a real-time secure chat with robust role hierarchy access control, processing hundreds of orders monthly and secure global customer communication</li>
                  <li>Maintained purchase systems while developing a new module automating purchase order generation and delivery for a government-funded educational institution (Java 1.6, MyFaces, Oracle Database), achieving and sustaining 99.98% system uptime</li>
                  <li>Leveraged Docker and Bash scripting to automate integrations and deployments, eliminating manual errors and enhancing system consistency, saving approximately 12 hours of manual work per week</li>
                  <li>Led the development of a POS system running on Linux devices for a small restaurant using Node.js, MongoDB, and React, including EPSON thermal printer integration for order and receipts printing, significantly improved operational workflow and customer checkout speed</li>
                </ul>
              </Typography>
              <Divider className={classes.divider} variant="fullWidth"/>
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Java" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Node.js" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Typescript" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Three.js" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="React" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="MongoDB" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Oracle Database" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="MySQL" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Apache MyFaces" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="JWT" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="OAuth" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="RESTful APIs" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="SSL/TLS" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="WebSocket" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="AWS RDS" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="AWS EC2" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Docker" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Bash" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Linux" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Git" />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconClassName={classes.timelineIconSpan}
              date="Nov 2022 ~ Apr 2024"
              iconStyle={{ background: '#1abf5c'}}
              icon={
                <img
                  src={`${process.env.PUBLIC_URL}/res/img/adi.svg`}
                  className={classes.timelineIcon}
                  style={{ transform: 'scale(1.270038401)' }}
                  alt="work"
                />
              }
              contentClassName={classes.timelineContent}
            >
              {/* <Typography color="primary" variant="h6">Joined</Typography> */}
              <Typography color="primary" variant="h5" className={classes.organization}>Analog Devices Inc.</Typography>
              <Typography color="primary" variant="subtitle2" className={classes.subtitle}>Firmware Engineer</Typography>
              <Typography color="primary" variant="subtitle2" align="left">
                <ul>
                  <li>Initiated and developed a Python library providing internal and customer tools with effective control over leading USB extender products via Ethernet, UART, RS232 and I2C interfaces, significantly streamlining development workflows and reducing firmware upload time by 50%</li>
                  <li>Maintained and evolved Scala-based product serialization software, enhancing its encryption module to implement robust data protection and safeguard product integrity during factory programming</li>
                  <li>Collaborated with the Philippine team to identify and resolve critical communication issues in a DisplayPort switcher communication module on Embedded Linux, ensuring compatibility with our product serialization software</li>
                  <li>CResearched and prototyped a proof-of-concept module for network-layer device discovery, successfully validating the feasibility for integration into USB extender products to simplify setup and enhance manageability</li>
                  <li>CContributed to the implementation of a communication protocol in firmware to enable comprehensive configuration, control, and logging for USB extenders</li>
                </ul>
              </Typography>
              <Divider className={classes.divider} variant="fullWidth"/>
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="C" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Python" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Scala" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="PostgreSQL" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="UART" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="I2C" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Atmel" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="ARP" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="JTAG" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="IGMP" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="DHCP" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="TCP/IP" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="UDP" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Embedded Linux" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Jira" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Atlassian Confluence" />
              <Chip className={classes.chip} variant="outlined" color="secondary" size="small" label="Git" />
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Grid>
      </>
    )
  }
}

export default withStyles(styles)(withWidth()(ThirdSection))