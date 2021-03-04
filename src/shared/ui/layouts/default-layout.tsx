import { theme } from '../../../styles';
import { createStyles, Hidden, makeStyles } from '@material-ui/core';
import React from 'react'
import AppBar from '../patterns/app-bar'
import Drawer from '../patterns/drawer';

interface IProps {
  title?: string
}

const drawerWidth = 256;

const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      display: 'flex',
      minHeight: '100vh',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    app: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    main: {
      flex: 1,
    }
  });
})

 
const DefaultLayout: React.FC<IProps> = props => { 
  const [mobileOpen, setMobileOpen] = React.useState(false); 
  const classes = useStyles()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }; 

  return (
    <div className={classes.root}> 
      <nav className={classes.drawer}>
        <Hidden smUp>
          <Drawer
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        </Hidden>
        <Hidden xsDown>
          <Drawer PaperProps={{ style: { width: drawerWidth } }} />
        </Hidden>
      </nav>
      <div className={classes.app}>
        <AppBar onDrawerToggle={handleDrawerToggle}/>
        <main className={classes.main}>
        {props.children}
        </main>
      </div>
    </div>
  )
}

export default DefaultLayout
