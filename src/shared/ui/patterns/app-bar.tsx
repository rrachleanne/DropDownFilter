import React from 'react';
import PropTypes from 'prop-types';
import { AppBar as MuiAppBar, Grid, Hidden, IconButton } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import IconDefault from '../components/icon-default';


interface IProps {
  title?: string
  onDrawerToggle: () => void;
}

function HideOnScroll(prop: any) {
  const { children, window } = prop;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const AppBar: React.FC<IProps> = props => {
  const { onDrawerToggle } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <MuiAppBar color="primary" position="sticky" elevation={0}>
          <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton 
                   edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}>
                  <IconDefault iconName="grid-grid-20"/> 
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
            <Grid item> 
            </Grid>
          </Grid>
          </Toolbar>
        </MuiAppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}

export default AppBar