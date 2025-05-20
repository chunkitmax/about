import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import '../../vertical-timeline/style.min.css';


class FourthSection extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{
            minHeight: '20vh',
            background: 'linear-gradient(to bottom, #292929, #000 80%)'
          }}
        >
          {/* <Typography variant="subtitle2" color="primary">Comning Soon</Typography> */}
        </Grid>
      </>
    )
  }
}

export default FourthSection